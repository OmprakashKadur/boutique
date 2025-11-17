import { useState } from 'react';
import { Eye } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Silk Drape Dress',
    price: '₹4,999',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Embroidered Kurta Set',
    price: '₹3,499',
    image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Cotton Palazzo Set',
    price: '₹2,299',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    name: 'Designer Saree',
    price: '₹8,999',
    image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 5,
    name: 'Linen Co-ord Set',
    price: '₹3,799',
    image: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 6,
    name: 'Evening Gown',
    price: '₹6,499',
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 7,
    name: 'Printed Midi Dress',
    price: '₹2,899',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 8,
    name: 'Formal Blazer Set',
    price: '₹5,299',
    image: 'https://images.pexels.com/photos/1488507/pexels-photo-1488507.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export default function NewArrivals() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide">
            New Arrivals
          </h2>
          <p className="text-neutral-600 text-lg">
            Fresh styles, just for you
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden bg-neutral-100 mb-4 aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
                    hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <button className="flex items-center gap-2 bg-white px-6 py-3 text-sm font-medium tracking-wide text-black transition-transform hover:scale-105">
                    <Eye className="h-4 w-4" />
                    Quick View
                  </button>
                </div>
              </div>
              <h3 className="text-sm md:text-base font-medium mb-1 tracking-wide">
                {product.name}
              </h3>
              <p className="text-neutral-600">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
