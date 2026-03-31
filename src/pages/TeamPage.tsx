import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { TeamPreview } from "@/components/home/TeamPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function TeamPage() {
  return (
    <Layout>
      <PageHeader 
        title="Our Specialists" 
        description="Meet the master photographers, directors, and retouchers dedicated to capturing your best moments."
      />
      <TeamPreview />
      <FinalCTA />
    </Layout>
  );
}
