import { MessageCircle } from 'lucide-react';

export default function WhatsAppBanner() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '911234567890';
    const message = 'Hi! I am interested in your collection.';
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-neutral-900 to-neutral-800">
      <div className="max-w-4xl mx-auto text-center text-white">
        <MessageCircle className="h-16 w-16 mx-auto mb-6 text-green-400" />
        <h2 className="font-serif text-3xl md:text-4xl font-light mb-4 tracking-wide">
          Like Something?
        </h2>
        <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Order directly on WhatsApp! Share your preferences and we'll help you
          find the perfect outfit with personalized styling advice.
        </p>
        <button
          onClick={handleWhatsAppClick}
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 px-10 py-4 text-lg font-medium tracking-wide transition-all hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
          Order on WhatsApp
        </button>
        <p className="mt-6 text-sm text-neutral-400">
          We respond within minutes • Available 10 AM - 8 PM
        </p>
      </div>
    </section>
  );
}
