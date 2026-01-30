'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import {
  Brain,
  Zap,
  CheckCircle2,
  Clock,
  Target,
  FileCheck,
  Calculator,
  Eye,
  AlertTriangle,
  Scale,
  Shield,
} from 'lucide-react'

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

export default function Home() {
  const hero = useSectionAnimation()
  const stats = useSectionAnimation()
  const features = useSectionAnimation()
  const how = useSectionAnimation()
  const testimonials = useSectionAnimation()
  const cta = useSectionAnimation()

  return (
    <div className="relative overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-accent-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.12),transparent_55%)]" />
      </div>

      {/* Hero */}
      <motion.section
        id="hero"
        ref={hero.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={hero.isInView ? 'visible' : 'hidden'}
        className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-20 pt-10 sm:px-6 lg:flex-row lg:items-center lg:pt-12"
      >
        <motion.div variants={fadeInUp} className="space-y-8 lg:w-1/2">
          <div className="hero-badge">
            <Zap className="h-3.5 w-3.5 text-accent-light" />
            Where loans move faster
          </div>

          <div className="space-y-4">
            <h1 className="heading-xl">
              <span className="block text-heading">Intelligent Underwriting</span>
              <span className="gradient-text">AI Assistant</span>
            </h1>
            <p className="max-w-xl text-sm md:text-base text-muted font-bold italic">
              Bring simplicity and intelligence to lending. An AI assistant for faster, clearer loan decisions.
            </p>
            <p className="max-w-xl text-sm md:text-base text-muted">
              Alnex is a secure AI loan assistant that helps lenders and brokers simplify complex loan processes. Save months of manual work and thousands in labor costs with AI-powered underwriting that analyzes red flags, verifies documents, and delivers decisions in minutes, not weeks. Every calculation is traceable, every decision explainable.
            </p>
          </div>

          <motion.div variants={fadeInUp} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact" className="btn-primary w-full sm:w-auto justify-center">
              Request a Demo 
            </Link>
            <a href="#how-it-works" className="btn-secondary w-full sm:w-auto justify-center">
              See it in action
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 text-xs text-muted">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-light" />
              <span>
                <span className="font-semibold text-heading">85%</span> faster decisions
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-light" />
              <span>
                <span className="font-semibold text-heading">99.2%</span> accuracy
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-accent-light" />
              <span>100% policy-aligned &amp; audit-ready</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero right card */}
        <motion.div
          variants={fadeInUp}
          className="lg:w-1/2"
        >
          <div className="glass-card-hover relative overflow-hidden p-5 sm:p-6">
            <div className="mb-4 flex items-center justify-between text-xs text-muted">
              <span className="badge">
                <Brain className="h-3.5 w-3.5 text-accent-light" />
                Loan #48219 – Analysis
              </span>
              <span className="flex items-center gap-1 text-muted">
                <Clock className="h-3.5 w-3.5 text-accent-light" />
                4 min avg. time
              </span>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between card">
                <div>
                  <p className="text-xs text-subtle">Income Verification</p>
                  <p className="font-medium text-heading">$125,000 / year</p>
                </div>
                <span className="badge-accent">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Verified
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="card">
                  <p className="text-xs text-subtle">DTI Calculation</p>
                  <p className="mt-1 font-semibold text-heading">38.2%</p>
                  <p className="text-[11px] text-subtle">Within lender policy</p>
                </div>
                <div className="card">
                  <p className="text-xs text-subtle">LTV Analysis</p>
                  <p className="mt-1 font-semibold text-heading">78.5%</p>
                  <p className="text-[11px] text-subtle">Eligible for QM</p>
                </div>
              </div>

              <div className="flex items-center justify-between card-dark border-subtle">
                <div className="space-y-1">
                  <p className="text-xs text-subtle">Compliance Check</p>
                  <p className="text-xs text-muted">Fannie Mae &amp; Freddie Mac</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="relative inline-flex h-4 w-4">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500/40 opacity-70" />
                    <span className="relative inline-flex h-4 w-4 rounded-full bg-accent-500" />
                  </span>
                  <span className="text-[11px] text-accent-light">Running</span>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between rounded-xl bg-gradient-to-r from-accent-400/15 via-accent-500/15 to-accent-400/15 px-3 py-3">
                <div>
                  <p className="text-xs text-muted">Decision</p>
                  <p className="mt-1 text-sm font-semibold text-heading">Eligible</p>
                  <p className="text-[11px] text-muted">Full reasoning trace available</p>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-500 px-3 py-1 text-xs font-semibold text-navy-950">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Approve
                </span>
              </div>
            </div>

            {/* Floating badges */}
            <div className="pointer-events-none absolute -right-2 -top-4 flex flex-col gap-3">
              <div className="floating-badge animate-float flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-accent-light" />
                4 min avg. underwriting time
              </div>
              <div className="floating-badge flex items-center gap-2">
                <Shield className="h-3.5 w-3.5 text-accent-light" />
                SOC 2-aligned controls
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Stats */}
      <motion.section
        id="stats"
        ref={stats.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={stats.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="mb-8 flex items-baseline justify-between gap-4">
          <div>
            <p className="section-heading">Performance</p>
            <h2 className="heading-md mt-2 text-heading">Underwriting at enterprise scale</h2>
          </div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              label: 'Time Saved',
              value: 'Weeks',
              detail: 'Reduce underwriting time from weeks to minutes',
            },
            {
              label: 'Labor Savings',
              value: '60%',
              detail: 'Lower operational costs per loan',
            },
            {
              label: 'Red Flag Detection',
              value: '99.2%',
              detail: 'AI-powered anomaly and risk analysis',
            },
            {
              label: '24/7 Processing',
              value: 'Always On',
              detail: 'No waiting, no backlogs, instant decisions',
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="glass-card-hover p-4"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-accent-light">
                {item.label}
              </p>
              <p className="mt-3 text-3xl font-semibold text-heading">{item.value}</p>
              <p className="mt-1 text-xs text-muted">{item.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Features */}
      <motion.section
        id="features"
        ref={features.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={features.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="mb-8 max-w-2xl">
          <p className="section-heading">Platform</p>
          <h2 className="heading-md mt-2 text-heading">AI-powered underwriting, built for secure and fast lending. </h2>
          <p className="mt-3 text-sm text-muted">
            Built for mortgage organizations, loan processors, and agents. Our multi-agent AI architecture handles document processing, red flag analysis, and risk assessment—saving months of manual work and thousands in labor costs. Every decision is explainable, every calculation traceable.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {[
            {
              icon: Brain,
              title: 'Multi-Agent AI Architecture',
              desc: 'Specialized AI agents for income, credit, property, and compliance work together to underwrite each file.',
            },
            {
              icon: FileCheck,
              title: 'Intelligent Document Processing',
              desc: 'Extract and verify data from tax returns, bank statements, and pay stubs with advanced OCR and validation.',
            },
            {
              icon: Calculator,
              title: 'Deterministic Calculations',
              desc: 'DTI, LTV, and DSCR are computed using tested calculators—never AI guesses—so every number is traceable.',
            },
            {
              icon: Scale,
              title: 'QM & Non-QM Compliance',
              desc: 'Automatically validate against Fannie Mae, Freddie Mac, FHA, VA, USDA, and Non-QM guidelines.',
            },
            {
              icon: Eye,
              title: 'Explainable Decisions',
              desc: 'Every recommendation includes reasoning traces, citations, and a full audit trail for regulators.',
            },
            {
              icon: AlertTriangle,
              title: 'AI-Powered Red Flag Analysis',
              desc: 'Automatically detect anomalies, inconsistencies, and risk indicators across documents, income patterns, and credit history. Save hours of manual review with intelligent pattern recognition.',
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              transition={{ delay: idx * 0.03 }}
              className="glass-card-hover flex flex-col gap-3 p-5"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-accent-400/20 via-accent-500/30 to-accent-400/10 text-accent-light">
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

      {/* How it works */}
      <motion.section
        id="how-it-works"
        ref={how.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={how.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="mb-8 max-w-2xl">
          <p className="section-heading">Workflow</p>
          <h2 className="heading-md mt-2 text-heading">From documents to decision in minutes</h2>
          <p className="mt-3 text-sm text-muted">
            Designed to fit into your existing underwriting process with clear checkpoints and audit-ready outputs.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="relative grid gap-6 md:grid-cols-4"
        >
          {[
            {
              step: '01',
              title: 'Upload Documents',
              desc: 'Securely ingest tax returns, bank statements, and loan files from your LOS or secure upload.',
              icon: FileCheck,
            },
            {
              step: '02',
              title: 'AI Analysis',
              desc: 'Multi-agent AI parses documents, extracts data, and cross-checks against lender policies.',
              icon: Brain,
            },
            {
              step: '03',
              title: 'Risk Assessment',
              desc: 'DTI, LTV, and compensating factors are evaluated with deterministic calculators and risk models.',
              icon: Target,
            },
            {
              step: '04',
              title: 'Decision & Report',
              desc: 'Underwriters receive a clear recommendation with reasoning, evidence, and exportable reports.',
              icon: CheckCircle2,
            },
          ].map((item, idx) => (
            <motion.div
              key={item.step}
              variants={fadeInUp}
              className="testimonial-card"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-badge-accent text-xs font-semibold text-accent-light">
                  {item.step}
                </span>
                <item.icon className="h-5 w-5 text-accent-light" />
              </div>
              <h3 className="mt-1 text-md font-semibold text-heading">{item.title}</h3>
              <p className="text-xs text-muted">{item.desc}</p>
              {idx < 3 && (
                <span className="pointer-events-none absolute right-[-16px] top-8 hidden h-px w-8 bg-gradient-to-r from-accent-500 to-accent-500/0 md:block" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonials */}
      {/* <motion.section
        id="testimonials"
        ref={testimonials.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={testimonials.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="mb-8 max-w-2xl">
          <p className="section-heading">Customer Stories</p>
          <h2 className="heading-md mt-2 text-heading">Trusted by modern underwriting teams</h2>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {[
            {
              quote:
                'Alnex.ai has transformed our underwriting desk. We move from initial review to decision in minutes, with clearer rationale than our legacy workflows.',
              name: 'Director of Mortgage Operations',
              company: 'Midwest Community Bank',
            },
            {
              quote:
                'The combination of AI agents and deterministic calculators gives our credit committee confidence. Every decision is explainable and audit-ready.',
              name: 'Chief Risk Officer',
              company: 'Regional Credit Union',
            },
          ].map((item) => (
            <motion.figure
              key={item.name}
              variants={fadeInUp}
              className="glass-card-hover flex h-full flex-col justify-between p-6"
            >
              <div>
                <div className="mb-3 flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="mr-1 text-gold-400">
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-sm text-body">"{item.quote}"</blockquote>
              </div>
              <figcaption className="mt-6 text-xs text-muted">
                <div className="font-semibold text-heading">{item.name}</div>
                <div>{item.company}</div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </motion.section> */}

      {/* CTA */}
      <motion.section
        id="get-started"
        ref={cta.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={cta.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={fadeInUp}
          className="glass-card-hover flex flex-col items-start gap-6 overflow-hidden bg-gradient-to-r from-navy-900/80 via-navy-900/90 to-navy-900/80 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="max-w-xl space-y-3">
            <p className="section-heading">Get started</p>
            <h2 className="heading-lg text-heading">Save months of work. Save thousands in costs.</h2>
            <p className="text-sm text-muted">
              Built for mortgage organizations, loan processors, and agents. Our AI-powered platform handles document verification, red flag analysis, and risk assessment—freeing your team to focus on closing more loans. Start processing files in minutes, not weeks.
            </p>
            <p className="text-xs text-subtle">
              No credit card required • 14-day free trial • Full feature access • SOC 2-aligned controls
            </p>
          </div>
          <div className="flex justify-start">
            <Link href="/contact" className="btn-primary w-full justify-center sm:w-auto">
              Request a Demo
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}
