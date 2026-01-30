'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Shield,
  Lock,
  Server,
  Key,
  Database,
  Cloud,
  CheckCircle2,
  Globe,
  Mail,
  Building2,
  Users,
  Eye,
  FileLock,
  XCircle,
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

// US Map SVG Component - Styled with green borders and white fills
function USMapStyled() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl">
      <img
        src="/security/us.svg"
        alt="United States Map"
        className="h-full w-full object-contain"
      />
    </div>
  )
}

const faqs = [
  {
    q: 'How does Alnex.ai handle borrower PII?',
    a: 'PII is encrypted in transit and at rest using Azure security services. Sensitive data is isolated at the tenant level, access-controlled via role-based access control, and only exposed to authorized users and services.',
  },
  {
    q: 'Do you send data to third-party AI providers?',
    a: 'No. Alnex.ai operates as a fully self-contained system. We do not use any external APIs for storage, inference, or enrichment. Your data is never shared with any third-party vendors.',
  },
  {
    q: 'Where is data stored and processed?',
    a: 'All data is stored exclusively in Microsoft Azure secure data centers within the United States. We meet US data localization and sovereignty requirements, with no external transfer or mirroring.',
  },
  {
    q: 'What encryption standards do you use?',
    a: 'We leverage Microsoft Azure encryption services, including TLS 1.2+ for all network traffic and AES-256 encryption for data at rest. All encryption is managed through Azure Key Vault.',
  },
  {
    q: 'How do you manage access to underwriting data?',
    a: 'We implement tenant-based role-based access control (RBAC). Each organization has isolated data access, with granular permissions for different user roles and comprehensive audit logging.',
  },
  {
    q: 'Can we integrate Alnex.ai with our existing LOS and data stack?',
    a: 'Yes. We offer secure APIs and integration patterns designed for common LOS, data warehouses, and document systems used by lenders and credit unions.',
  },
]

