import { PizzaItem } from '@shared/types'
import { Container } from '@components'
import { Title } from '@components/ui'
import { FilterProducts } from '@features/filter-products'
import { TopBar } from '@widgets/TopBar'

import { ProductsList } from '@/src/features/product-list'

export default async function HomePage() {
  const pizzas: PizzaItem[] = [
    {
      id: 1,
      name: 'Margherita',
      price: 149,
      imageUrl: '/images/pizza/margherita.jpg',
      ingredients: [
        { label: 'Tomatoes', value: '1' },
        { label: 'Mozzarella', value: '2' },
        { label: 'Basil', value: '3' }
      ]
    },
    {
      id: 2,
      name: 'Pepperoni',
      price: 179,
      imageUrl: '/images/pizza/pepperoni.jpg',
      ingredients: [
        { label: 'Tomatoes', value: '1' },
        { label: 'Mozzarella', value: '2' },
        { label: 'Pepperoni', value: '4' }
      ]
    },
    {
      id: 3,
      name: 'Hawaiian',
      price: 169,
      imageUrl: '/images/pizza/hawaiian.jpg',
      ingredients: [
        { label: 'Tomatoes', value: '1' },
        { label: 'Mozzarella', value: '2' },
        { label: 'Ham', value: '5' },
        { label: 'Pineapple', value: '10' }
      ]
    },
    {
      id: 4,
      name: 'Chicken BBQ',
      price: 189,
      imageUrl: '/images/pizza/chicken-bbq.jpg',
      ingredients: [
        { label: 'BBQ Sauce', value: '6' },
        { label: 'Chicken', value: '7' },
        { label: 'Onion', value: '8' },
        { label: 'Mozzarella', value: '2' }
      ]
    }
  ]

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
              <div className="flex flex-col gap-16">
                <ProductsList title={'Pizzas'} items={pizzas} categoryId={1} />
                <ProductsList title={'Combo'} items={pizzas} categoryId={2} />
                <ProductsList title={'Snacks'} items={pizzas} categoryId={3} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
