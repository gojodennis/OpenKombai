import { Menu, X, PhoneCall } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white z-50 shadow-sm">
      {/* Top bar - Contact info */}
      <div className="bg-gray-100 px-6 py-2 text-sm text-gray-600 flex justify-between items-center">
        <div className="flex gap-6">
          <span>📧 info@financialservices.com</span>
          <span className="hidden md:inline">📍 123 Business Ave, Suite 100</span>
        </div>
        <div className="flex gap-4">
          <button className="text-orange-500 hover:text-orange-600 font-semibold flex items-center gap-1">
            <PhoneCall size={14} /> Schedule Consultation
          </button>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
            FA
          </div>
          <span className="font-bold text-lg text-gray-900 hidden md:inline">Financial Advisors</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Home</a>
          <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
          <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</a>
          <a href="#expertise" className="text-gray-700 hover:text-orange-500 transition-colors">Expertise</a>
          <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
        </div>

        {/* CTA Button */}
        <button className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
          Get Started
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
          <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors">Home</a>
          <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">About</a>
          <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Services</a>
          <a href="#expertise" className="text-gray-700 hover:text-orange-500 transition-colors">Expertise</a>
          <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact</a>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
