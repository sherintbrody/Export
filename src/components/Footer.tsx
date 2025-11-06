import { Mail, Phone, Linkedin, MessageSquare, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white">FE</span>
                </div>
                <div>
                  <div className="text-white">FreshExport</div>
                  <div className="text-[10px] text-green-400 -mt-1">Premium Quality</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm">
                Your trusted partner in exporting premium quality fresh ginger and onions from India to markets worldwide.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <MessageSquare size={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-green-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('destinations')}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Export Destinations
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-400">
                  <Mail size={18} className="mt-1 flex-shrink-0 text-green-400" />
                  <a href="mailto:info@freshexport.com" className="hover:text-green-400 transition-colors">
                    info@freshexport.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <Phone size={18} className="mt-1 flex-shrink-0 text-green-400" />
                  <a href="tel:+919876543210" className="hover:text-green-400 transition-colors">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-start gap-2 text-gray-400">
                  <MessageSquare size={18} className="mt-1 flex-shrink-0 text-green-400" />
                  <a href="https://wa.me/919876543210" className="hover:text-green-400 transition-colors">
                    WhatsApp Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {currentYear} FreshExport. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-green-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-green-400 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-500 hover:text-green-400 transition-colors">
                  Export Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
