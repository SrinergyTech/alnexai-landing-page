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
  Fingerprint,
  Globe,
  Mail,
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

const faqs = [
  {
    q: 'How does Alnex.ai handle borrower PII?',
    a: 'PII is encrypted in transit and at rest. Sensitive data is isolated at the tenant level, access-controlled via RBAC, and only exposed to authorized users and services.',
  },
  {
    q: 'Do you send data to third-party AI providers?',
    a: 'By default, underwriting data is processed within our controlled environment. When external AI providers are used, data is de-identified and governed by strict DPAs.',
  },
  {
    q: 'Where is data stored and processed?',
    a: 'We operate in SOC 2-aligned cloud environments with regional hosting options. Data residency and retention policies are configurable by your organization.',
  },
  {
    q: 'How do you support GLBA, FCRA, and CCPA compliance?',
    a: 'Our platform provides access controls, audit trails, and data subject tooling that support your GLBA, FCRA, and CCPA obligations. We work with your legal team during onboarding.',
  },
  {
    q: 'Can we integrate Alnex.ai with our existing LOS and data stack?',
    a: 'Yes. We offer secure APIs and integration patterns designed for common LOS, data warehouses, and document systems used by lenders and credit unions.',
  },
  {
    q: 'How do you manage access to models and decision logic?',
    a: 'Model configurations, rules, and calculators are access-controlled with change logs and approval workflows to ensure governance over underwriting logic.',
  },
]

