import { ReactNode } from 'react'

import { IngredientDTO } from '@/src/shared/types/dto/ingredient.dto'

export type Ingredient = IngredientDTO

// change ???
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
  items: Ingredient[]
  defaultItems?: Ingredient[]
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
