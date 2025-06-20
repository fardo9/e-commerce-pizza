import { Variant } from '@/src/shared/types/variant-props'

export enum CategoryId {
  Pizza = 1,
  Coffee = 2,
  Appetizer = 3,
  Cocktail = 4,
  Combo = 5,
  Drinks = 6,
  Desserts = 7
}

export enum PizzaType {
  Traditional = 1,
  Thin = 2
}

export enum PizzaSize {
  Small = 20,
  Medium = 30,
  Large = 40
}

export const pizzaTypes: Variant<PizzaType>[] = [
  { name: 'Traditional', value: PizzaType.Traditional },
  { name: 'Thin', value: PizzaType.Thin }
]

export const pizzaSizes: Variant<PizzaSize>[] = [
  { name: 'Small', value: PizzaSize.Small },
  { name: 'Medium', value: PizzaSize.Medium },
  { name: 'Large', value: PizzaSize.Large }
]

export enum CoffeeType {
  Espresso = 'espresso',
  Latte = 'latte',
  Cappuccino = 'cappuccino'
}

export const coffeeTypes: Variant<CoffeeType>[] = [
  { name: 'Espresso', value: CoffeeType.Espresso },
  { name: 'Latte', value: CoffeeType.Latte },
  { name: 'Cappuccino', value: CoffeeType.Cappuccino }
]
