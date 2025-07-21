"use client";

import Image from "next/image";
import React from "react";
import CardSlide from "./CardSlide";
import NavigationPage from "./NavigationPage";
import landing_01 from "assets/images/landing_01.png";
import landing_02 from "assets/images/landing_02.png";
import landing_03 from "assets/images/landing_03.png";
import landing_toppic from "assets/images/landing_toppic.png";

function IntroLandingPage() {
  return (
    <>
      <div className=" relative component h6 bg-[#FEF5CD] text-[#2322BC] font-black">
        <Image
          src={landing_01}
          alt="Background"
          className="absolute top-0 left-[50.5%] translate-x-[-49%]  h-full "
        />
        <div className=" relative z-10 flex items-center justify-center">
          เค้าว่ากันว่า
          <br /> สภาใหญ่ใช้ออกสื่อแต่ดีลลับจับมือ
          <br />
          คือการประชุมคณะกรรมาธิการ ?
        </div>
      </div>
      <div className="component relative flex flex-col ">
        <Image
          src={landing_03}
          alt="Background"
          className="absolute top-0 right-[0]  w-[50%]  h-full "
        />
        <Image
          src={landing_toppic}
          alt="Background"
          className=" max-w-[482px]"
        />
        <Image
          src={landing_02}
          alt="Background"
          className="absolute top-0 left-[0] z-10  w-[50%]  h-full "
        />
        <div>
          <p className="h7 mt-3 font-bold">
            จับจ้อง ส่องติดตาม
            <br /> ‘คณะกรรมาธิการ’ รัฐสภา
          </p>
          <p className="b3 mt-3">
            ที่คนเขาแอบกระซิบกันว่าการทำงาน
            <br /> ที่แท้จริงของ สส. และ สว. เกิดขึ้นที่นี่ ?!
          </p>
        </div>
      </div>
      <div className=" component b2 flex-col">
        <div>
          <span className=" font-bold">
            หากย้อนดูศึกชิงเก้าอี้
            <br /> ประธานคณะกรรมาธิการ
          </span>
          <br /> หรือ <span className=" font-bold">{`'กมธ.'`}</span> ระหว่าง
        </div>
        <div>
          <div className="h5 mt-5 bg-[#E2822B] font-bold py-2 px-4 rotate-3">
            พรรคก้าวไกล
          </div>
          <p className="b2">vs.</p>
          <div className="h5 mt-3 bg-[#FF795B] font-bold py-2 px-4 -rotate-6">
            พรรคเพื่อไทย
          </div>
          <p className="b5 mt-4">ในช่วงเดือนกันยายน 2566</p>
        </div>
      </div>
      <CardSlide />
      <div className="component b2">
        <div>
          ศึกแห่งศักดิ์ศรีนี้สะท้อนให้เห็นอย่างชัดเจนว่า
          <br />  กมธ. มีความสำคัญสุด ๆ{" "}
          <b>
            ในฐานะกลไก
            <br /> ที่ตอบสนองภารกิจนิติบัญญัติ รวมถึง
            <br /> การผลักดันวาระต่าง ๆ (อันซ่อนเร้น)
            <br /> ที่พรรคการเมืองต้องการให้เกิดขึ้นในรัฐสภา
          </b>
        </div>
      </div>
      <NavigationPage />
    </>
  );
}

export default IntroLandingPage;
