import { CheckboxGroupBase } from '@/src/shared/components/ui/checkbox-group/checkbox-group-base'

interface SizeCheckboxGroupProps {
  title: string
  items: { label: string; value: string }[]
  selected: Set<string>
  onToggle: (value: string) => void
}

export const SizeCheckboxGroup = (props: SizeCheckboxGroupProps) => {
  return (
    <CheckboxGroupBase
      title={props.title}
      items={props.items}
      itemLabel={item => item.label}
      itemValue={item => item.value}
      selected={props.selected}
      onToggle={props.onToggle}
      withSearch={false}
    />
  )
}
