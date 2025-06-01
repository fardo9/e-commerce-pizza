import React from 'react'

import { cn } from '@shared/lib/utils'
import { IProps } from '@shared/types'
import { Container } from '@components'
import { CategoriesList } from '@features/categoryList/ui/CategoriesList'
import { SortPopup } from '@features/sort-product/ui/SortPopup'

interface Props extends IProps {
  categories?: any[] // Category[]
  isLoading?: boolean
  activeID?: string | null
}

export const TopBar: React.FC<Props> = ({ className, categories, isLoading }) => {
  return (
    <div className={cn('sticky top-0 py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className="flex justify-between">
        <CategoriesList items={categories} isLoading={isLoading} />
        <SortPopup />
      </Container>
    </div>
  )
}
