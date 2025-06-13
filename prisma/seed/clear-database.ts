import { prisma } from '../prisma-client'

async function safeDelete(table: string) {
  try {
    await prisma.$executeRawUnsafe(`DELETE FROM "${table}" WHERE 1=1`)
    console.log(`✅ Cleared table: ${table}`)
  } catch (err) {
    console.warn(`⚠️ Skipped (table missing): ${table} - ${err}`)
  }
}

export async function clearDatabase() {
  const tables = [
    'StoryItem',
    'Story',
    'CartItem',
    'Cart',
    'ProductItem',
    'Product',
    'Ingredient',
    'Category',
    'User'
  ]

  for (const table of tables) {
    await safeDelete(table)
  }
}
