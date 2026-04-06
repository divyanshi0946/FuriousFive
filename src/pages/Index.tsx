import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FlexibleStudySection from "@/components/FlexibleStudySection";
import RewardSystemSection from "@/components/RewardSystemSection";
import VoucherStoreSection from "@/components/VoucherStoreSection";
import PrivacySection from "@/components/PrivacySection";
import DashboardPreview from "@/components/DashboardPreview";
import WhyBetterSection from "@/components/WhyBetterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <SolutionSection />
    <HowItWorksSection />
    <FlexibleStudySection />
    <RewardSystemSection />
    <VoucherStoreSection />
    <PrivacySection />
    <DashboardPreview />
    <WhyBetterSection />
    <TestimonialsSection />
    <FAQSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
