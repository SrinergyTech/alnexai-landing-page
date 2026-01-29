import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Alnex.ai – AI-Powered Mortgage Underwriting Platform',
  description:
    'Alnex.ai delivers AI-powered mortgage underwriting for lenders, banks, and credit unions with 99.2% accuracy, full audit trails, and SOC 2-grade security.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-navy-950 text-navy-100">
        <div className="relative min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
