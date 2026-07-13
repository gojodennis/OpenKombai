import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function LandingPage() {
  return (
    <div className="w-full bg-white">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Services />
        <Process />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
