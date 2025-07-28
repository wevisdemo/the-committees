"use client";

import Image from "next/image";
import React from "react";
import landing_trending_bg from "assets/images/landing_trending_bg.png";
import batch_trending from "assets/images/batch_trending.png";
function IntroOpenTrending() {
  return (
    <div className="component relative">
      <Image
        src={landing_trending_bg}
        alt="Background"
        className="absolute top-0 left-[50%] translate-x-[-50%]  h-full object-cover "
      />
      <Image
        src={batch_trending}
        alt="Background"
        className=" max-w-[267px] z-10  inline-block mr-2"
      />
    </div>
  );
}

export default IntroOpenTrending;
