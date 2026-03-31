import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function FAQPage() {
  return (
    <Layout>
      <PageHeader 
        title="Frequently Asked Questions" 
        description="Everything you need to know before your visit to ensure a seamless and relaxing experience."
      />
      <FAQ />
      <FinalCTA />
    </Layout>
  );
}
