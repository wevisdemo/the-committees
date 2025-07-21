"use client";

import Link from "next/dist/client/link";
import React from "react";
import Image from "next/image";
import last_qc from "assets/images/last_qc.png";

const LastPage = () => {
  return (
    <div className="component bg-[#F3CDAA] text-[#2322BC] relative flex flex-col items-center justify-center space-y-4">
      <Image
        src={last_qc}
        alt="Background"
        className="absolute top-0 left-[50%] translate-x-[-50%]  h-full "
      />
      <p className="b2 z-10">
        กมธ. จึงไม่ใช่เรื่องไกลตัว
        <br /> แต่เป็นกลไกที่กระทบชีวิตเราโดยตรง
      </p>
      <p className="h6  font-black z-10">
        แล้ว กมธ. แบบไหน
        <br /> ที่คุณอยากเห็น ?
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
