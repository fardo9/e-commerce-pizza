import { ReactNode } from 'react'

import { IngredientDTO } from '@/src/server/dto/ingredients/ingredient.dto'

export interface IngredientCheckboxItem {
  label: string
  name?: string
  value: string
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  endAdornment?: ReactNode
}

export interface IngredientsProps {
  title: string
  name: string
  items: IngredientDTO[]
  defaultItems?: IngredientDTO[]
  limit?: number
  isLoading?: boolean
  isError?: boolean
  error?: string // temporaty for testing
  searchInputPlaceholder?: string
  onClickCheckbox?: (id: string) => void
  defaultValue?: string[]
  selected?: Set<string>
  className?: string
}
