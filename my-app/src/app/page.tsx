import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import WelcomeSection from "../components/WelcomeSection";
import ReservationSection from "../components/ReservationSection";
import MenusSection from "../components/MenusSection";
import AdditionalImageSection from "../components/AdditionalImageSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <WelcomeSection />
      <ReservationSection />
      <MenusSection />
      <AdditionalImageSection />
      <Footer />
    </main>
  );
}