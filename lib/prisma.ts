import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient(): PrismaClient {
  // Use environment variable or fallback to hardcoded value for quick deployment
  // TODO: Remove hardcoded value and use only environment variables in next iteration
  const databaseUrl = process.env.DATABASE_URL || 'postgresql://postgres:QYGohXjCUB8ATRVZ@db.omawrtvwghlsbykxwcac.supabase.co:5432/postgres'
  
  // During build time, use placeholder
  const isBuildTime = process.env.NEXT_PHASE === 'phase-production-build' || 
                     process.env.NEXT_PHASE === 'phase-development-build'
  
  if (isBuildTime) {
    // Return a dummy client that won't be used during build
    return new PrismaClient({
      datasources: {
        db: {
          url: 'postgresql://build-time-placeholder',
        },
      },
    }) as PrismaClient
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('[Prisma] Creating Prisma Client with DATABASE_URL:', databaseUrl.substring(0, 20) + '...')
  }

  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
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
  } catch (error: any) {
    const errorMsg = `[Prisma] Failed to create Prisma Client: ${error?.message || 'Unknown error'}`
    console.error(errorMsg)
    console.error('[Prisma] Error details:', {
      code: error?.code,
      message: error?.message,
      stack: error?.stack?.substring(0, 500),
    })
    // Write to stderr for Azure logs
    if (process.stderr) {
      process.stderr.write(`ERROR: ${errorMsg}\n`)
    }
    throw error
  }
}

export const prisma = getPrismaClient()

