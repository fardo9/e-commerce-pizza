'use client'

import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@shared/lib/utils'

import { RangeSliderRef, SliderProps } from './types'

const RangeSlider = forwardRef<RangeSliderRef, SliderProps>(
  ({ className, min, max, step, formatLabel, value, onValueChange, ...props }, ref) => {
    const [localValue, setLocalValue] = useState<[number, number]>(value)
    const internalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      setLocalValue(value)
    }, [value])

    useImperativeHandle(ref, () => ({
      getValue: () => localValue,
      setValue: (val: [number, number]) => setLocalValue(val)
    }))

    const handleChange = (vals: number[]) => {
      setLocalValue(vals as [number, number])
      onValueChange(vals as [number, number])
    }

    return (
      <SliderPrimitive.Root
        ref={internalRef}
        min={min}
        max={max}
        step={step}
        value={localValue}
        onValueChange={handleChange}
        className={cn('relative flex w-full items-center', className)}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        {localValue.map((val, i) => (
          <React.Fragment key={i}>
            <div
              className="absolute text-center"
              style={{
                left: `calc(${((val - min) / (max - min)) * 100}% + 0px)`,
                top: `10px`
              }}
            >
              <span className="text-sm">{formatLabel ? formatLabel(val) : val}</span>
            </div>
            <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-white shadow" />
          </React.Fragment>
        ))}
      </SliderPrimitive.Root>
    )
  }
)

RangeSlider.displayName = 'RangeSlider'

export default RangeSlider
