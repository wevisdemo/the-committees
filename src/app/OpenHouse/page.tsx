import IntroOpenHouse from "@/components/OpenHouse/IntroOpenHouse";
import LastPage from "@/components/OpenHouse/LastPage";
import ReasonPage from "@/components/OpenHouse/ReasonPage";
import SurveyPage from "@/components/OpenHouse/SurveyPage";
import YearPass from "@/components/OpenHouse/YearPass";
import React from "react";

const OpenHouse = () => {
  return (
    <>
      <IntroOpenHouse />
      <ReasonPage />
      <YearPass />
      <SurveyPage />
      <LastPage />
    </>
  );
};

export default OpenHouse;
