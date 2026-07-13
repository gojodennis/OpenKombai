import { Users, Handshake, Shield, TrendingUp } from 'lucide-react';

export function ValueProposition() {
  const values = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified financial advisors bring decades of combined experience and expertise to guide your financial journey."
    },
    {
      icon: Handshake,
      title: "Client-Centric Approach",
      description: "Your goals are our priority. We create personalized strategies that align with your unique financial objectives."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in complete transparency with no hidden fees, ensuring you understand every aspect of your financial plan."
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "Our consistent performance and client success stories speak volumes about our commitment to excellence."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Our Clients Trust Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine expertise, transparency, and personalized service to deliver exceptional financial solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl border-2 border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="text-orange-500" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Decorative bottom element */}
        <div className="mt-16 pt-16 border-t border-gray-200 flex justify-center">
          <div className="text-center">
            <p className="text-gray-600 mb-4">Trusted by leading companies and individuals</p>
            <div className="flex justify-center gap-8 opacity-50">
              {['Company 1', 'Company 2', 'Company 3', 'Company 4'].map((company) => (
                <div key={company} className="text-gray-400 font-semibold">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
