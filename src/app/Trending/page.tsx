import IntroOpenTrending from "@/components/Trending/IntroOpenTrending";
import Stucture from "@/components/Trending/Stucture";
import InDetailsPage from "@/components/Trending/InDetailsPage";
import React from "react";
import LastPage from "@/components/Trending/LastPage";

const Trending = () => {
  return (
    <>
      <IntroOpenTrending />
      <Stucture />
      <InDetailsPage />
      <LastPage />
    </>
  );
};

export default Trending;
