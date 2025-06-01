import { useState } from 'react'

type RangeValue = [number, number]

export const useRangeSliderState = (initial: RangeValue) => {
  const [values, setValues] = useState<RangeValue>(initial)

  const setPriceFrom = (val: number) => setValues(([_, to]) => [val, to])
  const setPriceTo = (val: number) => setValues(([from, _]) => [from, val])

  return {
    values,
    setValues,
    setPriceFrom,
    setPriceTo
  }
}
