'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Shield, Lightbulb, Users, Zap } from 'lucide-react'
import Link from 'next/link'

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
  const video = useSectionAnimation()
  const mission = useSectionAnimation()
  const values = useSectionAnimation()
  const cta = useSectionAnimation()

  // YouTube video ID - replace with your actual video ID
  // Extract from URL: https://www.youtube.com/watch?v=VIDEO_ID
  const youtubeVideoId = 'zqmvlrC0uyk'

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
        className="mx-auto max-w-5xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-20"
      >
        <motion.div variants={fadeInUp} className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="hero-badge mx-auto">
            <Zap className="h-3.5 w-3.5 text-accent-light" />
            Where loans move faster
          </div>
          <h1 className="heading-xl text-heading">
            About <span className="gradient-text">Alnex</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted md:text-lg">
            Alnex is a secure AI loan assistant that helps lenders and brokers simplify complex loan processes. 
            We bring simplicity and intelligence to lending with an AI assistant for faster, clearer loan decisions.
          </p>
        </motion.div>
      </motion.section>

      {/* Video */}
      <motion.section
        ref={video.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={video.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="mx-auto max-w-4xl">
          <div className="glass-card-hover overflow-hidden rounded-2xl p-2">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
                title="Alnex Product Marketing Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Mission */}
      <motion.section
        ref={mission.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={mission.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="mx-auto max-w-4xl space-y-6">
          <div className="text-center">
            <p className="section-heading">Our Mission</p>
            <h2 className="heading-lg mt-4 text-heading">
              Simplifying lending — with an AI assistant at the core
            </h2>
          </div>
          
          <div className="glass-card-hover mx-auto max-w-3xl space-y-4 p-8 md:p-10">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Alnex helps lending teams move beyond paper-driven and rule-bound workflows by embedding an AI assistant 
              directly into the loan lifecycle.
            </p>
            <div className="space-y-3 pt-4">
              <p className="text-sm font-medium text-heading">From intake to funding, Alnex:</p>
              <ul className="space-y-2 text-sm text-muted">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-500" />
                  <span>Understands loan documents and borrower data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-500" />
                  <span>Applies policies and rules in real time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-500" />
                  <span>Guides each file forward with clarity and consistency</span>
                </li>
              </ul>
            </div>
            <p className="pt-4 text-sm italic text-navy-300 md:text-base">
              This is not just digitization. It&apos;s assisted decision-making at every step.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Values / Company Pillars */}
      <motion.section
        ref={values.ref}
        variants={staggerContainer}
        initial="hidden"
        animate={values.isInView ? 'visible' : 'hidden'}
        className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="mb-12 text-center">
          <p className="section-heading">Our Values</p>
          <h2 className="heading-lg mt-4 text-heading">Company Pillars</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
            The principles that guide everything we build and every decision we make
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid gap-6 md:grid-cols-2"
        >
          {[
            {
              icon: Target,
              title: 'Precision',
              desc: 'Every calculation, from DTI to DSCR, is deterministic, tested, and fully traceable. Every decision is explainable, every number defensible.',
            },
            {
              icon: Shield,
              title: 'Trust',
              desc: 'Explainable AI with complete audit trails, role-based access, and security-first design. Built for compliance and regulatory scrutiny.',
            },
            {
              icon: Lightbulb,
              title: 'Innovation',
              desc: 'Modern AI agents purpose-built for income, credit, property, and compliance analysis. Technology that moves lending forward.',
            },
            {
              icon: Users,
              title: 'Partnership',
              desc: 'We co-design workflows with underwriting, risk, and compliance teams—not around them. Your success is our mission.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="glass-card-hover flex flex-col gap-4 p-6 md:p-8"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-accent-400/20 via-accent-500/30 to-accent-400/10 text-accent-light">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-heading">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
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
        className="mx-auto max-w-5xl px-4 pb-24 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={fadeInUp}
          className="glass-card-hover flex flex-col items-center gap-6 bg-gradient-to-r from-white via-white/95 to-white/90 px-6 py-12 text-center dark:from-navy-900/90 dark:via-navy-900/95 dark:to-navy-900/90 sm:px-8 md:px-12"
        >
          <div className="space-y-4">
            <p className="section-heading">Get Started</p>
            <h2 className="heading-md text-heading">Join us in building the future of lending</h2>
            <p className="mx-auto max-w-xl text-sm text-muted md:text-base">
              Whether you&apos;re leading underwriting, risk, or technology, we&apos;d love to explore how Alnex can 
              fit your stack and credit strategy.
            </p>
          </div>
          <div className="flex justify-center">
            <Link href="/contact" className="btn-primary w-full justify-center sm:w-auto">
              Request a Demo
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}


