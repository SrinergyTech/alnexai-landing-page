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
    // Validate that at least one field is provided
    if (!data.email?.trim() && !data.name?.trim() && !data.hearAboutUs?.trim()) {
      return {
        success: false,
        error: 'Please fill in at least one field.',
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
    console.error('Error creating demo request:', error)
    
    // Provide more specific error messages
    let errorMessage = 'Failed to submit demo request. Please try again.'
    
    if (error.code === 'P1001') {
      errorMessage = 'Database connection error. Please check your configuration.'
    } else if (error.code === 'P2002') {
      errorMessage = 'A record with this information already exists.'
    } else if (error.message) {
      errorMessage = error.message
    }
    
    return {
      success: false,
      error: errorMessage,
    }
  }
}

