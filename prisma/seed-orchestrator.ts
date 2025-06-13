import { prisma } from './prisma-client'
import { clearDatabase } from './seed/clear-database'
import { seedDatabase } from './seed/seed-data'

async function runSeed() {
  console.log('🧹 Clearing DB...')
  await clearDatabase()

  console.log('🌱 Running Prisma Seed...')
  await seedDatabase()
}

runSeed()
  .then(async () => {
    await prisma.$disconnect()
    console.log('✅ Seed completed')
  })
  .catch(async err => {
    console.error(err)
    await prisma.$disconnect()
    process.exit(1)
  })
