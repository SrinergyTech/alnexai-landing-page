import Image from 'next/image'

export default function Hero() {
  return (
    <section className="pt-16 bg-gradient-to-br from-primary-50 dark:from-gray-900 via-white dark:via-gray-900 to-primary-50 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Your Smart Mortgage
              <span className="text-primary-600 dark:text-primary-400"> Solution</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Experience the future of mortgage lending with AI-powered insights, 
              faster approvals, and personalized guidance tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#get-started"
                className="bg-primary-600 dark:bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Free
              </a>
              <a
                href="#how-it-works"
                className="border-2 border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 dark:hover:bg-gray-800 transition-all"
              >
                Learn More
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">24hr</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Average Approval</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">99%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">$2M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Loans Processed</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
                alt="Modern home with keys - mortgage and real estate concept"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-primary-200 dark:bg-primary-900/50 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
