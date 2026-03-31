import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function BookingPage() {
  return (
    <Layout>
      <PageHeader 
        title="Book Your Session" 
        description="Choose your preferred service and time. We look forward to welcoming you to Lumière Studio."
      />
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-alabaster p-8 md:p-12 rounded-3xl text-center">
            <h2 className="text-3xl font-serif text-charcoal mb-6">Online Booking</h2>
            <p className="text-gray-600 mb-8">
              Our online booking system is currently being upgraded to serve you better. 
              Please contact us directly to schedule your session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1234567890"
                className="px-8 py-4 bg-charcoal text-white rounded-full font-medium hover:bg-charcoal/90 transition-colors"
              >
                Call Us: (555) 123-4567
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#20bd5a] transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </Layout>
  );
}
