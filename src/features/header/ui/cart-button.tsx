import { ArrowRight, ShoppingCart } from 'lucide-react'

import { Button } from '@/shared/components/ui'

export const CartButton = () => (
  <Button variant="outline" className="group relative">
    <b>520 ₴</b>
    <span className="mx-3 h-full w-[1px] bg-primary group-hover:bg-primary-foreground" />
    <ShoppingCart
      size={16}
      className="relative group-hover:opacity-0 group-hover:duration-300"
      strokeWidth={2}
    />
    <ArrowRight
      size={16}
      className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
    />
  </Button>
)
