import React from "react";

import HeroSection from "../../organisms/heroSection/HeroSection";
import HowItWorksSection from "../../organisms/howItWorksSection/HowItWorksSection";
import BenefitsSection from "../../organisms/benefitsSection/BenefitsSection";
import InterviewersShowcase from "../../organisms/interviewersShowcase/InterviewersShowcase";
import Footer from "../../organisms/footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />

      <HowItWorksSection />

      <BenefitsSection />

      <InterviewersShowcase />

      <Footer />
    </div>
  );
};

export default LandingPage;
