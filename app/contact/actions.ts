'use server'

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export interface DemoRequestInput {
  email?: string
  name?: string
  hearAboutUs?: string
}

export async function submitDemoRequest(data: DemoRequestInput) {
  try {
    // Check if DATABASE_URL is configured
    if (!process.env.DATABASE_URL) {
      console.error('[Contact Form] DATABASE_URL is not configured')
      console.error('[Contact Form] Available env vars:', Object.keys(process.env).filter(key => key.includes('DATABASE')))
      return {
        success: false,
        error: 'Server configuration error. Please contact support.',
      }
    }

    // Validate that at least one field is provided
    if (!data.email?.trim() && !data.name?.trim() && !data.hearAboutUs?.trim()) {
      return {
        success: false,
        error: 'Please fill in at least one field.',
      }
    }

    // Log environment check for debugging
    console.log('[Contact Form] DATABASE_URL available:', !!process.env.DATABASE_URL)
    console.log('[Contact Form] NODE_ENV:', process.env.NODE_ENV)
    
    // Test database connection before attempting to create
    try {
      await prisma.$connect()
      console.log('[Contact Form] Database connection successful')
    } catch (connectError: any) {
      console.error('[Contact Form] Database connection failed:', connectError)
      console.error('[Contact Form] Connection error code:', connectError?.code)
      console.error('[Contact Form] Connection error message:', connectError?.message)
      return {
        success: false,
        error: 'Database connection error. Please try again later.',
      }
    }

    const demoRequest = await prisma.demoRequest.create({
      data: {
        email: data.email?.trim() || null,
        name: data.name?.trim() || null,
        hearAboutUs: data.hearAboutUs?.trim() || null,
      },
    })

    revalidatePath('/contact')
    return { success: true, data: demoRequest }
  } catch (error: any) {
    console.error('[Contact Form] Error creating demo request:', error)
    console.error('[Contact Form] Error details:', {
      code: error.code,
      message: error.message,
      meta: error.meta,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    })
    
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
    } else if (error.message) {
      // Don't expose internal error messages to users in production
      errorMessage = process.env.NODE_ENV === 'development' 
        ? error.message 
        : 'Failed to submit demo request. Please try again later.'
    }
    
    return {
      success: false,
      error: errorMessage,
    }
  }
}

