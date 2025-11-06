import { Globe, TrendingUp } from 'lucide-react';

export function ExportDestinations() {
  const destinations = [
    { name: 'UAE', flag: '🇦🇪', region: 'Middle East' },
    { name: 'Malaysia', flag: '🇲🇾', region: 'Southeast Asia' },
    { name: 'Bangladesh', flag: '🇧🇩', region: 'South Asia' },
    { name: 'Singapore', flag: '🇸🇬', region: 'Southeast Asia' },
    { name: 'Saudi Arabia', flag: '🇸🇦', region: 'Middle East' },
    { name: 'Qatar', flag: '🇶🇦', region: 'Middle East' },
    { name: 'Sri Lanka', flag: '🇱🇰', region: 'South Asia' },
    { name: 'Nepal', flag: '🇳🇵', region: 'South Asia' },
  ];

  return (
    <section id="destinations" className="py-20 md:py-32 bg-[#FAFAF8]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
              Global Reach
            </div>
            <h2 className="text-gray-900 mb-4">Export Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We proudly serve markets across the globe, delivering freshness with every shipment
            </p>
            <div className="w-20 h-1 bg-green-700 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* World Map Illustration */}
          <div className="mb-12 bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <Globe className="text-green-700" size={120} strokeWidth={1} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp className="text-green-600" size={40} />
                </div>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <div className="text-gray-900 text-3xl mb-2">10+ Countries</div>
              <p className="text-gray-600">Spanning across Asia and the Middle East</p>
            </div>

            {/* Destinations Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {destinations.map((destination, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-green-50 to-white rounded-xl p-4 border border-green-100 hover:shadow-md hover:scale-105 transition-all duration-300 text-center group"
                >
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                    {destination.flag}
                  </div>
                  <div className="text-gray-900 mb-1">{destination.name}</div>
                  <div className="text-sm text-gray-500">{destination.region}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
              <div className="text-green-700 text-4xl mb-2">500+</div>
              <div className="text-gray-900 mb-1">Tons Exported</div>
              <div className="text-sm text-gray-600">Per month average</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
              <div className="text-green-700 text-4xl mb-2">98%</div>
              <div className="text-gray-900 mb-1">On-Time Delivery</div>
              <div className="text-sm text-gray-600">Reliable shipping</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm">
              <div className="text-green-700 text-4xl mb-2">5+</div>
              <div className="text-gray-900 mb-1">Years Experience</div>
              <div className="text-sm text-gray-600">In global exports</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
