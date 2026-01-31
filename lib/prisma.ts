import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient(): PrismaClient {
  // Check if DATABASE_URL is available
  const databaseUrl = process.env.DATABASE_URL
  
  if (!databaseUrl) {
    console.error('[Prisma] DATABASE_URL is not set')
    console.error('[Prisma] Available env vars:', Object.keys(process.env).filter(key => 
      key.includes('DATABASE') || key.includes('DB') || key.includes('POSTGRES')
    ))
    throw new Error(
      'DATABASE_URL environment variable is not set. Please configure it in Azure Application Settings.'
    )
  }

  console.log('[Prisma] Creating Prisma Client with DATABASE_URL:', databaseUrl.substring(0, 20) + '...')

  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  })
}

function getPrismaClient(): PrismaClient {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma
  }

  try {
    const client = createPrismaClient()
    globalForPrisma.prisma = client
    return client
  } catch (error) {
    console.error('[Prisma] Failed to create Prisma Client:', error)
    throw error
  }
}

export const prisma = getPrismaClient()

