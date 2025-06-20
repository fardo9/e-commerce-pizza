import { RefObject } from 'react'

import { RangeSliderRef } from '@/src/shared/components/ui/range-slider/model/types'

export interface ProductsFilterState {
  sizes: Set<string>
  pizzaTypes: Set<string>
  selectedIngredients: Set<string>
  priceRange: {
    values: [number, number]
    setValues: (v: [number, number]) => void
    setFrom: (v: number) => void
    setTo: (v: number) => void
    sliderRef: RefObject<RangeSliderRef>
  }
  setTypes: (type: string) => void
  setSizes: (size: string) => void
  setIngredients: (ingredient: string) => void
}
