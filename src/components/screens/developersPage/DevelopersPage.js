import React from "react";
import CandidateBenefits from "../../organisms/candidatesBenefits/CandidateBenefits";
import HeroSection from "../../organisms/heroSection/HeroSection";
import PaymentDetails from "../../organisms/paymentDetailsSection/PaymentDetails";
import InterviewersShowcase from "../../organisms/interviewersShowcase/InterviewersShowcase";
import Footer from "../../organisms/footer/Footer";
import PlanToActionBanner from "../../organisms/planToActionBanner/PlanToActionBanner";

const DevelopersPage = ({ isEmployer, setIsEmployer }) => {
  return (
    <div>
      <HeroSection isEmployer={isEmployer} setIsEmployer={setIsEmployer} />
      <CandidateBenefits />
      <PaymentDetails />
      <InterviewersShowcase />
      <PlanToActionBanner />
      <Footer />
    </div>
  );
};

export default DevelopersPage;
