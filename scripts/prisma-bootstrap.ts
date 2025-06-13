import { execSync } from 'child_process'

import { prismaSchemaPath, prismaSeedPath } from '../src/shared/config/prisma-path'

console.log('🚀 SaaS Prisma Bootstrap starting...')

execSync(`npx prisma migrate reset --force --skip-seed --schema=${prismaSchemaPath}`, {
  stdio: 'inherit'
})
execSync(`npx prisma generate --schema=${prismaSchemaPath}`, { stdio: 'inherit' })
execSync(`tsx ${prismaSeedPath}`, { stdio: 'inherit' })
