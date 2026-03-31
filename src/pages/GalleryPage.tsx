import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/layout/PageHeader";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function GalleryPage() {
  return (
    <Layout>
      <PageHeader 
        title="Our Work" 
        description="Explore our portfolio of moments, from flawless portraits to intricate commercial shoots."
      />
      <GalleryGrid />
      <FinalCTA />
    </Layout>
  );
}
