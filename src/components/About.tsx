import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#FAFAF8]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
              About Us
            </div>
            <h2 className="text-gray-900 mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-green-700 mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Founded with a vision to bring the finest Indian agricultural products to the global market, 
                we specialize in exporting premium quality ginger and onions sourced directly from trusted farmers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our commitment to quality begins at the farm level, where we work closely with cultivators 
                who share our values of sustainable farming and excellence. Every product undergoes rigorous 
                quality checks to ensure only the freshest, highest-grade produce reaches our international clients.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With years of experience in agricultural exports, we've built a reputation for reliability, 
                competitive pricing, and exceptional customer service. Our mission is to create lasting 
                partnerships with buyers worldwide while supporting local farming communities.
              </p>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="text-green-700 mb-1">Sustainability</div>
                  <p className="text-sm text-gray-600">Eco-friendly farming practices</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="text-green-700 mb-1">Quality First</div>
                  <p className="text-sm text-gray-600">Rigorous quality control</p>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758158286655-f0d93d86e174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMGZpZWxkfGVufDF8fHx8MTc2MjMzNDY2MXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Farm fields"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1602621951019-1b8ca8f9e7d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBwYWNrYWdpbmclMjB3YXJlaG91c2V8ZW58MXx8fHwxNzYyMzk2ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Packaging facility"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
