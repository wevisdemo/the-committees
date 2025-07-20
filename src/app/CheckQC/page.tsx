import CommiteeOpenData from "@/components/CheckQC/CommiteeOpenData";
import CommiteeSurvey from "@/components/CheckQC/CommiteeSurvey";
import IntroLandingPage from "@/components/CheckQC/IntroLandingPage";
import SurveyPage from "@/components/CheckQC/SurveyPage";
import React from "react";

const CheckQC = () => {
  return (
    <div
      className="bg-[#F3CDAA] text-[#2322BC]"
      id="check-qc"
      style={{ minHeight: "100vh" }}
    >
      <IntroLandingPage />
      <SurveyPage />
      <CommiteeSurvey />
      <CommiteeOpenData />
    </div>
  );
};

export default CheckQC;
