import * as SliderPrimitive from '@radix-ui/react-slider'

export interface RangeSliderRef {
  getValue: () => [number, number]
  setValue: (val: [number, number]) => void
}

export interface SliderProps extends Omit<SliderPrimitive.SliderProps, 'value' | 'onValueChange'> {
  min: number
  max: number
  step: number
  value: [number, number]
  onValueChange: (value: [number, number]) => void
  className?: string
  formatLabel?: (value: number) => string
}
