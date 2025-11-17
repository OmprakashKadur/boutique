import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Absolutely love the quality and designs! The fabric is premium and the fit is perfect. Highly recommended.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 2,
    name: 'Anjali Reddy',
    rating: 5,
    comment: 'Beautiful collection with unique designs. The attention to detail is impressive. Will definitely shop again!',
    image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 3,
    name: 'Meera Patel',
    rating: 5,
    comment: 'Elegant, stylish, and comfortable. Every piece I bought has become a wardrobe favorite. Exceptional service too!',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    id: 4,
    name: 'Kavya Iyer',
    rating: 5,
    comment: 'The perfect blend of tradition and modern style. Great quality and the prices are reasonable for the craftsmanship.',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

export default function Reviews() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide">
            What Our Customers Say
          </h2>
          <p className="text-neutral-600 text-lg">
            Real experiences from real people
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium tracking-wide">{review.name}</h3>
                  <div className="flex gap-1 mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-neutral-600 leading-relaxed italic">
                "{review.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