export default function SecurityPage() {
  const hero = useSectionAnimation()
  const features = useSectionAnimation()
  const compliance = useSectionAnimation()
  const protection = useSectionAnimation()
  const faq = useSectionAnimation()
  const cta = useSectionAnimation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="absolute right-0 top-72 h-72 w-72 rounded-full bg-accent-400/10 blur-3xl" />
      </div>

      {/* Hero */}
      <motion.section
        ref={hero.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={hero.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-16"
      >
        <motion.div
          variants={fadeInUp}
          className="glass-card-hover flex flex-col gap-6 bg-gradient-to-r from-navy-900/90 via-navy-900/95 to-navy-900/90 px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex items-start gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-300">
              <Shield className="h-7 w-7" />
            </div>
            <div className="space-y-3">
              <p className="section-heading">Security & Privacy</p>
              <h1 className="heading-lg text-navy-50">Security & privacy at Alnex.ai</h1>
              <p className="text-sm text-navy-300 md:text-base">
                Underwriting data is among the most sensitive information a lender holds. Alnex.ai is built with
                security, tenant isolation, and regulatory alignment at the core of our architecture.
              </p>
            </div>
          </div>
          <div className="grid gap-3 text-xs text-navy-200 sm:grid-cols-2 lg:w-1/2">
            {[
              'AES-256 encryption in transit & at rest',
              'No ungoverned third-party data sharing',
              'SOC 2-aligned controls & monitoring',
              'Role-based access control (RBAC)',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-full bg-navy-900/80 px-3 py-2"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-accent-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Security features */}
      <motion.section
        ref={features.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={features.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="mb-8 max-w-3xl">
          <p className="section-heading">Security Features</p>
          <h2 className="heading-md text-navy-50">Controls designed for regulated financial institutions</h2>
          <p className="mt-3 text-sm text-navy-300">
            From encryption and tenant isolation to access controls and audit trails, Alnex.ai is engineered for
            lenders who operate under GLBA, FCRA, and other regulatory frameworks.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {[
            {
              icon: Lock,
              title: 'End-to-end encryption',
              bullets: [
                'TLS 1.2+ for all network traffic',
                'AES-256 encryption for data at rest',
                'Hardened key management practices',
              ],
            },
            {
              icon: Fingerprint,
              title: 'Privacy in AI processing',
              bullets: [
                'De-identified inputs for external models',
                'Configurable data retention policies',
                'No training on your proprietary data by default',
              ],
            },
            {
              icon: Server,
              title: 'Tenant isolation',
              bullets: [
                'Logical separation of customer data',
                'Scoped service accounts per tenant',
                'Isolated environments for testing & production',
              ],
            },
            {
              icon: Key,
              title: 'Access controls',
              bullets: [
                'Role-based access control (RBAC)',
                'SAML / SSO-friendly architecture',
                'Granular permissions for underwriting teams',
              ],
            },
            {
              icon: Cloud,
              title: 'Secure infrastructure',
              bullets: [
                'SOC 2-aligned cloud providers',
                'Network segmentation and firewalls',
                'Continuous monitoring & alerting',
              ],
            },
            {
              icon: Database,
              title: 'Audit & compliance',
              bullets: [
                'Immutable decision and activity logs',
                'Model and rule change history',
                'Exportable reports for regulators & auditors',
              ],
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
                <h3 className="text-sm font-semibold text-navy-50">{item.title}</h3>
                <ul className="mt-3 space-y-1 text-xs text-navy-300">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] h-1 w-1 rounded-full bg-accent-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Compliance */}
      <motion.section
        ref={compliance.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={compliance.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="mb-6 max-w-3xl">
          <p className="section-heading">Compliance Alignment</p>
          <h2 className="heading-md text-navy-50">Supporting your regulatory obligations</h2>
          <p className="mt-3 text-sm text-navy-300">
            Alnex.ai is designed to operate within your compliance program, providing the technical controls needed to
            support GLBA, FCRA, CCPA, SOC 2, and other frameworks.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { code: 'GLBA', desc: 'Safeguards around consumer financial information.' },
            { code: 'FCRA', desc: 'Transparency and accuracy for credit-related decisions.' },
            { code: 'CCPA', desc: 'Support for data subject rights and disclosures.' },
            { code: 'SOC 2', desc: 'Controls aligned to security, availability, and confidentiality.' },
          ].map((item) => (
            <motion.div
              key={item.code}
              variants={fadeInUp}
              className="glass-card-hover p-4 text-sm"
            >
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-navy-900/70 px-3 py-1 text-xs text-accent-300">
                <Shield className="h-3.5 w-3.5" />
                {item.code}
              </div>
              <p className="text-xs text-navy-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Data protection summary */}
      <motion.section
        ref={protection.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={protection.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div variants={fadeInUp} className="space-y-4">
            <p className="section-heading">Data Protection</p>
            <h2 className="heading-md text-navy-50">Protecting underwriting data end-to-end</h2>
            <p className="text-sm text-navy-300">
              From the moment documents enter the platform to the generation of final underwriting reports, your data is
              governed by strict access controls, encryption, and monitoring.
            </p>
            <p className="text-sm text-navy-300">
              We partner closely with your security, privacy, and risk teams during implementation to align Alnex.ai
              with your internal policies and regulatory posture.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="glass-card-hover space-y-3 p-5 text-sm"
          >
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-accent-300" />
              <p className="font-semibold text-navy-50">Data protection checkpoints</p>
            </div>
            <ul className="space-y-2 text-xs text-navy-300">
              {[
                'Secure document ingestion from LOS, SFTP, or direct upload.',
                'Automated classification and redaction options for sensitive fields.',
                'Encrypted storage of documents, extracted data, and decision artifacts.',
                'Comprehensive logging of user activity, access, and decision changes.',
                'Configurable retention and deletion policies by tenant and region.',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[6px] h-1 w-1 rounded-full bg-accent-400" />
                  <span>{item}</span>
                </li>
              ))}
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
          <h2 className="heading-md text-navy-50">Answers for security, risk, and compliance teams</h2>
          <p className="mt-3 text-sm text-navy-300">
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
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-navy-100"
                >
                  <span>{item.q}</span>
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center rounded-full border border-navy-700 text-[11px] ${
                      open ? 'bg-accent-500/10 text-accent-300' : 'text-navy-300'
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
          className="glass-card-hover flex flex-col items-start gap-4 bg-gradient-to-r from-navy-900/90 via-navy-900/95 to-navy-900/90 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="space-y-3">
            <p className="section-heading">Questions About Security?</p>
            <h2 className="heading-md text-navy-50">Work directly with our security team</h2>
            <p className="text-sm text-navy-300">
              We regularly collaborate with security, risk, and compliance stakeholders at lenders and credit unions.
              Share your requirements and we&apos;ll walk through how Alnex.ai fits.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:security@alnex.ai"
              className="btn-primary flex w-full items-center justify-center gap-2 sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Email security team
            </a>
            <a href="https://mortiq.alnex.ai" target="_blank" rel="noopener noreferrer" className="btn-secondary w-full justify-center text-sm sm:w-auto">
              Get Started
            </a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}


