import { useMemo } from 'react'
import { useSet } from 'react-use'

import { RangeSliderRef } from '@/src/shared/components/ui/range-slider/model/types'
import { useRangeSliderState } from '@/src/shared/hooks'
import { useCreateSafeRef } from '@/src/shared/utils/createRef'

export interface IPriceRange {
  priceFrom?: number
  priceTo?: number
}

export const useProductsFilter = () => {
  const [sizes, { toggle: toggleSizes }] = useSet<string>(new Set())
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet<string>(new Set())
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet<string>(new Set())

  const { values, setValues, setPriceFrom, setPriceTo } = useRangeSliderState([0, 450])

  const sliderRef = useCreateSafeRef<RangeSliderRef>()

  return useMemo(
    () => ({
      sizes,
      pizzaTypes,
      selectedIngredients,
      priceRange: {
        values,
        setValues,
        setPriceFrom,
        setPriceTo,
        sliderRef
      },
      setPizzaTypes: togglePizzaTypes,
      setSizes: toggleSizes,
      setSelectedIngredients: toggleIngredients
    }),
    [sizes, pizzaTypes, selectedIngredients, values, sliderRef]
  )
}
