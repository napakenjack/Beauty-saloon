import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TeamPreview } from "@/components/home/TeamPreview";
import { Testimonials } from "@/components/home/Testimonials";
import { PromoSection } from "@/components/home/PromoSection";
import { BookingSteps } from "@/components/home/BookingSteps";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhyChooseUs />
      <TeamPreview />
      <Testimonials />
      <PromoSection />
      <BookingSteps />
      <FAQ />
      <FinalCTA />
    </Layout>
  );
}
