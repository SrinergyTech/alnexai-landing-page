import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service - Alnex.ai',
  description: 'Terms of Service for Alnex.ai - Mortgage Underwriter Assistant',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-6 transition-colors text-sm font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
            <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-6">
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-3">Terms of Service</h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-xl p-8 sm:p-12">
            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">1</span>
                Agreement to Terms
              </h2>
              <div className="ml-16 space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  By accessing or using Alnex.ai ("we," "us," or "our") and our mortgage underwriter assistant platform (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Service.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  These Terms constitute a legally binding agreement between you and Alnex.ai. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting. Your continued use of the Service after any modifications constitutes your acceptance of the modified Terms.
                </p>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">2</span>
                Description of Service
              </h2>
              <div className="ml-16 space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  Alnex.ai provides an AI-powered mortgage underwriter assistant platform that:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                  <li>Facilitates mortgage application processing and underwriting</li>
                  <li>Provides intelligent analysis and risk assessment for mortgage applications</li>
                  <li>Connects borrowers with lenders and financial institutions</li>
                  <li>Offers mortgage rate comparisons and recommendations</li>
                  <li>Assists with document collection, verification, and processing</li>
                  <li>Provides mortgage-related educational resources and guidance</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-6">
                  We act as an intermediary platform and do not directly originate, fund, or service mortgages. All mortgage decisions, including approval, denial, rates, and terms, are made solely by the participating lenders and financial institutions.
                </p>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">3</span>
                Eligibility and Account Registration
              </h2>
              <div className="ml-16 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3.1 Eligibility Requirements</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                    To use our Service, you must:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                    <li>Be at least 18 years of age</li>
                    <li>Have the legal capacity to enter into binding agreements</li>
                    <li>Reside in a jurisdiction where our Service is available</li>
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3.2 Account Responsibilities</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                    You are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                    <li>Maintaining the confidentiality of your account password</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized access</li>
                    <li>Ensuring all information provided is accurate and up-to-date</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">4</span>
                Use of Service
              </h2>
              <div className="ml-16 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4.1 Permitted Use</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                    You may use our Service solely for lawful purposes related to mortgage application and processing. You agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                    <li>Provide truthful and accurate information</li>
                    <li>Use the Service in compliance with all applicable laws and regulations</li>
                    <li>Respect the intellectual property rights of Alnex.ai and third parties</li>
                    <li>Not interfere with or disrupt the Service or servers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4.2 Prohibited Activities</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                    You agree NOT to:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                    <li>Provide false, misleading, or fraudulent information</li>
                    <li>Attempt to gain unauthorized access to the Service or other accounts</li>
                    <li>Use automated systems (bots, scrapers) to access the Service</li>
                    <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                    <li>Transmit viruses, malware, or other harmful code</li>
                    <li>Violate any applicable federal, state, or local laws or regulations</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation</li>
                    <li>Engage in any activity that could harm our reputation or business</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">5</span>
                Mortgage Application Process
              </h2>
              <div className="ml-16 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5.1 Application Submission</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                    When you submit a mortgage application through our platform:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                    <li>You authorize us to share your information with participating lenders</li>
                    <li>You consent to credit checks and background verification</li>
                    <li>You understand that application does not guarantee mortgage approval</li>
                    <li>You agree to provide all required documentation in a timely manner</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5.2 Lender Relationships</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                    We facilitate connections between borrowers and lenders but are not a party to any mortgage agreement. The relationship between you and any lender is governed by separate agreements. We are not responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                    <li>Lender decisions regarding approval, denial, rates, or terms</li>
                    <li>Lender practices, policies, or customer service</li>
                    <li>Mortgage servicing or loan modifications after origination</li>
                    <li>Disputes between you and lenders</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5.3 Fees and Costs</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                    Our Service may be provided free of charge to borrowers. However:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                    <li>Lenders may charge application fees, origination fees, and other costs</li>
                    <li>We may receive compensation from lenders for successful referrals</li>
                    <li>All fees and costs will be disclosed in accordance with applicable regulations</li>
                    <li>You are responsible for reviewing and understanding all fees before accepting a mortgage offer</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">6</span>
                AI-Powered Services
              </h2>
              <div className="ml-16 space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  Our Service utilizes artificial intelligence and machine learning to:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                  <li>Analyze mortgage applications and assess risk</li>
                  <li>Provide recommendations and rate comparisons</li>
                  <li>Automate document processing and verification</li>
                  <li>Generate insights and predictions</li>
                </ul>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-600 p-6 rounded-r-lg mt-6">
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-lg">
                    <strong className="text-yellow-800 dark:text-yellow-300">Important:</strong> AI-generated recommendations are for informational purposes only and do not constitute financial, legal, or professional advice. All mortgage decisions are made by human underwriters and lenders. You should consult with qualified professionals before making financial decisions.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">7</span>
                Intellectual Property
              </h2>
              <div className="ml-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                  The Service, including all content, features, functionality, software, and technology, is owned by Alnex.ai and protected by copyright, trademark, and other intellectual property laws. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                  <li>Copy, modify, or create derivative works of the Service</li>
                  <li>Use our trademarks, logos, or branding without permission</li>
                  <li>Remove or alter any copyright or proprietary notices</li>
                  <li>Use the Service for any commercial purpose without authorization</li>
                </ul>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">8</span>
                Disclaimers and Limitations of Liability
              </h2>
              <div className="ml-16 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8.1 Service Availability</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                    We strive to provide reliable service but do not guarantee:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                    <li>Uninterrupted or error-free operation</li>
                    <li>Immediate processing of applications</li>
                    <li>Availability of specific mortgage products or rates</li>
                    <li>Accuracy of all information or recommendations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8.2 No Warranty</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic">
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8.3 Limitation of Liability</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, ALNEX.AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">9</span>
                Indemnification
              </h2>
              <div className="ml-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                  You agree to indemnify, defend, and hold harmless Alnex.ai, its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorney fees) arising out of or related to:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                  <li>Your use of the Service</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Any false or misleading information you provide</li>
                </ul>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">10</span>
                Compliance with Laws
              </h2>
              <div className="ml-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                  You agree to comply with all applicable federal, state, and local laws and regulations, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                  <li>Truth in Lending Act (TILA)</li>
                  <li>Real Estate Settlement Procedures Act (RESPA)</li>
                  <li>Equal Credit Opportunity Act (ECOA)</li>
                  <li>Fair Credit Reporting Act (FCRA)</li>
                  <li>Gramm-Leach-Bliley Act (GLBA)</li>
                  <li>State mortgage lending and licensing requirements</li>
                </ul>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">11</span>
                Termination
              </h2>
              <div className="ml-16 space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  We may terminate or suspend your access to the Service immediately, without prior notice, for any reason, including:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                  <li>Violation of these Terms</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Provision of false information</li>
                  <li>At our sole discretion</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-6">
                  You may terminate your account at any time by contacting us. Upon termination, your right to use the Service will cease immediately.
                </p>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">12</span>
                Dispute Resolution
              </h2>
              <div className="ml-16 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">12.1 Governing Law</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">12.2 Arbitration</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    Any disputes arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association, except where prohibited by law.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">13</span>
                Miscellaneous
              </h2>
              <div className="ml-16 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">13.1 Entire Agreement</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you and Alnex.ai regarding the Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">13.2 Severability</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full effect.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">13.3 Waiver</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-0">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">14</span>
                Contact Information
              </h2>
              <div className="ml-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                  If you have questions about these Terms, please contact us:
                </p>
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 p-8 rounded-xl border border-primary-200 dark:border-primary-800">
                  <p className="text-gray-900 dark:text-white mb-3 text-xl font-bold">Alnex.ai</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-lg">Email: <a href="mailto:legal@alnex.ai" className="text-primary-600 dark:text-primary-400 hover:underline">legal@alnex.ai</a></p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-lg">Phone: 1-800-ALNEX-AI</p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">Address: [Your Business Address]</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
