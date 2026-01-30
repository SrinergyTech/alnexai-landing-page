'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, User, Building, Briefcase, ChevronDown, MessageSquare } from 'lucide-react'

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

const companyTypes = [
  'Lender',
  'AMC (Appraisal Management Company)',
  'Credit Union',
  'Mortgage Broker',
  'Bank',
  'Loan Processor',
  'Other',
]

export default function Contact() {
  const section = useSectionAnimation()
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    role: '',
    companyType: '',
    hearAboutUs: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

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

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required'
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

    // TODO: Add Supabase integration here
    // For now, just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Form data:', formData)
    setIsSubmitting(false)

    // Reset form after successful submission
    setFormData({
      email: '',
      firstName: '',
      lastName: '',
      company: '',
      role: '',
      companyType: '',
      hearAboutUs: '',
    })

    // Show success message (you can add a toast notification here later)
    alert('Thank you! Your demo request has been submitted. We\'ll be in touch soon.')
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
          <p className="mt-4 text-sm text-muted">
            Fill out the form below and we&apos;ll get back to you shortly to schedule your demo.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8">
            <div className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-heading">
                  Email <span className="text-accent-500">*</span>
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

              {/* First Name and Last Name */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-heading">
                    First Name <span className="text-accent-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      className={`
                        w-full rounded-xl border bg-white/50 dark:bg-navy-900/50 px-10 py-3 text-sm
                        text-heading placeholder:text-subtle
                        transition-all duration-200
                        focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20
                        ${errors.firstName ? 'border-red-500 dark:border-red-500' : 'border-navy-200/50 dark:border-navy-700/50'}
                      `}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-heading">
                    Last Name <span className="text-accent-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      className={`
                        w-full rounded-xl border bg-white/50 dark:bg-navy-900/50 px-10 py-3 text-sm
                        text-heading placeholder:text-subtle
                        transition-all duration-200
                        focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20
                        ${errors.lastName ? 'border-red-500 dark:border-red-500' : 'border-navy-200/50 dark:border-navy-700/50'}
                      `}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Company and Role */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-heading">
                    Company <span className="text-accent-500">*</span>
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company"
                      className={`
                        w-full rounded-xl border bg-white/50 dark:bg-navy-900/50 px-10 py-3 text-sm
                        text-heading placeholder:text-subtle
                        transition-all duration-200
                        focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20
                        ${errors.company ? 'border-red-500 dark:border-red-500' : 'border-navy-200/50 dark:border-navy-700/50'}
                      `}
                    />
                  </div>
                  {errors.company && (
                    <p className="mt-1 text-xs text-red-500 dark:text-red-400">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="role" className="mb-2 block text-sm font-medium text-heading">
                    Role
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Your role"
                      className="w-full rounded-xl border border-navy-200/50 dark:border-navy-700/50 bg-white/50 dark:bg-navy-900/50 px-10 py-3 text-sm text-heading placeholder:text-subtle transition-all duration-200 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                    />
                  </div>
                </div>
              </div>

              {/* Company Type */}
              <div>
                <label htmlFor="companyType" className="mb-2 block text-sm font-medium text-heading">
                  Company Type
                </label>
                <div className="relative">
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
                  <select
                    id="companyType"
                    name="companyType"
                    value={formData.companyType}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-xl border border-navy-200/50 dark:border-navy-700/50 bg-white/50 dark:bg-navy-900/50 px-4 py-3 pr-10 text-sm text-heading transition-all duration-200 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                  >
                    <option value="">Select one...</option>
                    {companyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
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

