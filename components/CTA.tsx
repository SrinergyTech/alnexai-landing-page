'use client'

import React, { useState } from 'react'
import ConsultationModal from './ConsultationModal'

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="get-started" className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Find Your Perfect Mortgage?
          </h2>
          <p className="text-xl text-primary-100 dark:text-primary-200 mb-10 max-w-2xl mx-auto">
            Join thousands of homeowners who have simplified their mortgage journey with Alnex.ai. 
            Get started today and see what rate you qualify for in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white dark:bg-gray-100 text-primary-600 dark:text-primary-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 dark:hover:bg-white transition-all transform hover:scale-105 shadow-lg"
            >
              Get Your Free Rate Quote
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 dark:hover:bg-white/20 transition-all"
            >
              Schedule a Consultation
            </button>
          </div>
          <p className="text-primary-200 dark:text-primary-300 text-sm mt-8">
            ✓ No credit check required for initial quote • ✓ 100% free and confidential • ✓ No obligation
          </p>
        </div>
      </section>
      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
