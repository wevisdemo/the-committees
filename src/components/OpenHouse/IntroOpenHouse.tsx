"use client";

import Image from "next/image";
import React from "react";
import openhouse_bg from "../../../public/assets/images/openhouse_bg.png";
import batch_openhouse from "../../../public/assets/images/batch_openhouse.png";
function IntroOpenHouse() {
  return (
    <div className="component relative">
      <Image
        src={openhouse_bg}
        alt="Background"
        className="absolute top-0 left-[50%] translate-x-[-50%]  h-full "
      />
      <Image
        src={batch_openhouse}
        alt="Background"
        className=" max-w-[267px] z-10  inline-block mr-2"
      />
    </div>
  );
}

export default IntroOpenHouse;
