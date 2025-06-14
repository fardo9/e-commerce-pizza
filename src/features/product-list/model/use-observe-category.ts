import { RefObject, useEffect } from 'react'
import { useIntersection } from 'react-use'

import { useCategoryStore } from '@/shared/store/category'

export function useObserveCategory(ref: RefObject<HTMLDivElement | null>, categoryId: number) {
  const setActiveCategory = useCategoryStore(state => state.setActiveId)

  const intersection = useIntersection(ref as RefObject<HTMLElement>, {
    root: null,
    rootMargin: '',
    threshold: 0.4
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategory(categoryId)
    }
  }, [intersection?.isIntersecting, categoryId, setActiveCategory])
}
