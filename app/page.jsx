'use client';
import AboutSection from "@/components/About";
import BecomeAGhostCoder from "@/components/BecomeAGhostCoder";
import CommunitySection from "@/components/Community";
import ContactSection from "@/components/ContactUs";
import FeaturesSection from "@/components/Features";
import FooterSection from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavbarSection from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <NavbarSection />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CommunitySection />
      <BecomeAGhostCoder />
      <ContactSection />
      <FooterSection />
    </>
  );
}
