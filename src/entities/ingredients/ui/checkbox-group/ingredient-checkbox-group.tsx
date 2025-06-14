'use client'

import { IngredientDTO } from '@/src/server/dto/ingredients/ingredient.dto'
import { CheckboxGroupBase } from '@/src/shared/components/ui/checkbox-group/checkbox-group-base'

interface IngredientCheckboxGroupProps {
  title: string
  items: IngredientDTO[]
  selected: Set<string>
  onToggle: (value: string) => void
  isLoading?: boolean
}

export const IngredientCheckboxGroup = (props: IngredientCheckboxGroupProps) => {
  return (
    <CheckboxGroupBase
      title={props.title}
      items={props.items}
      itemLabel={item => item.name}
      itemValue={item => item.name}
      selected={props.selected}
      onToggle={props.onToggle}
      isLoading={props.isLoading}
      withSearch
    />
  )
}