export default function SecurityPage() {
  const hero = useSectionAnimation()
  const dataResidency = useSectionAnimation()
  const noThirdParty = useSectionAnimation()
  const encryption = useSectionAnimation()
  const accessControl = useSectionAnimation()
  const faq = useSectionAnimation()
  const cta = useSectionAnimation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute right-0 top-72 h-72 w-72 rounded-full bg-accent-400/10 blur-3xl" />
      </div>

      {/* Hero - Center aligned, no card */}
      <motion.section
        ref={hero.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={hero.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-4xl px-4 pb-20 pt-16 text-center sm:px-6 lg:px-8 lg:pt-24"
      >
        <motion.div variants={fadeInUp} className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-badge-accent px-4 py-2">
            <Shield className="h-4 w-4 text-accent-light" />
            <span className="section-heading text-xs">Security & Privacy</span>
          </div>
          <h1 className="heading-lg text-heading">Security at Alnex</h1>
          <p className="mx-auto max-w-2xl text-base text-muted md:text-lg">
            At Alnex, we understand the sensitivity, confidentiality, and importance of the information we work with.
            Mortgage, legal, and personal data demands the highest standards of security, and protecting it is not just
            a feature – it is our foundation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {[
              'User-level encryption',
              'No third-party vendors',
              '100% US data localization',
              'Strict access controls',
            ].map((item) => (
              <div
                key={item}
                className="badge flex items-center gap-2 px-3 py-2"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-accent-light" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Feature 1: Data Localization - Left text, Right figure */}
      <motion.section
        ref={dataResidency.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={dataResidency.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="badge-accent inline-flex items-center gap-2 px-3 py-1 text-xs">
              <span className="h-2 w-2 rounded-full bg-accent-400" />
              Data Residency: 100% Localized in US
            </div>
            <h2 className="heading-md text-heading">100% US-based data centers</h2>
            <p className="text-sm text-muted md:text-base">
              All data processed through Alnex—text, audio, transcripts—is stored exclusively in secure Microsoft Azure
              data centers within the United States.
            </p>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>Meets US data localization and sovereignty requirements</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>Data stays entirely within national borders—no external transfer or mirroring</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>Faster latency for US-based mortgage firms</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative h-80 w-full lg:h-96"
          >
            <div className="absolute inset-0 rounded-2xl border border-navy-700/50 bg-navy-900/30 p-6">
              <USMapStyled />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Feature 2: No Third Party Vendors - Right text, Left figure */}
      <motion.section
        ref={noThirdParty.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={noThirdParty.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={fadeInUp}
            className="order-2 lg:order-1 relative h-80 w-full lg:h-96"
          >
            <div className="glass-card-hover flex h-full items-center justify-center p-8">
              <div className="text-center space-y-4">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-badge-accent text-accent-light">
                  <XCircle className="h-10 w-10" />
                </div>
                <div className="space-y-2">
                  <Shield className="mx-auto h-12 w-12 text-accent-400/50" />
                  <FileLock className="mx-auto h-12 w-12 text-accent-400/50" />
                  <Eye className="mx-auto h-12 w-12 text-accent-400/50" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="order-1 lg:order-2 space-y-6">
            <div className="badge-accent inline-flex items-center gap-2 px-3 py-1 text-xs">
              <XCircle className="h-3.5 w-3.5" />
              No Third Party Vendors
            </div>
            <h2 className="heading-md text-heading">Fully self-contained system</h2>
            <p className="text-sm text-muted md:text-base">
              Alnex operates as a fully self-contained system. We do not use any external APIs for storage, inference, or
              enrichment. Your data is never shared with any third-party vendors.
            </p>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>Zero risk of data leaks through third-party vendors</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>No risk of mortgage profiling through third-party data sharing</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>Full transparency and auditability within our ecosystem</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>You retain full ownership and control over your data</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Feature 3: Encryption - Left text, Right figure */}
      <motion.section
        ref={encryption.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={encryption.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="badge-accent inline-flex items-center gap-2 px-3 py-1 text-xs">
              <Lock className="h-3.5 w-3.5" />
              User-Level Encryption
            </div>
            <h2 className="heading-md text-heading">End-to-end encryption powered by Azure</h2>
            <p className="text-sm text-muted md:text-base">
              All data in Alnex.ai is protected by Microsoft Azure security services, ensuring your sensitive mortgage
              data is encrypted both in transit and at rest.
            </p>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>TLS 1.2+ encryption for all network traffic in transit</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>AES-256 encryption for all data at rest</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>Azure Key Vault for secure key management</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>Azure Security Center for continuous monitoring</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative h-80 w-full lg:h-96"
          >
            <div className="glass-card-hover flex h-full flex-col items-center justify-center space-y-4 p-8">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-badge-accent text-accent-light">
                <Lock className="h-8 w-8" />
              </div>
              <div className="w-full space-y-3">
                {[
                  { label: 'In Transit', value: 'TLS 1.2+', icon: Cloud },
                  { label: 'At Rest', value: 'AES-256', icon: Database },
                  { label: 'Key Management', value: 'Azure Key Vault', icon: Key },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 rounded-lg bg-navy-900/50 p-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy-800/50">
                      <item.icon className="h-5 w-5 text-accent-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-heading">{item.label}</p>
                      <p className="text-xs text-muted">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Feature 4: Access Controls - Right text, Left figure */}
      <motion.section
        ref={accessControl.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={accessControl.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={fadeInUp}
            className="order-2 lg:order-1 relative h-80 w-full lg:h-96"
          >
            <div className="glass-card-hover flex h-full flex-col items-center justify-center space-y-6 p-8">
              <div className="grid grid-cols-2 gap-4 w-full">
                {[
                  { icon: Building2, label: 'Tenant Isolation' },
                  { icon: Users, label: 'Role-Based' },
                  { icon: Eye, label: 'Audit Logs' },
                  { icon: Key, label: 'Authentication' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center gap-2 rounded-lg bg-navy-900/50 p-4"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-badge-accent text-accent-light">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <p className="text-xs font-medium text-heading text-center">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="order-1 lg:order-2 space-y-6">
            <div className="badge-accent inline-flex items-center gap-2 px-3 py-1 text-xs">
              <Key className="h-3.5 w-3.5" />
              Strict Access Controls
            </div>
            <h2 className="heading-md text-heading">Tenant-based role-based access control</h2>
            <p className="text-sm text-muted md:text-base">
              Alnex.ai implements comprehensive tenant-based RBAC, ensuring each organization has complete data isolation
              and granular control over access.
            </p>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>Complete logical separation of customer data per tenant</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>Granular permissions per user role with customizable definitions</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>Comprehensive activity logging and immutable audit trails</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400" />
                <span>Multi-factor authentication and SSO-ready architecture</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        ref={faq.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={faq.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="mb-6 max-w-3xl">
          <p className="section-heading">Security FAQ</p>
          <h2 className="heading-md text-heading">Answers for security and risk teams</h2>
          <p className="mt-3 text-sm text-muted">
            These are the most common questions we receive from security and risk stakeholders evaluating Alnex.ai.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="space-y-3"
        >
          {faqs.map((item, idx) => {
            const open = openIndex === idx
            return (
              <motion.div
                key={item.q}
                variants={fadeInUp}
                className="glass-card-hover overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : idx)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-body"
                >
                  <span>{item.q}</span>
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center rounded-full border border-card text-[11px] ${
                      open ? 'bg-badge-accent text-accent-light' : 'text-muted'
                    }`}
                  >
                    {open ? '−' : '+'}
                  </span>
                </button>
                {open && (
                  <div className="border-t border-navy-800/60 bg-navy-950/60 px-4 py-3 text-xs text-navy-300">
                    {item.a}
                  </div>
                )}
              </motion.div>
            )
          })}
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
          className="glass-card-hover flex flex-col gap-4 bg-gradient-to-r from-navy-900/90 via-navy-900/95 to-navy-900/90 px-6 py-8 sm:px-8 md:flex-row md:items-center md:gap-6"
        >
          <div className="flex-[6] space-y-3">
            <p className="section-heading">Questions About Security?</p>
            <h2 className="heading-md text-navy-50">Work directly with our security team</h2>
            <p className="text-sm text-navy-300">
              We regularly collaborate with security, risk, and compliance stakeholders at mortgage firms. Share your
              requirements and we&apos;ll walk through how Alnex.ai fits your security needs.
            </p>
          </div>
          <div className="flex-[4] flex flex-col gap-2 md:flex-row md:items-center">
            <a
              href="mailto:security@alnex.ai"
              className="btn-primary flex-1 flex text-sm items-center justify-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Email Security
            </a>
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 justify-center text-sm"
            >
              Get Started
            </a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}
