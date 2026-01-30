import Link from 'next/link'
import { Linkedin, Twitter, Mail, Shield, Lock } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy-200/50 dark:border-navy-800/70 bg-white/95 dark:bg-navy-950/95">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="inline-flex items-baseline gap-1">
              <span className="font-display text-xl font-bold tracking-tight text-navy-900 dark:text-navy-50">
                AlNex<span className="gradient-text align-top text-base">.ai</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm text-navy-600 dark:text-navy-300">
              AI-powered mortgage underwriting built for lenders, banks, and credit unions—focused on compliance,
              accuracy, and explainability.
            </p>
            {/* <div className="flex flex-wrap items-center gap-3 text-xs text-navy-600 dark:text-navy-300">
              <span className="inline-flex items-center gap-1 rounded-full bg-navy-100/70 dark:bg-navy-900/70 px-3 py-1">
                <Shield className="h-3.5 w-3.5 text-accent-600 dark:text-accent-400" />
                SOC 2 Ready
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-navy-100/70 dark:bg-navy-900/70 px-3 py-1">
                <Lock className="h-3.5 w-3.5 text-accent-600 dark:text-accent-400" />
                GLBA Compliant
              </span>
            </div> */}
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">Product</h4>
            <ul className="space-y-2 text-sm text-navy-600 dark:text-navy-300">
              <li>
                <Link href="/#features" className="hover:text-accent-600 dark:hover:text-accent-300">
                  Platform Overview
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-accent-600 dark:hover:text-accent-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#stats" className="hover:text-accent-600 dark:hover:text-accent-300">
                  Performance Metrics
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-accent-600 dark:hover:text-accent-300">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">Company</h4>
            <ul className="space-y-2 text-sm text-navy-600 dark:text-navy-300">
              <li>
                <Link href="/about" className="hover:text-accent-600 dark:hover:text-accent-300">
                  About
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent-600 dark:hover:text-accent-300">
                  Contact
                </a>
              </li>
            </ul>

            <h4 className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">Legal</h4>
            <ul className="space-y-2 text-sm text-navy-600 dark:text-navy-300">
              <li>
                <Link href="/privacy-policy" className="hover:text-accent-600 dark:hover:text-accent-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-accent-600 dark:hover:text-accent-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-navy-200/50 dark:border-navy-800/70 pt-6 text-sm text-navy-500 dark:text-navy-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Alnex.ai. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy-100/80 dark:bg-navy-900/80 text-navy-700 dark:text-navy-200 hover:text-accent-600 dark:hover:text-accent-300"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy-100/80 dark:bg-navy-900/80 text-navy-700 dark:text-navy-200 hover:text-accent-600 dark:hover:text-accent-300"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="mailto:security@alnex.ai"
                aria-label="Email"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navy-100/80 dark:bg-navy-900/80 text-navy-700 dark:text-navy-200 hover:text-accent-600 dark:hover:text-accent-300"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-navy-500 dark:text-navy-400">
              <span>Secure by design.</span>
              <span className="h-1 w-1 rounded-full bg-navy-400 dark:bg-navy-600" />
              <span>Audit-ready underwriting trails.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
