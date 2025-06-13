import { ProductUI } from '@/src/entities/products'

export interface ProductListProps {
  title: string
  items: ProductUI[]
  categoryId: number
  listClassName?: string
  className?: string
}
