export function Process() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Discover your financial goals and needs during a personalized consultation"
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We create a tailored financial plan designed to meet your specific objectives"
    },
    {
      number: "03",
      title: "Plan Implementation",
      description: "Execute the customized strategies with our support, ensuring steps align with your goals"
    },
    {
      number: "04",
      title: "Ongoing Monitoring",
      description: "We regularly review and adjust your plan to adapt to changes in your financial situation"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            How We Operate
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Proven Financial Planning Process
          </h2>
        </div>

        {/* Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line - only show between items on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 -right-3 w-6 h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
              )}

              <div className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 rounded-xl p-8 hover:border-orange-300 hover:shadow-lg transition-all duration-300 h-full">
                {/* Step number - circular */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full text-2xl font-bold mb-4">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>

                {/* Small icon at bottom */}
                <div className="mt-6 text-3xl opacity-20">
                  {index === 0 && "📋"}
                  {index === 1 && "🎯"}
                  {index === 2 && "⚙️"}
                  {index === 3 && "📊"}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Process Diagram - Mobile friendly */}
        <div className="mt-16 p-8 bg-gradient-to-r from-orange-50 to-transparent rounded-2xl border-2 border-orange-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Process in Detail</h3>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-500 text-white font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-bold text-gray-900">{step.title}</h4>
                  <p className="text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
