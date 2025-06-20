'use client'

import { CheckIcon } from 'lucide-react'

import { useProductVariantStore } from '@/src/entities/products/model/use-product-variant-store'
import { Title } from '@/src/shared/components/ui'
import { cn } from '@/src/shared/lib/utils'

export const ProductIngredientsSelector = () => {
  const { ingredients, selectedIngredientIds, toggleIngredient } = useProductVariantStore()

  return (
    <div className="mt-6">
      <Title text="Choose ingredients" size="sm" className="mb-2" />
      <div className="flex flex-wrap gap-2">
        {ingredients.map(ingredient => {
          const selected = selectedIngredientIds.includes(ingredient.id)

          return (
            <button
              key={ingredient.id}
              onClick={() => toggleIngredient(ingredient.id)}
              className={cn(
                'border rounded-full px-3 py-1 text-sm flex items-center gap-2 transition-all',
                selected ? 'bg-gray-200 border-gray-400' : 'border-gray-300 hover:bg-gray-100'
              )}
            >
              {selected && <CheckIcon size={14} />}
              {ingredient.name}
              {ingredient.price > 0 && (
                <span className="text-xs text-gray-500">+{ingredient.price}₴</span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
