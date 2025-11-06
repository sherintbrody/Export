import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { ExportDestinations } from './components/ExportDestinations';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <ExportDestinations />
      <WhyChooseUs />
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  );
}