import { ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Fashion Model"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1
          className={`mb-4 font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Redefine Your Style
        </h1>
        <p
          className={`mb-8 max-w-xl text-lg md:text-xl font-light tracking-wider text-neutral-200 transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          Handpicked collections for every moment
        </p>
        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <button className="group flex items-center gap-2 bg-white px-8 py-4 text-black font-medium tracking-wide transition-all hover:bg-neutral-100">
            Shop Collection
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="group flex items-center gap-2 border-2 border-white px-8 py-4 text-white font-medium tracking-wide transition-all hover:bg-white hover:text-black">
            New Arrivals
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-12 w-6 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="h-2 w-2 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
