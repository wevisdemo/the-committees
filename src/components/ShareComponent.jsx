"use client";

import Image from "next/image";
import React from "react";
import {
  FacebookShareButton,
  LineShareButton,
  TwitterShareButton,
} from "react-share";
import share from "assets/images/share.svg";
import fb from "assets/images/facebook.svg";
import line from "assets/images/lineicon.svg";
import x from "assets/images/xicon.svg";

const ShareComponent = () => {
  const shareUrl = "https://wevisdemo.github.io/the-committees/";
  const title =
    "แชร์ให้คนอื่น ๆ มาเรียนรู้และตรวจสอบผลักดันเรื่อง กมธ. มากขึ้น";

  return (
    <div className="bg-[#2322BC] p-6 mt-9 mb-6 rounded-xl">
      <p className="text-white b5 text-center mb-4">{title}</p>
      <div className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-white b5">Share</span>
          <Image src={share} alt="Background" className=" w-[25px]" />
        </div>
        <FacebookShareButton url={shareUrl} quote={title}>
          <Image src={fb} alt="Facebook" className=" w-[25px]" />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={title}>
          <Image src={x} alt="Twitter" className=" w-[25px]" />
        </TwitterShareButton>
        <LineShareButton url={shareUrl} title={title}>
          <Image src={line} alt="Line" className=" w-[25px]" />
        </LineShareButton>
      </div>
    </div>
  );
};

export default ShareComponent;
