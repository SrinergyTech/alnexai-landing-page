'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Shield, Lightbulb, Users } from 'lucide-react'

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

export default function AboutPage() {
  const hero = useSectionAnimation()
  const problem = useSectionAnimation()
  const values = useSectionAnimation()
  const impact = useSectionAnimation()
  const advisors = useSectionAnimation()
  const cta = useSectionAnimation()

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-accent-400/10 blur-3xl" />
      </div>

      {/* Hero */}
      <motion.section
        ref={hero.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={hero.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-16"
      >
        <motion.div variants={fadeInUp} className="max-w-3xl space-y-4">
          <p className="section-heading">About Us</p>
          <h1 className="heading-lg text-heading">
            Transforming mortgage underwriting with intelligent automation
          </h1>
          <p className="text-sm text-muted md:text-base">
            Alnex.ai was founded with a singular focus: help underwriting teams move faster without sacrificing
            compliance, accuracy, or judgment. We combine multi-agent AI, deterministic calculators, and audit-grade
            observability so every loan decision is both explainable and defensible.
          </p>
        </motion.div>
      </motion.section>

      {/* Problem */}
      <motion.section
        ref={problem.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={problem.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="section-heading">The Problem</p>
            <h2 className="heading-md text-heading">Mortgage underwriting is still too slow and opaque</h2>
            <p className="text-sm text-muted">
              Traditional underwriting workflows are fragmented across spreadsheets, LOS systems, manual document
              review, and tribal policy knowledge. This creates delays, inconsistency, and risk—especially in high
              volume or complex Non-QM portfolios.
            </p>
            <p className="text-sm text-navy-300">
              Lenders need more than automation. They need underwriting intelligence that respects existing policies,
              preserves human judgment, and stands up to regulatory scrutiny.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-3"
          >
            {[
              { label: 'Avg. manual underwriting time', value: '3–5 days' },
              { label: 'Error rate in manual reviews', value: '15–20%' },
              { label: 'Cost per loan file to underwrite', value: '$500+' },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={fadeInUp}
                className="glass-card-hover flex flex-col justify-between p-4 text-sm"
              >
                <p className="text-xs text-muted">{item.label}</p>
                <p className="mt-3 text-lg font-semibold text-heading">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Values */}
      <motion.section
        ref={values.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={values.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="mb-8 max-w-3xl">
          <p className="section-heading">Mission & Values</p>
          <h2 className="heading-md text-heading">Built around underwriting precision and trust</h2>
          <p className="mt-3 text-sm text-muted">
            Our mission is to give every underwriting team the tools to operate with the speed of automation and the
            rigor of a credit committee—without compromising on governance or control.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              icon: Target,
              title: 'Precision',
              desc: 'Every calculation, from DTI to DSCR, is deterministic, tested, and fully traceable.',
            },
            {
              icon: Shield,
              title: 'Trust',
              desc: 'Explainable AI with complete audit trails, role-based access, and security-first design.',
            },
            {
              icon: Lightbulb,
              title: 'Innovation',
              desc: 'Modern AI agents purpose-built for income, credit, property, and compliance analysis.',
            },
            {
              icon: Users,
              title: 'Partnership',
              desc: 'We co-design workflows with underwriting, risk, and compliance teams—not around them.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="glass-card-hover flex flex-col gap-3 p-5"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-300">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-heading">{item.title}</h3>
                <p className="mt-2 text-xs text-muted">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Impact metrics */}
      <motion.section
        ref={impact.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={impact.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={fadeInUp}
          className="glass-card-hover grid gap-6 p-6 sm:grid-cols-4"
        >
          {[
            { label: 'Loans processed', value: '10,000+' },
            { label: 'Lending partners', value: '50+' },
            { label: 'Accuracy rate', value: '99.2%' },
            { label: 'Time saved', value: '85%' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-widest text-accent-400">{item.label}</p>
              <p className="mt-2 text-xl font-semibold text-heading">{item.value}</p>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* Advisory board */}
      <motion.section
        ref={advisors.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={advisors.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="mb-8 max-w-3xl">
          <p className="section-heading">Advisory Board</p>
          <h2 className="heading-md text-heading">Guided by lenders, risk, and compliance leaders</h2>
          <p className="mt-3 text-sm text-muted">
            Our advisors bring decades of experience across mortgage lending, credit risk, compliance, and enterprise
            SaaS—helping us build a platform that fits real underwriting desks.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-3"
        >
          {[
            {
              name: 'Alex Martinez',
              title: 'Former Head of Mortgage Underwriting',
              company: 'Top-10 National Lender',
              bio: 'Brings 20+ years of experience building underwriting teams, policies, and credit frameworks at scale.',
            },
            {
              name: 'Priya Desai',
              title: 'Chief Risk & Compliance Advisor',
              company: 'Regulated Financial Institution',
              bio: 'Specializes in GLBA, FCRA, and model risk management for AI-enabled credit decisioning systems.',
            },
            {
              name: 'Michael Chen',
              title: 'Enterprise Technology Advisor',
              company: 'Cloud & Data Infrastructure',
              bio: 'Helps align our architecture with enterprise security, data, and integration requirements.',
            },
          ].map((advisor) => (
            <motion.div
              key={advisor.name}
              variants={fadeInUp}
              className="glass-card-hover flex flex-col gap-3 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-badge text-sm font-semibold text-accent-light">
                  {advisor.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-heading">{advisor.name}</div>
                  <div className="text-[11px] text-muted">{advisor.title}</div>
                  <div className="text-[11px] text-subtle">{advisor.company}</div>
                </div>
              </div>
              <p className="text-xs text-muted">{advisor.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section
        ref={cta.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={cta.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={fadeInUp}
          className="glass-card-hover flex flex-col items-start gap-4 bg-gradient-to-r from-navy-900/90 via-navy-900/95 to-navy-900/90 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-3">
            <p className="section-heading">Partner with us</p>
            <h2 className="heading-md text-navy-50">Join us in building the future of lending</h2>
            <p className="text-sm text-navy-300">
              Whether you&apos;re leading underwriting, risk, or technology, we&apos;d love to explore how Alnex.ai can
              fit your stack and credit strategy.
            </p>
          </div>
          <div className="flex justify-start">
            <a href="https://mortiq.alnex.ai" target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center sm:w-auto">
              Get Started
            </a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}


