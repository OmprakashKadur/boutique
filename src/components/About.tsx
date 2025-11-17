export default function About() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 tracking-wide">
              About Our Boutique
            </h2>
            <div className="space-y-4 text-neutral-600 text-lg leading-relaxed">
              <p>
                Founded with a passion for timeless elegance and modern sophistication,
                we curate exclusive collections that celebrate the contemporary woman.
              </p>
              <p>
                Each piece in our boutique is carefully handpicked, focusing on premium
                fabrics, impeccable craftsmanship, and designs that transcend fleeting trends.
                We believe fashion is a form of self-expression, and our mission is to
                empower every woman to embrace her unique style.
              </p>
              <p>
                From traditional ethnic wear to contemporary western outfits, our collections
                blend heritage with innovation, offering versatile pieces for every occasion
                in your life.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-serif text-3xl font-light mb-2">500+</div>
                <div className="text-neutral-600 text-sm tracking-wide">Unique Designs</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-light mb-2">2000+</div>
                <div className="text-neutral-600 text-sm tracking-wide">Happy Customers</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-light mb-2">5★</div>
                <div className="text-neutral-600 text-sm tracking-wide">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Behind the scenes"
                className="w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Store interior"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="space-y-4 mt-8">
              <img
                src="https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Collection detail"
                className="w-full h-80 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fabric selection"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
