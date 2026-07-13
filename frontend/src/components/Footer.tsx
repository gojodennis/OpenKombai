import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                FA
              </div>
              <span className="font-bold text-lg text-white">Financial Advisors</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Providing expert financial guidance and personalized strategies to help you achieve your financial goals.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-orange-500/20 hover:bg-orange-500 text-orange-400 hover:text-white rounded-lg flex items-center justify-center transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-orange-500/20 hover:bg-orange-500 text-orange-400 hover:text-white rounded-lg flex items-center justify-center transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-orange-500/20 hover:bg-orange-500 text-orange-400 hover:text-white rounded-lg flex items-center justify-center transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-orange-500/20 hover:bg-orange-500 text-orange-400 hover:text-white rounded-lg flex items-center justify-center transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Retirement Planning</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Investment Advisory</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Wealth Management</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Financial Consultation</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Tax Planning</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-orange-400 mt-1 flex-shrink-0" />
                <span>+1 (800) 000-0000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-orange-400 mt-1 flex-shrink-0" />
                <span>info@financialservices.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-400 mt-1 flex-shrink-0" />
                <span>123 Business Ave, Suite 100<br />Your City, State 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-400">Get the latest financial tips and insights delivered to your inbox</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border border-orange-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>
            &copy; 2024 Financial Advisors. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
