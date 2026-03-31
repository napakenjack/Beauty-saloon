import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { Testimonials } from "@/components/home/Testimonials";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function ReviewsPage() {
  return (
    <Layout>
      <PageHeader 
        title="Client Love" 
        description="Read what our clients have to say about their experiences at Lumière Studio."
      />
      <Testimonials />
      <FinalCTA />
    </Layout>
  );
}
