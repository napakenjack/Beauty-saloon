import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export function WhyChooseUs() {
  const benefits = [
    "High-end lighting and professional camera equipment",
    "Personalized creative direction and posing guidance",
    "Multiple aesthetic sets and versatile backdrops",
    "Fast turnaround times with premium retouching",
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://picsum.photos/seed/photographer/800/1000"
                alt="Photographer in studio"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -right-8 bg-blush p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <p className="font-serif text-xl text-charcoal leading-snug">
                "We don't just take photos, we capture your essence."
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-3 block">
              The Lumière Standard
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              Uncompromising Quality & Vision
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We don't just provide a space; we craft visual experiences. From the moment you step on set, every detail is designed to make you feel confident, comfortable, and ready to shine.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mr-3" />
                  <span className="text-charcoal">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-charcoal text-white hover:bg-charcoal/90 rounded-full font-medium transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
