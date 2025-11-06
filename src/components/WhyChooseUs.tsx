import { Leaf, Truck, DollarSign, Users, Shield, Clock } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureProps) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export function WhyChooseUs() {
  const features = [
    {
      icon: <Leaf size={24} />,
      title: 'Farm Fresh Quality',
      description: 'Direct sourcing from certified farms ensures the highest quality produce with maximum freshness and nutritional value.'
    },
    {
      icon: <Truck size={24} />,
      title: 'Reliable Shipping',
      description: 'Temperature-controlled logistics and partnerships with leading freight companies guarantee safe, timely delivery worldwide.'
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Competitive Pricing',
      description: 'Direct farm-to-export model eliminates middlemen, offering you the best market rates without compromising on quality.'
    },
    {
      icon: <Users size={24} />,
      title: 'Trusted by Global Buyers',
      description: 'Long-standing relationships with international clients across multiple continents speak to our reliability and service.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Quality Certification',
      description: 'All exports come with complete documentation including phytosanitary certificates, quality reports, and traceability.'
    },
    {
      icon: <Clock size={24} />,
      title: '24/7 Support',
      description: 'Dedicated customer service team available round the clock to address your queries and ensure smooth operations.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-32 bg-white relative">
      {/* Curved Top */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 0L60 8.33333C120 16.6667 240 33.3333 360 41.6667C480 50 600 50 720 45C840 40 960 30 1080 25C1200 20 1320 20 1380 20L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V0Z"
            fill="#FAFAF8"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
              Why Choose Us
            </div>
            <h2 className="text-gray-900 mb-4">Your Trusted Export Partner</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We combine quality, reliability, and competitive pricing to deliver exceptional value
            </p>
            <div className="w-20 h-1 bg-green-700 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-gradient-to-r from-green-700 to-green-800 rounded-3xl p-8 md:p-12 text-center shadow-xl">
            <h3 className="text-white mb-4">Ready to Start Exporting?</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
              Join our growing network of satisfied international buyers. Get a quote today and experience the difference of working with true export professionals.
            </p>
            <button
              onClick={() => {
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
              }}
              className="bg-white text-green-700 px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Request a Quote
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 15L12.5 10L7.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 80L60 71.6667C120 63.3333 240 46.6667 360 38.3333C480 30 600 30 720 35C840 40 960 50 1080 55C1200 60 1320 60 1380 60L1440 60V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V80Z"
            fill="#FAFAF8"
          />
        </svg>
      </div>
    </section>
  );
}
