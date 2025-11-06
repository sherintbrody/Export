import { Package, Ruler, MapPin, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  name: string;
  image: string;
  description: string;
  grades: string[];
  specs: {
    icon: React.ReactNode;
    label: string;
    value: string;
  }[];
}

function ProductCard({ name, image, description, grades, specs }: ProductCardProps) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-green-700 text-white px-4 py-2 rounded-full text-sm">
          Premium Quality
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-gray-900 mb-3">{name}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Quality Grades */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Award className="text-green-700" size={20} />
            <span className="text-gray-900">Quality Grades</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {grades.map((grade, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm border border-green-200"
              >
                {grade}
              </span>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div className="space-y-4">
          <div className="text-gray-900 mb-3">Export Specifications</div>
          {specs.map((spec, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="text-green-700 mt-1">{spec.icon}</div>
              <div className="flex-1">
                <div className="text-gray-700 text-sm">{spec.label}</div>
                <div className="text-gray-900">{spec.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Products() {
  const products = [
    {
      name: 'Fresh Ginger',
      image: 'https://images.unsplash.com/photo-1717769071502-e9b5d06c5fc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGdpbmdlciUyMHJvb3R8ZW58MXx8fHwxNzYyMzU5NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Premium quality ginger with high oil content and rich aroma, carefully harvested and processed for export.',
      grades: ['Grade A', 'Grade B', 'Organic'],
      specs: [
        {
          icon: <Ruler size={18} />,
          label: 'Size',
          value: '100g-250g, 250g-500g, 500g+'
        },
        {
          icon: <Package size={18} />,
          label: 'Packaging',
          value: 'Mesh bags, Cartons (10kg, 20kg, 30kg)'
        },
        {
          icon: <MapPin size={18} />,
          label: 'Origin',
          value: 'Maharashtra & Kerala, India'
        }
      ]
    },
    {
      name: 'Fresh Onions',
      image: 'https://images.unsplash.com/photo-1760627589778-228a65c8a975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG9uaW9ucyUyMGhhcnZlc3R8ZW58MXx8fHwxNzYyMzk2ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'High-quality red and white onions with excellent shelf life and robust flavor for international markets.',
      grades: ['Premium', 'Grade A', 'Grade B'],
      specs: [
        {
          icon: <Ruler size={18} />,
          label: 'Size',
          value: '40-60mm, 60-80mm, 80mm+'
        },
        {
          icon: <Package size={18} />,
          label: 'Packaging',
          value: 'Mesh bags, Net bags (25kg, 50kg)'
        },
        {
          icon: <MapPin size={18} />,
          label: 'Origin',
          value: 'Maharashtra & Karnataka, India'
        }
      ]
    }
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-white relative">
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
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
            Our Products
          </div>
          <h2 className="text-gray-900 mb-4">Premium Export Quality</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer carefully selected and graded produce that meets international standards
          </p>
          <div className="w-20 h-1 bg-green-700 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Quality Assurance Note */}
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-green-700 rounded-full flex items-center justify-center">
              <Award className="text-white" size={32} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-gray-900 mb-2">Quality Guaranteed</h3>
              <p className="text-gray-700">
                All products undergo strict quality control and certification processes. 
                We provide complete documentation including phytosanitary certificates and quality reports.
              </p>
            </div>
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
