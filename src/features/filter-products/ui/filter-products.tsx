'use client'

import { FC, useRef } from 'react'

import { useRangeSliderState } from '@shared/hooks/useRangeSliderState'
import { IProps } from '@shared/types'
import { FilterCheckbox, RangeSlider } from '@components'
import { RangeSliderRef } from '@components/range-slider/types'
import { Input, Title } from '@components/ui'

import { useIngredients } from '@/src/entities/ingredients/model/use-ingredients'
import { IngredientCheckboxGroup } from '@/src/entities/ingredients/ui/ingredient-checkbox-group'

export const FilterProducts: FC<IProps> = ({ className }) => {
  const { ingredients, isLoadingIngredients, isError } = useIngredients()

  const { values, setValues, setPriceFrom, setPriceTo } = useRangeSliderState([0, 450])
  const sliderRef = useRef<RangeSliderRef>(null)

  console.log('ingredients', ingredients)

  return (
    <div className={className}>
      <Title text="Filter" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox label="Dought type" value="types" />
        <FilterCheckbox label="Size" value="sizes" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from to:</p>
        {/* <div className="flex gap-3 mb-5">
            <Skeleton className="w-23 h-8 rounded-md" />
            <Skeleton className="w-23 h-8 rounded-md" />
          </div> */}
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={200}
            value={values[0]}
            onChange={e => setPriceFrom(Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={300}
            placeholder="300"
            value={values[1]}
            onChange={e => setPriceTo(Number(e.target.value))}
          />
        </div>

        <div className="flex mb-5">
          <RangeSlider ref={sliderRef} min={0} max={1000} step={10} value={values} onValueChange={setValues} />
        </div>

        <div className="mt-10">
          <IngredientCheckboxGroup
            title="Ingredients"
            name="ingredients"
            className="mt-5"
            limit={6}
            defaultItems={ingredients?.slice(0, 5)}
            items={ingredients ?? []}
            isLoading={isLoadingIngredients}
            isError={false}
            error={isError}
            onClickCheckbox={() => {}}
            // selected={filter.selectedIngredients}
          />
        </div>
      </div>
    </div>
  )
}
