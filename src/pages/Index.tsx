import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import TeamSection from "@/components/TeamSection";
import VideoSection from "@/components/VideoSection";
import MissionSection from "@/components/MissionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <VideoSection />
      <MissionSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
