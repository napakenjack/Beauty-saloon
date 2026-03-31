import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TrustBar } from "@/components/home/TrustBar";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function AboutPage() {
  return (
    <Layout>
      <PageHeader 
        title="About Lumière" 
        description="A sanctuary of relaxation and transformation. Learn about our philosophy, our standards, and our commitment to you."
      />
      <WhyChooseUs />
      <TrustBar />
      <FinalCTA />
    </Layout>
  );
}
