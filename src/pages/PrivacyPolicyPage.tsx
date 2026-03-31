import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <PageHeader 
        title="Privacy Policy" 
        description="How we collect, use, and protect your personal information."
      />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-gray">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, such as when you book a session, create an account, or contact us for support. This may include your name, email address, phone number, and payment information.</p>
          
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to communicate with you about your sessions and our offerings.</p>
          
          <h2>3. Information Sharing</h2>
          <p>We do not share your personal information with third parties except as necessary to provide our services (e.g., payment processors, booking software providers) or as required by law.</p>
          
          <h2>4. Data Security</h2>
          <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
          
          <h2>5. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at hello@lumierestudio.com.</p>
        </div>
      </section>
    </Layout>
  );
}
