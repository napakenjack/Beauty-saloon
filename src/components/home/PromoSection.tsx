import { Link } from "react-router-dom";

export function PromoSection() {
  return (
    <section className="py-24 bg-blush">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-primary-dark font-medium tracking-widest uppercase text-sm mb-4 block">
          Welcome Offer
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
          First Visit? Enjoy a Complimentary Retouching Upgrade
        </h2>
        <p className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto">
          Book any portrait or commercial session as a new client and receive our signature high-end retouching on 3 extra photos (valued at $150) on us.
        </p>
        <Link
          to="/book"
          className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-white hover:bg-charcoal/90 rounded-full font-medium transition-colors"
        >
          Claim Your Offer & Book
        </Link>
      </div>
    </section>
  );
}
