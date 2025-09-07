"use client";

import Image from "next/image";
import React from "react";
import openhouse_bg from "assets/images/openhouse_bg.png";
import batch_openhouse from "assets/images/batch_openhouse.png";
function IntroOpenHouse() {
  return (
    <div className="component relative mt-[-67px]">
      <Image
        src={openhouse_bg}
        alt="Background"
        className="absolute top-0 left-[50%] translate-x-[-50%]  h-full object-cover "
      />
      <Image
        src={batch_openhouse}
        alt="Background"
        className=" max-w-[168px] md:max-w-[267px] z-10  inline-block mr-2"
      />
    </div>
  );
}

export default IntroOpenHouse;
