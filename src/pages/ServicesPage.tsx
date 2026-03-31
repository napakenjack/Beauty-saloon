import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { BookingSteps } from "@/components/home/BookingSteps";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function ServicesPage() {
  return (
    <Layout>
      <PageHeader 
        title="Our Services" 
        description="Discover our comprehensive range of premium photography services, tailored to capture your best moments."
      />
      <ServicesGrid />
      <BookingSteps />
      <FinalCTA />
    </Layout>
  );
}
