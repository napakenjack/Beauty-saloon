import { motion } from "motion/react";

const images = [
  "https://picsum.photos/seed/photo1/600/600",
  "https://picsum.photos/seed/photo2/600/600",
  "https://picsum.photos/seed/photo3/600/600",
  "https://picsum.photos/seed/photo4/600/600",
  "https://picsum.photos/seed/photo5/600/600",
  "https://picsum.photos/seed/photo6/600/600",
  "https://picsum.photos/seed/photo7/600/600",
  "https://picsum.photos/seed/photo8/600/600",
  "https://picsum.photos/seed/photo9/600/600",
];

export function GalleryGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-sm"
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
