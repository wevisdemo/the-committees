import IntroOpenTrending from "@/components/trendingg/IntroOpenTrending";
import Stucture from "@/components/trendingg/Stucture";
import InDetailsPage from "@/components/trendingg/InDetailsPage";
import React from "react";
import LastPage from "@/components/trendingg/LastPage";
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
