import CommiteeOpenData from "@/components/checkqcc/CommiteeOpenData";
import CommiteeSurvey from "@/components/checkqcc/CommiteeSurvey";
import IntroLandingPage from "@/components/checkqcc/IntroLandingPage";
import LastPage from "@/components/checkqcc/LastPage";
import SurveyPage from "@/components/checkqcc/SurveyPage";
import React from "react";
import BenefitPage from "@/components/checkqcc/BenefitPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check QC | The Committees",
};

const CheckQC = () => {
  return (
    <div
      className="bg-[#F3CDAA] text-[#2322BC] overflow-x-hidden mt-[-67px]"
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
