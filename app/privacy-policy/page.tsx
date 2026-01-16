import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy - Alnex.ai',
  description: 'Privacy Policy for Alnex.ai - Mortgage Underwriter Assistant',
}

export default function PrivacyPolicy() {
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
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-3">Privacy Policy</h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-xl p-8 sm:p-12">
            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">1</span>
                Introduction
              </h2>
              <div className="ml-16 space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  Welcome to Alnex.ai ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal and financial information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mortgage underwriter assistant platform and related services (collectively, the "Service").
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our Service.
                </p>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">2</span>
                Information We Collect
              </h2>
              
              <div className="ml-16">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-6">2.1 Personal Information</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                  We collect personal information that you provide directly to us, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Social Security Number (SSN) or Tax Identification Number</li>
                  <li>Date of birth and government-issued identification documents</li>
                  <li>Employment information, income details, and financial statements</li>
                  <li>Bank account information and credit history</li>
                  <li>Property information and real estate transaction details</li>
                  <li>Mortgage application data and supporting documentation</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">2.2 Financial Information</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                  As a mortgage underwriter assistant, we collect sensitive financial information necessary for mortgage processing, including:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                  <li>Credit reports and credit scores</li>
                  <li>Tax returns and W-2 forms</li>
                  <li>Bank statements and asset verification documents</li>
                  <li>Debt-to-income ratios and financial obligations</li>
                  <li>Property appraisals and inspection reports</li>
                </ul>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">2.3 Automatically Collected Information</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                  When you access our Service, we automatically collect certain information, including:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                  <li>IP address, browser type, and device information</li>
                  <li>Usage data, including pages visited and time spent on our platform</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Log files and system information</li>
                </ul>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">3</span>
                How We Use Your Information
              </h2>
              <div className="ml-16 space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                  <li><strong className="text-primary-700 dark:text-primary-400">Mortgage Processing:</strong> To process, evaluate, and underwrite mortgage applications</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">AI-Powered Analysis:</strong> To provide intelligent mortgage recommendations and risk assessments</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Service Delivery:</strong> To provide, maintain, and improve our mortgage underwriter assistant services</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Communication:</strong> To communicate with you about your mortgage application, account updates, and service-related matters</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Compliance:</strong> To comply with legal obligations, including anti-money laundering (AML) and Know Your Customer (KYC) requirements</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Security:</strong> To detect, prevent, and address fraud, security threats, and technical issues</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Analytics:</strong> To analyze usage patterns and improve our Service</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Marketing:</strong> To send you promotional communications (with your consent) about our services</li>
                </ul>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">4</span>
                Information Sharing and Disclosure
              </h2>
              <div className="ml-16 space-y-6">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  We may share your information in the following circumstances:
                </p>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4.1 Service Providers</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                    We may share your information with third-party service providers who perform services on our behalf, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                    <li>Credit bureaus and credit reporting agencies</li>
                    <li>Property appraisal and inspection services</li>
                    <li>Title companies and escrow services</li>
                    <li>Cloud storage and data processing providers</li>
                    <li>Payment processors and financial institutions</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4.2 Lenders and Financial Partners</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    We may share your mortgage application and related information with lenders, financial institutions, and mortgage brokers in our network to facilitate mortgage processing and approval.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4.3 Legal Requirements</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-lg">
                    We may disclose your information if required by law, court order, or governmental regulation, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                    <li>Compliance with federal and state mortgage lending regulations</li>
                    <li>Response to subpoenas, warrants, or legal process</li>
                    <li>Protection of our rights, property, or safety, or that of our users</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4.4 Business Transfers</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity, subject to the same privacy protections.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">5</span>
                Data Security
              </h2>
              <div className="ml-16 space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  We implement industry-standard security measures to protect your personal and financial information, including:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                  <li><strong className="text-primary-700 dark:text-primary-400">Encryption:</strong> All data is encrypted in transit and at rest using AES-256 encryption</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Access Controls:</strong> Strict access controls and authentication mechanisms</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Secure Infrastructure:</strong> Hosted on secure, compliant cloud infrastructure</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Regular Audits:</strong> Regular security audits and vulnerability assessments</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Employee Training:</strong> Comprehensive security training for all employees</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Compliance:</strong> Adherence to industry standards including SOC 2, PCI DSS, and GLBA requirements</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-6">
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
                </p>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">6</span>
                Your Rights and Choices
              </h2>
              <div className="ml-16 space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  You have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                  <li><strong className="text-primary-700 dark:text-primary-400">Access:</strong> Request access to your personal information</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Deletion:</strong> Request deletion of your personal information (subject to legal retention requirements)</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Opt-Out:</strong> Opt-out of marketing communications</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Data Portability:</strong> Request a copy of your data in a portable format</li>
                  <li><strong className="text-primary-700 dark:text-primary-400">Withdraw Consent:</strong> Withdraw consent for processing where applicable</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-6">
                  To exercise these rights, please contact us at privacy@alnex.ai or through the contact information provided below.
                </p>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">7</span>
                Data Retention
              </h2>
              <div className="ml-16 space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  We retain your personal information for as long as necessary to:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                  <li>Provide our services and fulfill the purposes outlined in this Privacy Policy</li>
                  <li>Comply with legal, regulatory, and contractual obligations</li>
                  <li>Resolve disputes and enforce our agreements</li>
                  <li>Maintain accurate records for mortgage underwriting and compliance purposes</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-6">
                  Financial records and mortgage-related documents are typically retained for a minimum of seven (7) years as required by federal and state regulations.
                </p>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">8</span>
                Cookies and Tracking Technologies
              </h2>
              <div className="ml-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  We use cookies and similar tracking technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie preferences through your browser settings. However, disabling cookies may limit certain features of our Service.
                </p>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">9</span>
                Children's Privacy
              </h2>
              <div className="ml-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately.
                </p>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">10</span>
                Changes to This Privacy Policy
              </h2>
              <div className="ml-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </div>
            </section>

            <section className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">11</span>
                Contact Us
              </h2>
              <div className="ml-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/30 dark:to-primary-800/30 p-8 rounded-xl border border-primary-200 dark:border-primary-800">
                  <p className="text-gray-900 dark:text-white mb-3 text-xl font-bold">Alnex.ai</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-lg">Email: <a href="mailto:privacy@alnex.ai" className="text-primary-600 dark:text-primary-400 hover:underline">privacy@alnex.ai</a></p>
                  <p className="text-gray-700 dark:text-gray-300 mb-2 text-lg">Phone: 1-800-ALNEX-AI</p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">Address: [Your Business Address]</p>
                </div>
              </div>
            </section>

            <section className="mb-0">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg px-3 py-1 text-lg font-semibold mr-4">12</span>
                California Privacy Rights
              </h2>
              <div className="ml-16 space-y-4">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including:
                </p>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 text-lg">
                  <li>The right to know what personal information is collected, used, shared, or sold</li>
                  <li>The right to delete personal information</li>
                  <li>The right to opt-out of the sale of personal information</li>
                  <li>The right to non-discrimination for exercising your privacy rights</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
