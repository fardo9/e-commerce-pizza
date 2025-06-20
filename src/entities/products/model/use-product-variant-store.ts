import { create } from 'zustand'

import { PizzaSize, PizzaType } from './constants'

import { IngredientDTO } from '@/src/server/dto/ingredients/ingredient.dto'
import { ProductItemDTO } from '@/src/server/dto/product-types/product-types.dto'
import { Variant } from '@/src/shared/types/variant-props'

interface ProductVariantStore {
  isInitialized: boolean
  markInitialized: () => void

  selectedType: PizzaType | null
  selectedSize: PizzaSize | null
  setSelectedType: (type: PizzaType) => void
  setSelectedSize: (size: PizzaSize) => void

  items: ProductItemDTO[]
  setItems: (items: ProductItemDTO[]) => void

  ingredients: IngredientDTO[]
  selectedIngredientIds: number[]
  setIngredients: (ingredients: IngredientDTO[]) => void
  toggleIngredient: (id: number) => void

  basePrice: number | null
  getTotalPrice: () => number

  getSizeVariantsWithDisabled: (sizes: Variant<PizzaSize>[]) => Variant<PizzaSize>[]
}

export const useProductVariantStore = create<ProductVariantStore>((set, get) => ({
  isInitialized: false,
  markInitialized: () => set({ isInitialized: true }),

  selectedType: null,
  selectedSize: null,

  items: [],
  setItems: items => {
    set({ items })
    const availableTypes = [...new Set(items?.map(i => i.pizzaType).filter(Boolean))]
    const defaultType = availableTypes[0] as PizzaType | null

    const sizesForType = items.filter(i => i.pizzaType === defaultType).map(i => i.size)
    const defaultSize = sizesForType[0] as PizzaSize | null

    const variant = items.find(i => i.pizzaType === defaultType && i.size === defaultSize)

    set({
      selectedType: defaultType,
      selectedSize: defaultSize,
      basePrice: variant?.price ?? null
    })
  },

  ingredients: [],
  selectedIngredientIds: [],

  setIngredients: ingredients => set({ ingredients }),

  toggleIngredient: id => {
    const { selectedIngredientIds } = get()
    const isSelected = selectedIngredientIds.includes(id)
    const newSelected = isSelected
      ? selectedIngredientIds.filter(i => i !== id)
      : [...selectedIngredientIds, id]
    set({ selectedIngredientIds: newSelected })
  },

  setSelectedType: type => {
    const { items } = get()
    const sizes = items.filter(i => i.pizzaType === type).map(i => i.size)
    const defaultSize = sizes[0] as PizzaSize | null
    const variant = items.find(i => i.pizzaType === type && i.size === defaultSize)
    set({
      selectedType: type,
      selectedSize: defaultSize,
      basePrice: variant?.price ?? null
    })
  },

  setSelectedSize: size => {
    const { selectedType, items } = get()
    const variant = items.find(i => i.pizzaType === selectedType && i.size === size)
    set({
      selectedSize: size,
      basePrice: variant?.price ?? null
    })
  },

  basePrice: null,
  getTotalPrice: () => {
    const { basePrice, ingredients, selectedIngredientIds } = get()
    const extra = ingredients
      .filter(i => selectedIngredientIds.includes(i.id))
      .reduce((sum, i) => sum + i.price, 0)
    return (basePrice ?? 0) + extra
  },

  getSizeVariantsWithDisabled: sizes => {
    const { items, selectedType } = get()
    return sizes.map(s => ({
      ...s,
      disabled: !items.some(i => i.pizzaType === selectedType && i.size === s.value)
    }))
  }
}))
