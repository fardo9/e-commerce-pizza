'use client'

import { FC, useState } from 'react'

import { FilterCheckbox } from '@components'
import { Button, Input } from '@components/ui'

import { IngredientsProps } from '../model/types'

export const IngredientCheckboxGroup: FC<IngredientsProps> = ({
  title,
  items,
  limit = 5,
  searchInputPlaceholder = 'Search...',
  className,
  onClickCheckbox,
  selected,
  name
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const hasSearch = searchValue.trim() !== ''

  const filteredItems = hasSearch
    ? items?.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
    : items

  const visibleItems = hasSearch ? filteredItems : showAll ? filteredItems : filteredItems.slice(0, limit)

  const shouldShowButton = !hasSearch && filteredItems.length > limit

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      <div className="mb-5">
        <Input
          value={searchValue}
          placeholder={searchInputPlaceholder}
          className="bg-gray-50 border-none"
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {visibleItems.map(item => (
          <FilterCheckbox
            key={item.id}
            name={name}
            label={item.name}
            value={item.name}
            checked={selected?.has(item.name)}
            onCheckedChange={() => onClickCheckbox?.(item.name)}
          />
        ))}
      </div>

      {shouldShowButton && (
        <div className={!showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <Button variant="outline" className="mt-4" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'Show All'}
          </Button>
        </div>
      )}
    </div>
  )
}
