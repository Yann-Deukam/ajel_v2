import { BusinessShowcase } from "@/sections/BusinessShowcase";
import Faqs from "@/sections/Faqs";
import Filiale from "@/sections/Filiale";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <BusinessShowcase />
      <Services />
      <Filiale />
      <Faqs />
    </>
  );
}
