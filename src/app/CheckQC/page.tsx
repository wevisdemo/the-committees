import CommiteeOpenData from "@/components/CheckQC/CommiteeOpenData";
import CommiteeSurvey from "@/components/CheckQC/CommiteeSurvey";
import IntroLandingPage from "@/components/CheckQC/IntroLandingPage";
import LastPage from "@/components/CheckQC/LastPage";
import SurveyPage from "@/components/CheckQC/SurveyPage";
import React from "react";
import BenefitPage from "@/components/CheckQC/BenefitPage";

const CheckQC = () => {
  return (
    <div
      className="bg-[#F3CDAA] text-[#2322BC] overflow-x-hidden"
      id="check-qc"
      style={{ minHeight: "100vh" }}
    >
      <IntroLandingPage />
      <SurveyPage />
      <CommiteeSurvey />
      <CommiteeOpenData />
      <BenefitPage />
      <LastPage />
    </div>
  );
};

export default CheckQC;
