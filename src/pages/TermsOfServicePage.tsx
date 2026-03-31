import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";

export default function TermsOfServicePage() {
  return (
    <Layout>
      <PageHeader 
        title="Terms of Service" 
        description="The rules and guidelines for using our website and services."
      />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-gray">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing our website or booking our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          
          <h2>2. Booking and Sessions</h2>
          <p>All sessions are subject to availability. We reserve the right to refuse service to anyone for any reason at any time.</p>
          
          <h2>3. Pricing and Payment</h2>
          <p>Prices for our services are subject to change without notice. Payment is due at the time of service unless otherwise agreed upon.</p>
          
          <h2>4. Intellectual Property</h2>
          <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary (including but not limited to intellectual property) rights.</p>
          
          <h2>5. Limitation of Liability</h2>
          <p>Lumière Studio shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>
        </div>
      </section>
    </Layout>
  );
}
