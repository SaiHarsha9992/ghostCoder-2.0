'use client';
import AboutSection from "@/components/About";
import BecomeAGhostCoder from "@/components/BecomeAGhostCoder";
import CommunitySection from "@/components/Community";
import ContactSection from "@/components/ContactUs";
import FeaturesSection from "@/components/Features";
import FooterSection from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import './globals.css';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CommunitySection />
      <BecomeAGhostCoder />
      <ContactSection />
    </>
  );
}
