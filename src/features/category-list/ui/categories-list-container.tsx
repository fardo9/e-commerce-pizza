'use client'

import CategoriesList from './categories-list'

import { useCategories } from '@/src/entities/category'

export default function CategoriesListContainer() {
  const { categories, isLoading } = useCategories()
  return <CategoriesList items={categories} isLoading={isLoading} />
}
