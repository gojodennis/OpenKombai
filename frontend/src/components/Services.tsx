import { CheckCircle, ArrowRight } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: "💼",
      title: "Retirement Planning",
      description: "We analyze your financial situation, project future needs, and create a plan to ensure a comfortable retirement."
    },
    {
      icon: "📊",
      title: "Investment Advisory",
      description: "We develop comprehensive plans, including asset allocation strategies, to manage and distribute your investments."
    },
    {
      icon: "🛡️",
      title: "Wealth Management",
      description: "We offer solutions to plan your financial goals and life milestones, ensuring a portfolio that aligns with your vision."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-orange-100 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-100 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide expert guidance across all aspects of financial planning to help you achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-orange-200"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-t-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>

              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <div className="flex items-center text-orange-500 font-semibold hover:text-orange-600 cursor-pointer">
                Learn More <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional services feature */}
        <div className="bg-white rounded-2xl p-12 border-2 border-orange-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Committed to Your Financial Success and Security
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our promise that your growing is doing what it's supposed to - changing lives. Today, we are proud to deliver on our commitment to changing lives, investing in the future of people who come to our care of financial.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Today, we are grateful to deliver on our commitment to understanding community investors to ensure job opportunities and workforce equity.
              </p>

              <div className="space-y-4">
                {[
                  "Get Ahead with Expert Consultants",
                  "Unleash Your Business's Full Potential",
                  "Your Business is Our Business",
                  "Transforming Businesses a Brighter"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center gap-2">
                About Us <ArrowRight size={18} />
              </button>
            </div>

            <div className="relative h-96">
              {/* Placeholder for service image */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-100 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">👥</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
