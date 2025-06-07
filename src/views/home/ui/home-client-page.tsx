'use client'

import { Container } from '@components'
import { Title } from '@components/ui'

import { FilterProducts } from '@/src/features/filter-products'
import TopBar from '@/src/widgets/TopBar/ui/TopBar'

export default function HomeClientPage() {
  return (
    <>
      <Container className=" flex justify-between mt-5">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <FilterProducts />
          </div>
          <div className="w-full">
            <div className="flex-1">
              <div className="flex flex-col gap-16"></div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
