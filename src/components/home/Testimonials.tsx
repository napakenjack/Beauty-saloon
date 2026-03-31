import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jessica M.",
    service: "Balayage & Cut",
    text: "Absolutely incredible experience. Elena listened to exactly what I wanted and delivered a color that looks so natural and vibrant. The salon itself is a dream.",
  },
  {
    name: "Amanda T.",
    service: "Signature Facial",
    text: "The most relaxing 60 minutes of my month. My skin has never looked so clear and glowing. Highly recommend Sarah for any skincare needs!",
  },
  {
    name: "Chloe R.",
    service: "Russian Manicure",
    text: "I've never had a manicure last this long without chipping. The attention to detail and hygiene standards here are unmatched.",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-3 block">
            Client Love
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
            Don't Just Take Our Word For It
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-alabaster p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            >
              <div className="flex text-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <p className="font-serif text-lg text-charcoal">{review.name}</p>
                <p className="text-sm text-gray-500">{review.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
