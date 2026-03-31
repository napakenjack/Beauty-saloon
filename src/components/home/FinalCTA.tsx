export function FinalCTA() {
  return (
    <section id="book" className="py-32 bg-charcoal text-white text-center relative overflow-hidden">
      {/* Subtle Background Pattern/Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal to-black opacity-50" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://picsum.photos/seed/texture/1920/1080?blur=10')] opacity-10 mix-blend-overlay pointer-events-none" referrerPolicy="no-referrer" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
          Your Best Self Awaits
        </span>
        <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
          Ready for a Refresh?
        </h2>
        <p className="text-xl text-gray-300 mb-12 font-light max-w-2xl mx-auto">
          Secure your time today and let our experts craft a look that enhances your natural beauty and confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="https://booking-software-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors text-lg shadow-lg shadow-primary/20"
          >
            Book Appointment Online
          </a>
          <span className="text-gray-400 italic">or</span>
          <a
            href="tel:+1234567890"
            className="w-full sm:w-auto px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-colors text-lg"
          >
            Call (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
}
