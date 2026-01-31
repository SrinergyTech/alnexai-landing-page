'use server'

import { revalidatePath } from 'next/cache'

export interface DemoRequestInput {
  email?: string
  name?: string
  hearAboutUs?: string
}

export async function submitDemoRequest(data: DemoRequestInput) {
  // Use dynamic import to avoid build-time issues
  let prisma: any
  
  try {
    // Validate that at least one field is provided
    if (!data.email?.trim() && !data.name?.trim() && !data.hearAboutUs?.trim()) {
      return {
        success: false,
        error: 'Please fill in at least one field.',
      }
    }

    // Log environment check for debugging (will appear in Azure logs)
    console.log('[Contact Form] Starting submission')
    console.log('[Contact Form] DATABASE_URL available:', !!process.env.DATABASE_URL)
    console.log('[Contact Form] NODE_ENV:', process.env.NODE_ENV)
    
    // Dynamically import Prisma to avoid build-time initialization
    const prismaModule = await import('@/lib/prisma')
    prisma = prismaModule.prisma
    
    // Test database connection before attempting to create
    try {
      console.log('[Contact Form] Attempting database connection...')
      await prisma.$connect()
      console.log('[Contact Form] Database connection successful')
    } catch (connectError: any) {
      const errorMsg = `[Contact Form] Database connection failed: ${connectError?.code || 'UNKNOWN'} - ${connectError?.message || 'No message'}`
      console.error(errorMsg)
      console.error('[Contact Form] Connection error details:', {
        code: connectError?.code,
        message: connectError?.message,
        meta: connectError?.meta,
      })
      
      // Log to stderr for Azure logs
      try {
        if (process.stderr) {
          process.stderr.write(`ERROR: ${errorMsg}\n`)
        }
      } catch (e) {
        // Ignore stderr write errors
      }
      
      return {
        success: false,
        error: 'Database connection error. Please try again later.',
      }
    }

    console.log('[Contact Form] Creating database record...')
    const demoRequest = await prisma.demoRequest.create({
      data: {
        email: data.email?.trim() || null,
        name: data.name?.trim() || null,
        hearAboutUs: data.hearAboutUs?.trim() || null,
      },
    })

    console.log('[Contact Form] Record created successfully:', demoRequest.id)
    revalidatePath('/contact')
    return { success: true, data: demoRequest }
  } catch (error: any) {
    const errorDetails = {
      code: error.code,
      message: error.message,
      meta: error.meta,
      name: error.name,
      stack: error.stack?.substring(0, 500), // First 500 chars of stack
    }
    
    console.error('[Contact Form] Error creating demo request:', errorDetails)
    
    // Log full error to stderr for Azure logs
    try {
      if (process.stderr) {
        process.stderr.write(`ERROR: [Contact Form] ${JSON.stringify(errorDetails, null, 2)}\n`)
      }
    } catch (e) {
      // Ignore stderr write errors
    }
    
    // Provide more specific error messages
    let errorMessage = 'Failed to submit demo request. Please try again.'
    
    if (error.code === 'P1001') {
      errorMessage = 'Database connection error. Please check your configuration.'
    } else if (error.code === 'P2002') {
      errorMessage = 'A record with this information already exists.'
    } else if (error.code === 'P1012') {
      errorMessage = 'Database configuration error. Please contact support.'
    } else if (error.message?.includes('DATABASE_URL')) {
      errorMessage = 'Database configuration error. Please contact support.'
    } else if (error.message?.includes('Prisma')) {
      errorMessage = 'Database error. Please try again later.'
    }
    
    return {
      success: false,
      error: errorMessage,
    }
  } finally {
    // Disconnect Prisma to avoid connection pool issues
    if (prisma) {
      try {
        await prisma.$disconnect()
      } catch (disconnectError) {
        console.warn('[Contact Form] Error disconnecting Prisma:', disconnectError)
      }
    }
  }
}

