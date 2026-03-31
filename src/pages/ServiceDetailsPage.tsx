import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { FinalCTA } from "@/components/home/FinalCTA";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const serviceDetails: Record<string, { title: string, description: string, image: string, price: string, duration: string, details: string[] }> = {
  "portrait": {
    title: "Portrait Photography",
    description: "Professional headshots, family portraits, and creative personal branding sessions.",
    image: "https://picsum.photos/seed/portrait-photo/1200/600",
    price: "From $250",
    duration: "1 - 3 hours",
    details: [
      "Pre-shoot consultation & moodboard",
      "Multiple outfit changes",
      "Professional lighting & backdrop setup",
      "High-resolution retouched digital files",
      "Online gallery for viewing and selection"
    ]
  },
  "commercial": {
    title: "Commercial & Product",
    description: "High-end product photography and lifestyle campaigns to elevate your brand.",
    image: "https://picsum.photos/seed/product-photo/1200/600",
    price: "From $500",
    duration: "Half Day / Full Day",
    details: [
      "Brand strategy & creative direction",
      "Studio or on-location shooting",
      "Advanced product styling & propping",
      "Commercial usage rights & licensing",
      "High-end retouching & color grading"
    ]
  },
  "events": {
    title: "Event & Wedding",
    description: "Capturing your most important moments with a cinematic and timeless approach.",
    image: "https://picsum.photos/seed/wedding-photo/1200/600",
    price: "From $1200",
    duration: "4 - 12 hours",
    details: [
      "Comprehensive event coverage",
      "Candid and posed photography",
      "Second shooter available upon request",
      "Curated digital album with hundreds of photos",
      "Optional premium photo book printing"
    ]
  }
};

export default function ServiceDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const service = id ? serviceDetails[id] : null;

  if (!service) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-serif text-charcoal mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you are looking for doesn't exist or has been moved.</p>
          <Link to="/services" className="text-primary hover:underline flex items-center">
            <ArrowLeft size={16} className="mr-2" /> Back to Services
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader 
        title={service.title} 
        description={service.description}
      />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-gray-500 hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to all services
          </Link>
          
          <div className="rounded-3xl overflow-hidden mb-16 aspect-[21/9]">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif text-charcoal mb-6">About This Service</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {service.description} Experience a professional photoshoot tailored to your unique vision. Our team uses top-tier equipment and creative direction to ensure every shot is picture-perfect.
              </p>
              
              <h3 className="text-2xl font-serif text-charcoal mb-6">What's Included</h3>
              <ul className="space-y-4 mb-8">
                {service.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-4 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="bg-alabaster p-8 rounded-3xl sticky top-32">
                <h3 className="text-2xl font-serif text-charcoal mb-6">Service Details</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="text-gray-500">Starting Price</span>
                    <span className="font-medium text-charcoal">{service.price}</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-4">
                    <span className="text-gray-500">Duration</span>
                    <span className="font-medium text-charcoal">{service.duration}</span>
                  </div>
                </div>
                
                <Link
                  to="/book"
                  className="w-full block text-center px-8 py-4 bg-charcoal text-white rounded-full font-medium hover:bg-charcoal/90 transition-colors"
                >
                  Book Session
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <FinalCTA />
    </Layout>
  );
}
