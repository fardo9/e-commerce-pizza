'use client'

import React from 'react'

import { Checkbox } from '@components/ui'

interface Props {
  text: string
  name?: string
  value: string
  onCheckedChange?: (checked: boolean) => void
  checked?: boolean
  endAdornment?: React.ReactNode
}

const FilterCheckbox: React.FC<Props> = ({
  text,
  name,
  value,
  onCheckedChange,
  checked,
  endAdornment
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="rounded-[8px] w-6 h-6"
        id={`checkbox-${String(name)}-${String(value)}`}
      />
      <label
        htmlFor={`checkbox-${String(name)}-${String(value)}`}
        className="leading-none cursor-pointer flex-1"
      >
        {text}
      </label>
      {endAdornment}
    </div>
  )
}

export default FilterCheckbox
