import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 tracking-wide">
            Visit Our Store
          </h2>
          <p className="text-neutral-600 text-lg">
            Experience our collections in person
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 md:p-12 shadow-sm">
            <h3 className="font-serif text-2xl font-light mb-8 tracking-wide">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium mb-1">Store Location</div>
                  <p className="text-neutral-600">
                    123 Fashion Street, MG Road<br />
                    Bangalore, Karnataka 560001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium mb-1">Opening Hours</div>
                  <p className="text-neutral-600">
                    Monday - Saturday: 10:00 AM - 8:00 PM<br />
                    Sunday: 11:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium mb-1">Phone</div>
                  <p className="text-neutral-600">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                <div>
                  <div className="font-medium mb-1">Email</div>
                  <p className="text-neutral-600">hello@boutique.com</p>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <div className="font-medium mb-4">Follow Us</div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-colors rounded-full"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-colors rounded-full"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] bg-neutral-200 relative overflow-hidden shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.842545897955!2d77.60355431482196!3d12.971598990856432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
