import { useState } from 'react';

const collections = [
  {
    id: 1,
    title: 'Festive Wear',
    image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Celebrate in style'
  },
  {
    id: 2,
    title: 'Casual & Daily Wear',
    image: 'https://images.pexels.com/photos/2072453/pexels-photo-2072453.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Effortless elegance'
  },
  {
    id: 3,
    title: 'Premium Designer Wear',
    image: 'https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Luxury redefined'
  },
  {
    id: 4,
    title: 'Accessories & Jewelry',
    image: 'https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Perfect finishing touches'
  }
];

export default function FeaturedCollections() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide">
            Featured Collections
          </h2>
          <p className="text-neutral-600 text-lg">
            Curated selections for the modern woman
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative h-96 lg:h-[500px] overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredId(collection.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                  hoveredId === collection.id ? 'opacity-50' : 'opacity-30'
                }`}
              ></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <h3 className="font-serif text-3xl md:text-4xl font-light mb-2 tracking-wide">
                  {collection.title}
                </h3>
                <p className="text-neutral-200 mb-6">{collection.description}</p>
                <div
                  className={`border border-white px-8 py-3 text-sm tracking-wider transition-all duration-300 ${
                    hoveredId === collection.id
                      ? 'opacity-100 translate-y-0 bg-white text-black'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  View Collection
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
