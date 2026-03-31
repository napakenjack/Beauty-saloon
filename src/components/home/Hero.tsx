import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/salon-interior/1920/1080?blur=2"
          alt="Elegant salon interior"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-charcoal/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-alabaster via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <span className="block text-sm font-medium tracking-widest uppercase text-white/90 mb-4">
            Accessible Luxury in Austin
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-tight mb-6">
            Elevate Your Everyday Elegance
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto">
            Experience personalized beauty treatments designed to enhance your natural confidence, delivered by master stylists in a sanctuary of relaxation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#book"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors flex items-center justify-center group"
            >
              Book Your Transformation
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-medium hover:bg-white/20 transition-colors flex items-center justify-center"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
