import { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const trendingItems = [
  {
    id: 1,
    name: 'Velvet Evening Dress',
    price: '₹7,999',
    image: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 2,
    name: 'Silk Wrap Top',
    price: '₹2,799',
    image: 'https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 3,
    name: 'Designer Lehenga',
    price: '₹12,999',
    image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 4,
    name: 'Chiffon Saree',
    price: '₹5,499',
    image: 'https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 5,
    name: 'Crop Top Set',
    price: '₹3,299',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export default function TrendingProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex((prev) => Math.max(0, prev - 1));
    } else {
      setCurrentIndex((prev) => Math.min(trendingItems.length - 1, prev + 1));
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide">
            Trending Now
          </h2>
          <p className="text-neutral-600 text-lg">
            Most loved by our customers
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {trendingItems.map((item) => (
                <div
                  key={item.id}
                  className="group min-w-[280px] md:min-w-[320px] cursor-pointer"
                >
                  <div className="relative overflow-hidden bg-neutral-100 mb-4 aspect-[3/4]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <button
                      onClick={() => toggleWishlist(item.id)}
                      className="absolute top-4 right-4 p-2 bg-white/90 rounded-full transition-all hover:scale-110 opacity-0 group-hover:opacity-100"
                    >
                      <Heart
                        className={`h-5 w-5 transition-colors ${
                          wishlist.includes(item.id)
                            ? 'fill-red-500 text-red-500'
                            : 'text-neutral-700'
                        }`}
                      />
                    </button>
                  </div>
                  <h3 className="text-base font-medium mb-1 tracking-wide">
                    {item.name}
                  </h3>
                  <p className="text-neutral-600">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex >= trendingItems.length - 3}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
