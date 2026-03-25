import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import WhatToExpectSection from "@/components/WhatToExpectSection";
import WhoWeCoachSection from "@/components/WhoWeCoachSection";

import ResultsSection from "@/components/ResultsSection";
import TeamSection from "@/components/TeamSection";
import SessionTypesSection from "@/components/SessionTypesSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocalInfoSection from "@/components/LocalInfoSection";

import FinalCTASection from "@/components/FinalCTASection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import VideoSection from "@/components/VideoSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <WhyChooseUsSection />
      <WhatToExpectSection />
      <WhoWeCoachSection />
      
      <ResultsSection />
      <SessionTypesSection />
      
      <ReviewsSection />
      <FAQSection />
      <LocalInfoSection />
      <VideoSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
