export default function Benefits() {
  const benefits = [
    {
      stat: '50%',
      label: 'Faster Processing',
      description: 'Compared to traditional mortgage applications',
    },
    {
      stat: '$15K+',
      label: 'Average Savings',
      description: 'Lower rates mean more money in your pocket',
    },
    {
      stat: '500+',
      label: 'Lender Network',
      description: 'Access to the largest network of mortgage lenders',
    },
    {
      stat: '4.9/5',
      label: 'Customer Rating',
      description: 'Rated by thousands of satisfied customers',
    },
  ]

  return (
    <section id="benefits" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              The Alnex.ai Advantage
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We've revolutionized the mortgage process by combining cutting-edge AI technology 
              with personalized service. Our platform makes finding and securing the perfect 
              mortgage faster, easier, and more transparent than ever before.
            </p>
            <ul className="space-y-4">
              {[
                'No hidden fees or surprises',
                '24/7 customer support',
                'Mobile-friendly application process',
                'Real-time rate updates',
                'Document upload and management',
                'Expert mortgage advisors on demand',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 rounded-xl p-8 text-white hover:shadow-xl dark:hover:shadow-primary-900/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl font-bold mb-2">{benefit.stat}</div>
                <div className="text-xl font-semibold mb-2">{benefit.label}</div>
                <div className="text-primary-100 dark:text-primary-200 text-sm">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
