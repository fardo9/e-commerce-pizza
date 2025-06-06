'use client'

import { CategoriesList } from './categories-list'

import { useCategories } from '@/src/entities/category/model/use-categories'

export const CategoriesListContainer = () => {
  const { categories, isLoading } = useCategories()

  return <CategoriesList items={categories} isLoading={isLoading} />
}
