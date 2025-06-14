'use client'

import { FC } from 'react'

import { useProductsFilter } from '../model/useProductsFilter'
import { useProductsQuerySync } from '../model/useProductsQuerySync'
import { DoughCheckboxGroup } from './dough-checkbox-group'
import { SizeCheckboxGroup } from './size-checkbox-group'

import { RangeSlider } from '@/components'
import { Input, Title } from '@/components/ui'
import { IProps } from '@/shared/types'
import { IngredientCheckboxGroup } from '@/src/entities/ingredients'
import { useIngredients } from '@/src/entities/ingredients/model/use-ingredients'
import { DOUGH_OPTIONS, SIZE_OPTIONS } from '@/src/shared/config/filter-options'
import { useDebug } from '@/src/shared/utils/use-debug'

export const ProductsFilter: FC<IProps> = ({ className }) => {
  const { ingredients, isLoadingIngredients } = useIngredients()
  const filter = useProductsFilter()
  useProductsQuerySync(filter)

  useDebug('Filters', filter, true)

  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <DoughCheckboxGroup
          title="Dough type"
          items={DOUGH_OPTIONS}
          selected={filter.pizzaTypes}
          onToggle={filter.setTypes}
        />

        <SizeCheckboxGroup
          title="Size"
          items={SIZE_OPTIONS}
          selected={filter.sizes}
          onToggle={filter.setSizes}
        />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from to:</p>

        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={200}
            value={filter.priceRange.values[0]}
            onChange={e => filter.priceRange.setFrom(Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={300}
            placeholder="300"
            value={filter.priceRange.values[1]}
            onChange={e => filter.priceRange.setTo(Number(e.target.value))}
          />
        </div>

        <div className="flex mb-5">
          <RangeSlider
            ref={filter.priceRange.sliderRef}
            min={0}
            max={1000}
            step={10}
            value={filter.priceRange.values}
            onValueChange={filter.priceRange.setValues}
          />
        </div>

        <div className="mt-10">
          <IngredientCheckboxGroup
            title="Ingredients"
            items={ingredients ?? []}
            isLoading={isLoadingIngredients}
            onToggle={filter.setIngredients}
            selected={filter.selectedIngredients}
          />
        </div>
      </div>
    </div>
  )
}
