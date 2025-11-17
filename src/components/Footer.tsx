import { Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl text-white mb-6 tracking-wide">
              Boutique
            </h3>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Redefining elegance with curated collections for the modern woman.
              Where tradition meets contemporary style.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-neutral-800 hover:bg-white hover:text-black transition-colors rounded-full"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-neutral-800 hover:bg-white hover:text-black transition-colors rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-white mb-6 tracking-wide">
              Collections
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Festive Wear
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Casual & Daily
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Designer Wear
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Store Location
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Lookbook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white mb-6 tracking-wide">
              Newsletter
            </h4>
            <p className="text-neutral-400 mb-4">
              Subscribe to get updates on new arrivals and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 focus:border-white focus:outline-none transition-colors"
              />
              <button className="p-3 bg-white text-black hover:bg-neutral-200 transition-colors">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 text-center text-neutral-500 text-sm">
          <p>
            © {new Date().getFullYear()} Boutique. All rights reserved. Crafted with passion for fashion.
          </p>
        </div>
      </div>
    </footer>
  );
}
