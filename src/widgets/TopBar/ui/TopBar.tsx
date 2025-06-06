import React from 'react'

import { cn } from '@shared/lib/utils'
import { IProps } from '@shared/types'
import { Container } from '@components'
import { SortPopup } from '@features/sort-product/ui/SortPopup'

import { CategoriesListContainer } from '@/src/features/category-list/ui/categories-list-container'

export function TopBar({ className }: IProps) {
  return (
    <div className={cn('sticky top-0 py-5 shadow-lg shadow-black/5 z-10', className)}>
      <Container className="flex justify-between">
        <CategoriesListContainer />
        <SortPopup />
      </Container>
    </div>
  )
}
