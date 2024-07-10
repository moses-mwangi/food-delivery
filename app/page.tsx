import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import HeroSection from "./componenets/HeroSection";
import FooterSection from "./componenets/FooterSection";
import StoresSection from "./componenets/StoresSection";
import Partner from "./componenets/Partner";
import Testimonials from "./componenets/Testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StoresSection />
      <Testimonials />
      <Partner />
      <FooterSection />
    </main>
  );
}
