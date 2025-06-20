'use client'

import { Container } from '@/components'
import { Title } from '@/components/ui'
import ProductListContainer from '@/src/features/product-list/ui/product-list-container'
import { ProductsFilter } from '@/src/features/products-filter/ui/products-filter'
import TopBar from '@/src/widgets/top-bar/ui/top-bar'

export default function MainClientPage() {
  return (
    <>
      <Container className=" flex justify-between mt-5">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <ProductsFilter />
          </div>
          <div className="w-full">
            <div className="flex-1">
              <ProductListContainer />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
