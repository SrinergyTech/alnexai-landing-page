'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, User, MessageSquare } from 'lucide-react'
import { submitDemoRequest } from './actions'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

function useSectionAnimation() {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  return { ref, isInView }
}

export default function Contact() {
  const section = useSectionAnimation()
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    hearAboutUs: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}

    // Only validate email format if email is provided
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    const result = await submitDemoRequest({
      email: formData.email,
      name: formData.name,
      hearAboutUs: formData.hearAboutUs,
    })

    if (result.success) {
      setSubmitSuccess(true)
      
      // Reset form after successful submission
      setFormData({
        email: '',
        name: '',
        hearAboutUs: '',
      })

      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      setSubmitError(result.error || 'Something went wrong. Please try again later.')
    }

    setIsSubmitting(false)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12),transparent_55%)]" />
      </div>

      {/* Contact Form Section */}
      <motion.section
        ref={section.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={section.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-2xl px-4 pb-24 pt-32 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="mb-8 text-center">
          <h1 className="heading-lg text-heading">Let&apos;s see how we can help</h1>
        </motion.div>

        {/* Success Message */}
        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-xl border border-accent-500/30 bg-accent-500/10 px-4 py-3 text-sm text-accent-light"
          >
            <p className="font-medium">Thank you! Your demo request has been submitted.</p>
            <p className="mt-1 text-xs text-muted">We&apos;ll be in touch soon.</p>
          </motion.div>
        )}

        {/* Error Message */}
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500 dark:text-red-400"
          >
            <p className="font-medium">Error submitting form</p>
            <p className="mt-1 text-xs">{submitError}</p>
          </motion.div>
        )}

        <motion.div variants={fadeInUp}>
          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8">
            <div className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-heading">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`
                      w-full rounded-xl border bg-white/50 dark:bg-navy-900/50 px-10 py-3 text-sm
                      text-heading placeholder:text-subtle
                      transition-all duration-200
                      focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20
                      ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-navy-200/50 dark:border-navy-700/50'}
                    `}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-heading">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-navy-200/50 dark:border-navy-700/50 bg-white/50 dark:bg-navy-900/50 px-10 py-3 text-sm text-heading placeholder:text-subtle transition-all duration-200 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                  />
                </div>
              </div>

              {/* How did you hear about us? */}
              <div>
                <label htmlFor="hearAboutUs" className="mb-2 block text-sm font-medium text-heading">
                  How did you hear about us?
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted" />
                  <textarea
                    id="hearAboutUs"
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Ex. Word of mouth, google search, etc."
                    className="w-full resize-none rounded-xl border border-navy-200/50 dark:border-navy-700/50 bg-white/50 dark:bg-navy-900/50 px-10 py-3 text-sm text-heading placeholder:text-subtle transition-all duration-200 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit demo request'}
                </button>
              </div>
            </div>
          </form>
        </motion.div>
      </motion.section>
    </div>
  )
}

