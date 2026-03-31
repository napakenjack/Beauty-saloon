import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";

export default function CancellationPolicyPage() {
  return (
    <Layout>
      <PageHeader 
        title="Cancellation Policy" 
        description="Our guidelines regarding session changes and cancellations."
      />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-gray">
          <p>At Lumière Studio, we value your time and ours. We understand that sometimes schedule adjustments are necessary; therefore, we respectfully request at least 24 hours notice for cancellations.</p>
          
          <h2>24-Hour Notice</h2>
          <p>Please notify us at least 24 hours in advance if you need to cancel or reschedule your session. This allows us the opportunity to fill that session time with another client.</p>
          
          <h2>Late Cancellations</h2>
          <p>Cancellations made less than 24 hours before the scheduled session time will be subject to a charge equal to 50% of the reserved service amount.</p>
          
          <h2>No-Shows</h2>
          <p>"No-shows" will be charged 100% of the reserved service amount. Multiple no-shows may result in the inability to book future sessions without a non-refundable deposit.</p>
          
          <h2>Late Arrivals</h2>
          <p>If you arrive more than 15 minutes late for your session, we may need to reschedule your service to avoid disrupting the sessions of other clients. In this case, the late cancellation fee will apply.</p>
          
          <h2>How to Cancel</h2>
          <p>To cancel or reschedule, please call us at (555) 123-4567 or use the link provided in your session confirmation email/text.</p>
        </div>
      </section>
    </Layout>
  );
}
