"use client";

import Image from "next/image";
import React from "react";

import prefix from "../../public/assets/images/prefix.png";
import people_01 from "../../public/assets/images/people_01.png";
import people_02 from "../../public/assets/images/people_02.png";
import people_03 from "../../public/assets/images/people_03.png";

const CardSlide = () => {
  return (
    <div className=" h-full">
      <div className="component card-sticky">
        <div
          style={{ rotate: "2.84deg" }}
          className="  bg-[#E2822B] flex justify-between text-start flex-col b4 w-[400px] rounded h-[250px] py-5 px-6"
        >
          <div>
            <Image
              src={prefix}
              alt="Background"
              className=" max-w-[30px] inline-block mr-2"
            />
            หาก สส. รัฐบาลนั่งประธาน กมธ. ตรงกระทรวงที่ได้เป็น
            <br /> เจ้ากระทรวง
            <b> อาจทำให้กลไกตรวจสอบถ่วงโดยสภาฯ มีปัญหา</b> 
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-start b5">
              <p>ชัยธวัช ตุลาธน </p>
              <p>อดีตผู้นำฝ่ายค้าน (4 ก.ย. 66)</p>
            </div>
            <Image src={people_01} alt="Background" className=" max-w-[64px]" />
          </div>
        </div>
      </div>
      <div className="component card-sticky">
        <div
          style={{ rotate: "-3.25deg" }}
          className=" bg-[#FF795B] flex justify-between text-start flex-col b4 w-[400px] rounded h-[250px] py-5 px-6"
        >
          <div>
            <Image
              src={prefix}
              alt="Background"
              className=" max-w-[30px] inline-block mr-2"
            />
            <b>
              ก้าวไกลจะเอา กมธ. ดีๆ ไปหมดไม่ได้ สส. ทุกพรรค
              <br /> มีโอกาสได้เท่ากัน
            </b>{" "}
            ได้คะแนนอันดับหนึ่งไม่เท่ากับมีสิทธิ
            <br /> ได้เลือกก่อน
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-start b5">
              <p>พิเชษฐ์ เชื้อเมืองพาน</p>
              <p>รองประธานสภาผู้แทนราษฎรคนที่ 1 </p>
              <p>(5 ก.ย. 66)</p>
            </div>
            <Image src={people_02} alt="Background" className=" max-w-[64px]" />
          </div>
        </div>
      </div>
      <div className="component card-sticky">
        <div
          style={{ rotate: "5.72deg" }}
          className=" bg-[#E2822B] flex justify-between text-start flex-col b4 w-[400px] rounded h-[250px] py-5 px-6"
        >
          <div>
            <Image
              src={prefix}
              alt="Background"
              className=" max-w-[30px] inline-block mr-2"
            />
            <b>
              กมธ. งบประมาณฯ และป้องกันและปราบปราม
              <br /> การทุจริตฯ
            </b>{" "}
            เป็นเครื่องมือตรวจสอบถ่วงดุล จึงต้องเป็น <br /> หน้าที่ฝ่ายค้าน
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-start b5">
              <p>ปกรณ์วุฒิ อุดมพิพัฒน์สกุล</p>
              <p> สส. พรรคประชาชน (5 ก.ย. 66)</p>
            </div>
            <Image src={people_03} alt="Background" className=" max-w-[64px]" />
          </div>
        </div>
      </div>
      <div className="component card-sticky">
        <div
          style={{ rotate: "0.84deg" }}
          className=" bg-[#FF795B] flex justify-between text-start flex-col b4 w-[400px] rounded h-[250px] py-5 px-6"
        >
          <div className=" font-bold">
            <Image
              src={prefix}
              alt="Background"
              className=" max-w-[30px] inline-block mr-2"
            />
            บทบาทประธาน กมธ. งบประมาณฯ และ
            <br /> ป้องกันและ ปราบปรามการทุจริตฯ ไม่ได้เจาะจง เป็นของใครก็ได้
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-start b5">
              <p>พิเชษฐ์ เชื้อเมืองพาน</p>
              <p>รองประธานสภาผู้แทนราษฎรคนที่ 1 </p>
              <p>(5 ก.ย. 66)</p>
            </div>
            <Image src={people_02} alt="Background" className=" max-w-[64px]" />
          </div>
        </div>
      </div>
      <div className="component card-sticky">
        <div
          style={{ rotate: "-3.93deg" }}
          className=" bg-[#E2822B] flex justify-between text-start flex-col b4 w-[400px] rounded h-[250px] py-5 px-6"
        >
          <div className=" font-bold">
            <Image
              src={prefix}
              alt="Background"
              className=" max-w-[30px] inline-block mr-2"
            />
            การโยน กมธ. ที่ไม่มีใครเลือกมาให้ ก้าวไกลอาจไม่มี
            <br />
            ศักยภาพพอในประเด็นนั้น หากต้องรับมาทำจริง
            <br /> กลไกตรวจสอบจะอ่อนแอ น
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-start b5">
              <p>ปกรณ์วุฒิ อุดมพิพัฒน์สกุล</p>
              <p> สส. พรรคประชาชน (5 ก.ย. 66)</p>
            </div>
            <Image src={people_03} alt="Background" className=" max-w-[64px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlide;
