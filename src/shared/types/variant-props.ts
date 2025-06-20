import { ProductDTO } from '@/src/server/dto/product/product.dto'

export interface ProductVariantProps {
  product: ProductDTO
  price: number | null
  selectedSize: number | null
  selectedType: number | null
  setSelectedSize: (val: number) => void
  setSelectedType: (val: number) => void
}

export interface ProductVariantItem {
  size: number
  type: number
  price: number
}

export interface Variant<T> {
  name: string
  value: T
  disabled?: boolean
}
