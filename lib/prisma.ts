import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient(): PrismaClient {
  // Check if DATABASE_URL is available
  const databaseUrl = process.env.DATABASE_URL
  
  if (!databaseUrl) {
    // During build time, DATABASE_URL might not be available
    // Don't throw during build - we'll handle it at runtime
    const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build' || 
                       process.env.NEXT_PHASE === 'phase-development-build'
    
    if (isBuildTime) {
      // Return a dummy client that won't be used during build
      // This prevents build failures
      return new PrismaClient({
        datasources: {
          db: {
            url: 'postgresql://build-time-placeholder',
          },
        },
      }) as PrismaClient
    }
    
    console.error('[Prisma] DATABASE_URL is not set')
    console.error('[Prisma] Available env vars:', Object.keys(process.env).filter(key => 
      key.includes('DATABASE') || key.includes('DB') || key.includes('POSTGRES')
    ))
    throw new Error(
      'DATABASE_URL environment variable is not set. Please configure it in Azure Application Settings.'
    )
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Prisma] Creating Prisma Client with DATABASE_URL:', databaseUrl.substring(0, 20) + '...')
  }

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

