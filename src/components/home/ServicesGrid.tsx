import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "portrait",
    title: "Portrait Photography",
    description: "Professional headshots, family portraits, and creative personal branding sessions.",
    image: "https://picsum.photos/seed/portrait-photo/600/800",
    link: "/services/portrait",
  },
  {
    id: "commercial",
    title: "Commercial & Product",
    description: "High-end product photography and lifestyle campaigns to elevate your brand.",
    image: "https://picsum.photos/seed/product-photo/600/800",
    link: "/services/commercial",
  },
  {
    id: "events",
    title: "Event & Wedding",
    description: "Capturing your most important moments with a cinematic and timeless approach.",
    image: "https://picsum.photos/seed/wedding-photo/600/800",
    link: "/services/events",
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-alabaster">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm mb-3 block">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
            Professional Photography Services
          </h2>
          <p className="text-gray-600 text-lg">
            From intimate portraits to large-scale commercial shoots, our studio provides the perfect setting and expertise for your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={service.link}
                className="group block relative overflow-hidden rounded-2xl aspect-[3/4] shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-2xl font-serif text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-6 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="inline-flex items-center text-sm font-medium text-white group-hover:text-primary transition-colors">
                    Explore Service <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-charcoal text-charcoal hover:bg-charcoal hover:text-white rounded-full font-medium transition-colors"
          >
            View Full Portfolio & Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
