'use client'

import type { ReactNode } from 'react'

import { Checkbox } from '@components/ui'

interface FilterCheckboxProps {
  label: string
  name?: string
  value: string
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  endAdornment?: ReactNode
}

export function FilterCheckbox({ label, name, value, checked, onCheckedChange, endAdornment }: FilterCheckboxProps) {
  const id = `checkbox-${String(name)}-${String(value)}`
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        value={value}
        className="w-6 h-6 rounded-[8px]"
      />
      <label htmlFor={id} className="flex-1 cursor-pointer leading-none">
        {label}
      </label>
      {endAdornment}
    </div>
  )
}
