export interface RangeSliderRef {
  getValue: () => [number, number]
  setValue: (val: [number, number]) => void
}

export interface SliderProps {
  min: number
  max: number
  step: number
  value: [number, number]
  onValueChange: (value: [number, number]) => void
  className?: string
  formatLabel?: (value: number) => string
}
