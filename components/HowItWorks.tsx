export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Sign up in seconds and provide basic information about your financial situation and home buying goals.',
    },
    {
      number: '02',
      title: 'AI Analysis',
      description: 'Our AI analyzes your profile and matches you with the best mortgage options from our network of lenders.',
    },
    {
      number: '03',
      title: 'Compare & Choose',
      description: 'Review personalized mortgage offers with transparent rates, terms, and fees side-by-side.',
    },
    {
      number: '04',
      title: 'Get Approved',
      description: 'Submit your application and get pre-approved in as little as 24 hours with minimal paperwork.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-primary-50 dark:from-gray-900 to-white dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Getting your mortgage has never been easier. Follow these simple steps to get started.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md dark:shadow-lg hover:shadow-xl dark:hover:shadow-primary-900/20 transition-all duration-300 relative z-10">
                <div className="text-6xl font-bold text-primary-100 dark:text-primary-900/50 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-primary-200 dark:bg-primary-800 transform -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary-400 dark:bg-primary-600 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
