import { Container } from '@components'
import { Title } from '@components/ui'
import { FilterProducts } from '@features/filter-products'
import { TopBar } from '@widgets/TopBar'

export default async function HomePage() {
  const cats = [
    { id: 1, name: 'Pizzas' },
    { id: 2, name: 'Combo' },
    { id: 3, name: 'Snacks' },
    { id: 4, name: 'Cocktails' },
    { id: 5, name: 'Coffee' },
    { id: 6, name: 'Drinks' },
    { id: 7, name: 'Desserts' }
  ]

  return (
    <>
      <Container className=" flex justify-between mt-5">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={cats} isLoading={false} />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <FilterProducts />
          </div>
          <div className="w-full">
            <Title text="Products" size="sm" className="mb-5 font-bold" />
          </div>
        </div>
      </Container>
    </>
  )
}
