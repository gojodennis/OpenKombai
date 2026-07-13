import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      image: "👩‍💼",
      quote: "The team at Financial Advisors transformed my approach to wealth management. Their personalized strategies have helped me grow my portfolio significantly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Entrepreneur",
      image: "👨‍💼",
      quote: "Outstanding service and expert guidance. They understood my goals and created a comprehensive plan that exceeded my expectations.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Corporate Executive",
      image: "👩‍💻",
      quote: "Finally found advisors I can trust completely. Their transparency and expertise give me confidence in my financial future.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Client Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from satisfied clients who have transformed their financial lives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-orange-400 text-orange-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <p className="text-center text-gray-600 mb-8">Trusted by hundreds of satisfied clients</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="text-3xl font-bold text-orange-500">500+</p>
              <p className="text-gray-600 mt-2">Happy Clients</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="text-3xl font-bold text-orange-500">20+</p>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="text-3xl font-bold text-orange-500">$2B+</p>
              <p className="text-gray-600 mt-2">Assets Managed</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <p className="text-3xl font-bold text-orange-500">98%</p>
              <p className="text-gray-600 mt-2">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
