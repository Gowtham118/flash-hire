import React from "react";

import HeroSection from "../../organisms/heroSection/HeroSection";
import HowItWorksSection from "../../organisms/howItWorksSection/HowItWorksSection";
import BenefitsSection from "../../organisms/benefitsSection/BenefitsSection";
import InterviewersShowcase from "../../organisms/interviewersShowcase/InterviewersShowcase";
import Footer from "../../organisms/footer/Footer";

const LandingPage = ({ isEmployer, setIsEmployer }) => {
  return (
    <div>
      <HeroSection isEmployer={isEmployer} setIsEmployer={setIsEmployer} />

      <HowItWorksSection />

      <BenefitsSection />

      <InterviewersShowcase />

      <Footer />
    </div>
  );
};

export default LandingPage;
