import React from "react";
import Landing from "@/components/openhouse/Landing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open House | The Committees",
};

const OpenHouse = () => {
  return (
    <>
      <Landing />
    </>
  );
};

export default OpenHouse;
