import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1650330583782-0de351666aa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBjcmF0ZXMlMjBwcm9kdWNlfGVufDF8fHx8MTc2MjM5Njg0NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Fresh produce crates"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-green-700/90 backdrop-blur-sm rounded-full text-white text-sm">
            🌱 Farm Fresh • Globally Exported
          </div>
          
          <h1 className="text-white mb-6 animate-fade-in">
            Fresh Indian Ginger & Onion — Exported Globally
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Premium quality produce from India's finest farms, delivered to markets worldwide with reliability and care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToContact}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-6 rounded-full text-lg group"
            >
              Get a Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById('products');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              variant="outline"
              className="bg-white border-2 border-white text-gray-900 hover:bg-gray-100 hover:border-gray-100 px-8 py-6 rounded-full text-lg shadow-lg"
            >
              View Products
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="text-white text-2xl md:text-3xl mb-1">10+</div>
              <div className="text-white/80 text-sm md:text-base">Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="text-white text-2xl md:text-3xl mb-1">500+</div>
              <div className="text-white/80 text-sm md:text-base">Tons/Month</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20">
              <div className="text-white text-2xl md:text-3xl mb-1">100%</div>
              <div className="text-white/80 text-sm md:text-base">Quality</div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FAFAF8"
          />
        </svg>
      </div>
    </section>
  );
}