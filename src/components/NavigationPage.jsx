"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ending01 from "assets/images/ending01.png";
import ending02 from "assets/images/ending02.png";
import navigation_01 from "assets/images/navigation_01.png";
import navigation_02 from "assets/images/navigation_02.png";
import navigation_03 from "assets/images/navigation_03.png";
import { Plus } from "lucide-react";

const NavigationPage = ({ setOpen }) => {
  const navigationRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (!navigationRef.current) return;
      const rect = navigationRef.current.getBoundingClientRect();
      const visible =
        rect.top + rect.height / 2 < window.innerHeight && rect.bottom > 0;
      setIsVisible(visible);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      setOpen(false);
    };
  }, []);

  return (
    <div
      ref={navigationRef}
      id="navigation"
      className=" flex min-h-screen items-center text-center pt-20 md:pt-32 flex-col text-[#2322BC]  relative translate-y-[67px] bg-[#2322BC] overflow-y-hidden"
    >
      <Image
        src={ending02}
        alt="Background"
        className={`absolute top-[0px] right-0 scale-[110%] md:scale-[105%] w-[50%] h-full transition-transform duration-700 ${
          !isVisible ? "translate-x-[110%]" : "translate-x-[0%]"
        }`}
      />
      <Image
        src={ending01}
        alt="Background"
        className={`absolute top-[-20px] left-0 scale-[110%] md:scale-[105%] rotate-2 z-10 w-[50%] h-full transition-transform duration-700 ${
          !isVisible ? "-translate-x-[110%]" : "translate-x-[0%]"
        }`}
      />
      <p className=" b2 z-10 font-bold">
        ชวนจับจ้อง ส่องติดตาม
        <br /> เกิดอะไรขึ้นบ้างภายในห้อง กมธ.
      </p>
      <p
        className={` mt-3 b5  border border-dashed rounded border-[#2322BC] z-10 p-4 ${
          isVisible ? "bg-[#FEF5CD] transition-all duration-300" : ""
        }`}
      >
        <b>Disclaimer:</b> ข้อมูลในงานชิ้นนี้ศึกษาเฉพาะ กมธ. สามัญ
        <br />
        ในสมัยสภาผู้แทนราษฎรไทย ชุดที่ 26 และวุฒิสภา ชุดที่ 13
        <br />
        อัปเดตข้อมูลเมื่อ 10 มิถุนายน 2568
      </p>
      <div className=" mt-3 underline z-10 b4 mb-5 ">กดเลือกสำรวจเนื้อหา</div>
      <div className=" flex space-x-3 z-10  overflow-hidden">
        <Link href="/openhouse">
          <Image
            src={navigation_01}
            alt="Background"
            className=" max-w-[95px] md:max-w-[142px] "
          />
        </Link>
        <Link href="/checkqc">
          <Image
            src={navigation_02}
            alt="Background"
            className="  max-w-[95px] md:max-w-[142px]"
          />
        </Link>
        <Link href="/trending">
          <Image
            src={navigation_03}
            alt="Background"
            className=" max-w-[95px] md:max-w-[142px]"
          />
        </Link>
      </div>
      <button
        onClick={setOpen}
        className=" cursor-pointer my-12 bg-[#2322BC] border border-white rounded z-[10] text-white b4 px-6 py-2"
      >
        ขอรู้จัก กมธ. ก่อนเตง <Plus className="w-[15px]  inline-block" />
      </button>
    </div>
  );
};

export default NavigationPage;
