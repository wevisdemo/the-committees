"use client";

import Link from "next/dist/client/link";
import React from "react";
import Image from "next/image";
import last_openhouse from "assets/images/last_openhouse.png";

const LastPage = () => {
  return (
    <div className="component bg-[#AAE4CD] text-[#2322BC] relative flex flex-col items-center justify-center space-y-4">
      <Image
        src={last_openhouse}
        alt="Background"
        className="absolute top-0 left-[50%] translate-x-[-50%]  h-full object-cover "
      />
      <p className="b2 z-10">
        จากข้อมูล
        <br /> ที่เราชวนคุณตรวจสอบ
        <br />
        และเปรียบเทียบนี้
      </p>
      <p className="b2 font-bold z-10">
        คุณคิดว่าเรื่องที่ กมธ. ‘โฟกัส’
        <br /> กับ ‘อำนาจหน้าที่ที่บอกเล่า’ 
        <br />
        สอดคล้องกันมากน้อยแค่ไหน ?
      </p>
      <Link
        href="/#navigation"
        className="bg-[#FEF5CD] z-10  border border-[#2322BC] px-4 py-2 rounded-full hover:bg-[#E6E6E6] transition-colors"
      >
        กลับไปที่สารบัญ
      </Link>
    </div>
  );
};

export default LastPage;
