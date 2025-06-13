'use client'

import { useState } from 'react'

import { FilterCheckbox } from '../filter-checkbox/filter-checkbox'
import { IngredientSkeleton } from '../skeleton/ingredient-skeleton'
import { SearchInputWithClear } from './search-input-with-clear'
import { ShowMoreButton } from './show-more-button'

interface CheckboxGroupBaseProps<T> {
  title: string
  items: T[]
  itemLabel: (item: T) => string
  itemValue: (item: T) => string
  limit?: number
  selected: Set<string>
  onToggle: (value: string) => void
  isLoading?: boolean
  withSearch?: boolean
}

export function CheckboxGroupBase<T>({
  title,
  items,
  itemLabel,
  itemValue,
  limit = 5,
  selected,
  onToggle,
  isLoading = false,
  withSearch = true
}: CheckboxGroupBaseProps<T>) {
  const [searchValue, setSearchValue] = useState('')
  const [showAll, setShowAll] = useState(false)

  const hasSearch = searchValue.trim() !== ''
  const filteredItems = hasSearch
    ? items.filter(item => itemLabel(item).toLowerCase().includes(searchValue.toLowerCase()))
    : items

  const visibleItems = showAll || hasSearch ? filteredItems : filteredItems.slice(0, limit)
  const shouldShowButton = !hasSearch && filteredItems.length > limit

  if (isLoading) {
    return <IngredientSkeleton count={limit} />
  }

  return (
    <div>
      <p className="font-bold mb-3">{title}</p>

      {withSearch && (
        <SearchInputWithClear
          value={searchValue}
          onChange={setSearchValue}
          placeholder="Search..."
        />
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {visibleItems.map(item => {
          const value = itemValue(item)
          const label = itemLabel(item)
          return (
            <FilterCheckbox
              key={value}
              label={label}
              value={value}
              checked={selected.has(value)}
              onCheckedChange={() => onToggle(value)}
            />
          )
        })}
      </div>

      {shouldShowButton && <ShowMoreButton showAll={showAll} setShowAll={setShowAll} />}
    </div>
  )
}
