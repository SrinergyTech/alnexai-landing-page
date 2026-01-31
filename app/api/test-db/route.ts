import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
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

