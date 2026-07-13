import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-40 pb-20 bg-gradient-to-br from-white via-orange-50 to-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-40 h-40 bg-orange-100 rounded-full opacity-30 blur-3xl"></div>
      
      {/* Geometric accents */}
      <div className="absolute top-32 left-20 w-2 h-2 bg-orange-500 rounded-full"></div>
      <div className="absolute top-48 left-32 w-3 h-3 bg-teal-500 rounded-full"></div>
      <div className="absolute bottom-32 right-32 w-2.5 h-2.5 bg-orange-400 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="z-10">
            <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              Expert Financial Guidance
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Guiding Your Path to <span className="text-orange-500">Prosperity</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our experienced advisors are dedicated to guiding you through every step of your financial journey. We offer personalized strategies designed to achieve your unique financial goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/30">
                Start Your Journey <ArrowRight size={20} />
              </button>
              <button className="border-2 border-gray-300 hover:border-orange-500 text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">20+</div>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500">$2B+</div>
                <p className="text-gray-600 text-sm">Assets Managed</p>
              </div>
            </div>
          </div>

          {/* Right side - Hero image placeholder */}
          <div className="relative h-96 lg:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl opacity-10"></div>
            
            {/* Decorative card stacks */}
            <div className="absolute top-0 right-0 w-64 h-80 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl shadow-2xl transform rotate-3 opacity-90">
              <div className="p-8 h-full flex flex-col justify-between text-white">
                <div>
                  <p className="text-sm opacity-75 mb-2">Financial Freedom</p>
                  <p className="text-2xl font-bold">Achieve your goals with expert guidance</p>
                </div>
                <div className="text-4xl font-bold">📈</div>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-0 w-64 h-72 bg-white rounded-2xl shadow-2xl transform -rotate-2 border-2 border-gray-100 p-8">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Investment Growth</p>
                  <p className="text-2xl font-bold text-gray-900">Wealth Protection</p>
                </div>
                <div className="text-4xl">🛡️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
