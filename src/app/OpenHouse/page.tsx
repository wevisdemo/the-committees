import IntroOpenHouse from "@/components/OpenHouse/IntroOpenHouse";
import LastPage from "@/components/OpenHouse/LastPage";
import ReasonPage from "@/components/OpenHouse/ReasonPage";
import SurveyPage from "@/components/OpenHouse/SurveyPage";
import React from "react";

const OpenHouse = () => {
  return (
    <>
      <IntroOpenHouse />
      <ReasonPage />
      <SurveyPage />
      <LastPage />
    </>
  );
};

export default OpenHouse;
