import { ContactCta } from "./components/contact-cta";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HeroCarousel } from "./components/hero-carousel";
import { ServicesSection } from "./components/services-section";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroCarousel />
        <ServicesSection />
        <ContactCta />
      </main>

      <Footer />
    </>
  );
}
