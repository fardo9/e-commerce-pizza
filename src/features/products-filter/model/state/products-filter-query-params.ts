import { useMemo } from 'react'
import { useSet } from 'react-use'

import { ProductsFilterState } from '../types/productsFilterState'

import { RangeSliderRef } from '@/src/shared/components/ui/range-slider/model/types'
import { useRangeSliderState } from '@/src/shared/hooks'
import { useCreateSafeRef } from '@/src/shared/utils/createRef'

export const useProductsFilter = (): ProductsFilterState => {
  const [sizes, { toggle: toggleSizes }] = useSet<string>(new Set())
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet<string>(new Set())
  const [selectedIngredients, { toggle: toggleIngredients }] = useSet<string>(new Set())

  const { values, setValues, setFrom, setTo } = useRangeSliderState([0, 450])

  const sliderRef = useCreateSafeRef<RangeSliderRef>()

  return useMemo(
    () => ({
      sizes,
      pizzaTypes,
      selectedIngredients,
      priceRange: {
        values,
        setValues,
        setFrom,
        setTo,
        sliderRef
      },
      setTypes: togglePizzaTypes,
      setSizes: toggleSizes,
      setIngredients: toggleIngredients
    }),
    [sizes, pizzaTypes, selectedIngredients, values, sliderRef]
  )
}
