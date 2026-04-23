import { AboutSection } from "@/components/home/AboutSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HeroSection } from "@/components/home/HeroSection";
import { WhatsAppBanner } from "@/components/home/WhatsAppBanner";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <AboutSection />
      <FeaturedProducts />
      <WhatsAppBanner />
    </>
  );
}