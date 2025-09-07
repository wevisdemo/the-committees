import CommiteeOpenData from "@/components/checkqc/CommiteeOpenData";
import CommiteeSurvey from "@/components/checkqc/CommiteeSurvey";
import IntroLandingPage from "@/components/checkqc/IntroLandingPage";
import LastPage from "@/components/checkqc/LastPage";
import SurveyPage from "@/components/checkqc/SurveyPage";
import React from "react";
import BenefitPage from "@/components/checkqc/BenefitPage";
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
