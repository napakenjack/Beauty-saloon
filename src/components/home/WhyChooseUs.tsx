import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const benefits = [
    "Hospital-grade sterilization for all tools",
    "Personalized, unhurried consultations",
    "Exclusive use of premium, non-toxic products",
    "Quiet, relaxing atmosphere with complimentary beverages",
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/salon-owner/800/1000"
                alt="Salon interior and specialist"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-blush p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <p className="font-serif text-xl text-charcoal leading-snug">
                "We believe beauty is a feeling, not just a look."
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-3 block">
              The Lumière Standard
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              Uncompromising Quality & Care
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We don't just provide services; we craft experiences. From the moment you walk through our doors, every detail is designed to make you feel pampered, heard, and completely at ease.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3" />
                  <span className="text-charcoal">{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="#about-us"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-charcoal text-white hover:bg-charcoal/90 rounded-full font-medium transition-colors"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
