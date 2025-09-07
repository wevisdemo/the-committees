import IntroOpenTrending from "@/components/trending/IntroOpenTrending";
import Stucture from "@/components/trending/Stucture";
import InDetailsPage from "@/components/trending/InDetailsPage";
import React from "react";
import LastPage from "@/components/trending/LastPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trending | The Committees",
};

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
