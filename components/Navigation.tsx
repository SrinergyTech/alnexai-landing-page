'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import ThemeToggle from '@/components/ThemeToggle'

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // close mobile menu on route change
    setOpen(false)
  }, [pathname])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/security', label: 'Security' },
  ]

  return (
    <motion.header
      variants={fadeInDown}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.4 }}
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-300',
        scrolled ? 'backdrop-blur-xl bg-white/80 dark:bg-navy-950/80 border-b border-navy-200/50 dark:border-navy-800/70' : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold tracking-tight text-navy-900 dark:text-navy-50">
              AlNex<span className="gradient-text align-top text-base">.ai</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'nav-link text-sm',
                    active && 'text-navy-900 dark:text-white'
                  )}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-accent-400/0 via-accent-400 to-accent-400/0" />
                  )}
                </Link>
              )
            })}
            <ThemeToggle />
            <Link href="/contact" className='btn-secondary text-sm'>
              Request a Demo
            </Link>
            <a href="https://mortiq.alnex.ai" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
              Login
            </a>
          </nav>

          {/* Mobile button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-lg border border-navy-300/70 dark:border-navy-700/70 bg-white/80 dark:bg-navy-900/60 p-2 text-navy-700 dark:text-navy-100 shadow-sm"
              aria-label="Toggle navigation"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden"
          >
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="glass-card border-t border-navy-200/50 dark:border-navy-800/70 bg-white/95 dark:bg-navy-950/95"
            >
              <div className="space-y-2 px-4 pb-6 pt-4">
                {links.map((link) => {
                  const active = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-navy-700 dark:text-navy-200 hover:bg-navy-100/70 dark:hover:bg-navy-800/70',
                        active && 'text-navy-900 dark:text-white'
                      )}
                    >
                      <span>{link.label}</span>
                    </Link>
                  )
                })}
                <div className="mt-4">
                  <a href="https://mortiq.alnex.ai" target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-sm justify-center gap-2">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}


