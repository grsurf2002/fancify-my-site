import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import WhatToExpectSection from "@/components/WhatToExpectSection";
import WhoWeCoachSection from "@/components/WhoWeCoachSection";
import OurMethodSection from "@/components/OurMethodSection";
import ResultsSection from "@/components/ResultsSection";
import TeamSection from "@/components/TeamSection";
import SessionTypesSection from "@/components/SessionTypesSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocalInfoSection from "@/components/LocalInfoSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyChooseUsSection />
      <WhatToExpectSection />
      <WhoWeCoachSection />
      <OurMethodSection />
      <ResultsSection />
      <TeamSection />
      <SessionTypesSection />
      <ReviewsSection />
      <FAQSection />
      <LocalInfoSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
