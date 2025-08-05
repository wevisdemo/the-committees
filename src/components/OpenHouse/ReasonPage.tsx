"use client";
import React from "react";
import Image from "next/image";
import openhouse_02 from "assets/images/openhouse_02.png";
import title_openhouse from "assets/images/title_openhouse.png";
import pass from "assets/images/pass.png";
import bg_openhouse from "assets/images/bg_openhouse.png";
import bg_overlay from "assets/images/bg_overlay.png";
import openhouse from "assets/images/openhouse.png";

const ReasonPage = () => {
  return (
    <div className=" white_manu ">
      <div className="  bg-[#AAE4CD] flex-col overflow-hidden pt-[67px] ">
        <div className=" max-w-[275px] mx-auto mt-6 flex flex-col  relative px-3 py-5 border border-[#2322BC] rounded-xl ">
          <div className=" text-white z-40">
            <Image
              src={title_openhouse}
              alt="Background"
              className=" max-w-[113px] md:max-w-[150px]  z-10 mx-auto"
            />
          </div>
          <div className=" absolute z-10   inset-0 bg-[#2322BC] opacity-50 rounded-xl"></div>
          <Image
            src={openhouse_02}
            alt="Background"
            className=" max-w-[229px]  mt-3 inline-block  mix-blend-darken  z-0"
          />
        </div>
        <Image
          src={pass}
          alt="Background"
          className=" max-w-[72px]  z-10 mx-auto"
        />
        <div className=" w-full relative">
          <div>
            <Image
              src={openhouse}
              alt="Background"
              className=" w-[103px]  md:w-[200px] mt-5  z-50 mx-auto absolute top-[30%] left-[50%] translate-x-[-50%]"
            />
          </div>
          <Image
            src={bg_openhouse}
            alt="Background"
            className=" w-full mt-5  z-10 mx-auto  "
          />
          <Image
            src={bg_overlay}
            alt="Background"
            className=" w-[100%] mt-5  z-10 mx-auto absolute inset-0 top-[30%] left-[0%] scale-[1.1]"
          />
        </div>
      </div>
      <div className="bg-[#2322BC] pb-5 text-center relative  z-50 text-white">
        <p className=" b3">
          การติดตามว่า กมธ.
          <br /> กำลังผลักดันหรือให้ความสำคัญ
          <br />
          กับเรื่องอะไรบ้างนั้นจึงสำคัญ
        </p>
        <p className=" b3 font-bold mt-2 ">
          หรือคุณพร้อมจะปล่อยให้เขาทำงาน
          <br /> โดยที่คุณไม่ทราบว่าทำเรื่องอะไรอยู่
          <br />
          และคุ้มค่าหรือไม่ มากแค่ไหน ?
        </p>
      </div>
    </div>
  );
};

export default ReasonPage;
