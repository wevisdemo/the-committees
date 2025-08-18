"use client";

import Image from "next/image";
import React from "react";

import prefix from "assets/images/prefix.png";
import people_01 from "assets/images/people_01.png";
import people_02 from "assets/images/people_02.png";
import people_03 from "assets/images/people_03.png";

const CardSlide = () => {
  return (
    <div className=" h-full white_manu">
      <div className="component card-sticky">
        <div
          style={{ rotate: "2.84deg" }}
          className="  bg-[#E2822B] flex justify-between text-start flex-col b4 w-[300px] md:w-[400px] rounded h-[200px] md:h-[250px] py-5 px-6"
        >
          <div>
            <Image
              src={prefix}
              alt="Background"
              className=" max-w-[30px] inline-block mr-2"
            />
            หาก สส. รัฐบาลนั่งประธาน กมธ. ตรงกระทรวงที่ได้เป็น
            <br className=" hidden md:block" /> เจ้ากระทรวง
            <br className=" md:hidden" />
            <b>
              {" "}
              อาจทำให้กลไกตรวจสอบถ่วงโดยสภาฯ
              <br className=" md:hidden" /> มีปัญหา
            </b>
             
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
          className=" bg-[#FF795B] flex justify-between text-start flex-col b4 w-[300px] md:w-[400px] rounded h-[200px] md:h-[250px] py-5 px-6"
        >
          <div>
            <Image
              src={prefix}
              alt="Background"
              className=" max-w-[30px] inline-block mr-2"
            />
            <b>
              ก้าวไกลจะเอา กมธ. ดีๆ ไปหมดไม่ได้
              <br className=" md:block" /> สส. ทุกพรรค
              <br className=" hidden md:block" /> มีโอกาสได้เท่ากัน
            </b>{" "}
            ได้คะแนน
            <br className=" md:hidden" />
            อันดับหนึ่งไม่เท่ากับมีสิทธิ
            <br className=" hidden md:block" /> ได้เลือกก่อน
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-start b5">
              <p>พิเชษฐ์ เชื้อเมืองพาน</p>
              <p>อดีตรองประธานสภาผู้แทนราษฎรคนที่ 1 </p>
              <p>(5 ก.ย. 66)</p>
            </div>
            <Image src={people_02} alt="Background" className=" max-w-[64px]" />
          </div>
        </div>
      </div>
      <div className="component card-sticky">
        <div
          style={{ rotate: "5.72deg" }}
          className=" bg-[#E2822B] flex justify-between text-start flex-col b4 w-[300px] md:w-[400px] rounded h-[200px] md:h-[250px] py-5 px-6"
        >
          <div>
            <Image
              src={prefix}
              alt="Background"
              className=" max-w-[30px] inline-block mr-2"
            />
            <b>
              กมธ. งบประมาณฯ และป้องกัน
              <br className=" md:hidden" /> และปราบปราม
              <br className=" hidden md:block" /> การทุจริตฯ
            </b>{" "}
            เป็นเครื่องมือ
            <br className="md:hidden" />
            ตรวจสอบถ่วงดุล จึงต้องเป็น <br className="hidden md:block" />{" "}
            หน้าที่
            <br className="md:hidden" />
            ฝ่ายค้าน
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
          className=" bg-[#FF795B] flex justify-between text-start flex-col b4 w-[300px] md:w-[400px] rounded h-[200px] md:h-[250px] py-5 px-6"
        >
          <div className=" font-bold">
            <Image
              src={prefix}
              alt="Background"
              className=" max-w-[30px] inline-block mr-2"
            />
            บทบาทประธาน กมธ. งบประมาณฯ
            <br className="md:hidden" /> และ
            <br className="hidden md:block" /> ป้องกันและ ปราบปรามการทุจริตฯ
            <br className="md:hidden" /> ไม่ได้เจาะจง เป็นของใครก็ได้
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-start b5">
              <p>พิเชษฐ์ เชื้อเมืองพาน</p>
              <p>อดีตรองประธานสภาผู้แทนราษฎรคนที่ 1 </p>
              <p>(5 ก.ย. 66)</p>
            </div>
            <Image src={people_02} alt="Background" className=" max-w-[64px]" />
          </div>
        </div>
      </div>
      <div className="component card-sticky">
        <div
          style={{ rotate: "-3.93deg" }}
          className=" bg-[#E2822B] flex justify-between text-start flex-col b4 w-[300px] md:w-[400px] rounded h-[200px] md:h-[250px] py-5 px-6"
        >
          <div className=" font-bold">
            <Image
              src={prefix}
              alt="Background"
              className=" max-w-[30px] inline-block mr-2"
            />
            การโยน กมธ. ที่ไม่มีใครเลือกมาให้
            <br className="md:hidden" /> ก้าวไกลอาจไม่มี
            <br className=" hidden md:block" />
            ศักยภาพพอในประเด็นนั้น
            <br className="md:hidden" /> หากต้องรับมาทำจริง
            <br className=" hidden md:block" /> กลไกตรวจสอบจะอ่อนแอ
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
