import { NextResponse } from 'next/server'

// Mark this route as dynamic to prevent build-time execution
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
  // Import prisma here to avoid build-time initialization
  const { prisma } = await import('@/lib/prisma')
  try {
    // Check environment variables
    const hasDatabaseUrl = !!process.env.DATABASE_URL
    const databaseUrlPreview = process.env.DATABASE_URL 
      ? process.env.DATABASE_URL.substring(0, 30) + '...' 
      : 'NOT SET'

    // Try to connect
    await prisma.$connect()
    
    // Try a simple query
    const count = await prisma.demoRequest.count()

    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      details: {
        hasDatabaseUrl,
        databaseUrlPreview,
        recordCount: count,
        nodeEnv: process.env.NODE_ENV,
      },
    })
  } catch (error: any) {
    console.error('[Test DB] Error:', error)
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Unknown error',
        code: error.code,
        details: {
          hasDatabaseUrl: !!process.env.DATABASE_URL,
          nodeEnv: process.env.NODE_ENV,
        },
      },
      { status: 500 }
    )
  }
}

