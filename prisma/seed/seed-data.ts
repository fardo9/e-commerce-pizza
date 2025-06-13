import { Prisma } from '@prisma/client'
import { hashSync } from 'bcrypt'

import { prisma } from '../prisma-client'
import { _ingredients, categories, products } from './constants'

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10
}

const generateProductItem = ({
  productId,
  pizzaType,
  size
}: {
  productId: number
  pizzaType?: 1 | 2
  size?: 20 | 30 | 40
}) => {
  return {
    productId,
    price: randomDecimalNumber(190, 600),
    pizzaType,
    size
  } as Prisma.ProductItemUncheckedCreateInput
}

export async function seedDatabase() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User Pipko',
        email: 'user@gmail.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER'
      },
      {
        fullName: 'Admin Admin',
        email: 'admin@gmail.com',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'ADMIN'
      }
    ]
  })

  await prisma.category.createMany({ data: categories })
  await prisma.ingredient.createMany({ data: _ingredients })
  await prisma.product.createMany({ data: products })

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Pepperoni Fresh',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
      categoryId: 1,
      ingredients: { connect: _ingredients.slice(0, 5) }
    }
  })

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Cheese',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
      categoryId: 1,
      ingredients: { connect: _ingredients.slice(5, 10) }
    }
  })

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Chorizo Fresh',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
      categoryId: 1,
      ingredients: { connect: _ingredients.slice(10, 40) }
    }
  })

  await prisma.productItem.createMany({
    data: [
      generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza1.id, pizzaType: 2, size: 40 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza2.id, pizzaType: 2, size: 40 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productId: pizza3.id, pizzaType: 2, size: 40 })
    ]
  })

  await prisma.cart.createMany({
    data: [
      { userId: 1, totalAmount: 0, token: '11111' },
      { userId: 2, totalAmount: 0, token: '222222' }
    ]
  })

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: { connect: [{ id: 1 }, { id: 2 }, { id: 3 }] }
    }
  })

  await prisma.story.createMany({
    data: [
      {
        previewImageUrl:
          'https://cdn.inappstory.ru/story/xep/xzh/zmc/cr4gcw0aselwvf628pbmj3j/custom_cover/logo-350x440.webp'
      }
    ]
  })

  await prisma.storyItem.createMany({
    data: [
      {
        storyId: 1,
        sourceUrl: 'https://cdn.inappstory.ru/file/dd/yj/sx/oqx9feuljibke3mknab7ilb35t.webp'
      }
    ]
  })
}
