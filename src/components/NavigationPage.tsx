"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import navigation from "assets/images/navigation.png";
import navigation_01 from "assets/images/navigation_01.png";
import modal_01 from "assets/images/modal_01.png";
import modal_card_01 from "assets/images/modal_card_01.png";
import modal_card_02 from "assets/images/modal_card_02.png";
import modal_card_03 from "assets/images/modal_card_03.png";
import modal_card_04 from "assets/images/modal_card_04.png";
import navigation_02 from "assets/images/navigation_02.png";
import navigation_03 from "assets/images/navigation_03.png";
import modal_close from "assets/images/modal_close.png";
import ModalDetail from "./ModalDetail";
import { Plus } from "lucide-react";

const NavigationPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div id="navigation" className="component flex-col text-[#2322BC] relative">
      <Image
        src={navigation}
        alt="Background"
        className="absolute top-0 left-[50%] translate-x-[-50%]  h-full "
      />
      <p className=" b2 z-10 font-bold">
        ชวนจับจ้อง ส่องติดตาม
        <br /> เกิดอะไรขึ้นบ้างภายในห้อง กมธ.
      </p>
      <p className=" mt-3 b5 border border-dashed rounded border-[#2322BC] z-10 p-4">
        <b>Disclaimer:</b> ข้อมูลในงานชิ้นนี้ศึกษาเฉพาะ กมธ. สามัญ
        <br />
        ในสมัยสภาผู้แทนราษฎรไทย ชุดที่ 26 และวุฒิสภา ชุดที่ 13
        <br />
        อัปเดตข้อมูลเมื่อ 10 มิถุนายน 2568
      </p>
      <div className=" mt-3 underline z-10 b4 mb-5 ">กดเลือกสำรวจเนื้อหา</div>
      <div className=" flex space-x-3 z-10">
        <Link href="/OpenHouse">
          <Image
            src={navigation_01}
            alt="Background"
            className=" max-w-[142px] "
          />
        </Link>
        <Link href="/CheckQC">
          <Image
            src={navigation_02}
            alt="Background"
            className=" max-w-[142px]"
          />
        </Link>
        <Link href="/Trending">
          <Image
            src={navigation_03}
            alt="Background"
            className=" max-w-[142px]"
          />
        </Link>
      </div>
      <button
        onClick={() => setOpen(true)}
        className=" cursor-pointer my-12 bg-[#2322BC] border border-white rounded z-[10] text-white b4 px-6 py-2"
      >
        ขอรู้จัก กมธ. ก่อนเตง <Plus className="w-[15px]  inline-block" />
      </button>
      <ModalDetail open={open} onClose={() => setOpen(false)}>
        <div className="w-[90%] mt-10 relative mx-auto bg-[#2322BC] rounded-lg  flex flex-col items-center">
          <div
            className="  sticky top-0 left-[100%] p-5 "
            onClick={() => setOpen(false)}
          >
            <Image src={modal_close} alt="Background" className="w-[30px]" />
          </div>
          <div className="w-[274px] mx-auto">
            <Image src={modal_01} alt="Background" className=" max-full " />
          </div>
          <p className=" text-white b5 my-3 opacity-50">กดเพื่อเลือกดูข้อมูล</p>
          <div className=" flex mt-5 space-x-3">
            <Image
              src={modal_card_01}
              alt="Background"
              className=" w-[192px] "
            />
            <Image
              src={modal_card_02}
              alt="Background"
              className=" w-[192px] "
            />
            <Image
              src={modal_card_03}
              alt="Background"
              className=" w-[192px] "
            />
            <Image
              src={modal_card_04}
              alt="Background"
              className=" w-[192px] "
            />
          </div>
          <div className=" bg-[#FEF5CD] py-3 px-10 rounded-lg my-7">
            <p className="b4">
              แต่ด้วยหน้าที่ที่กว้างขวางและครอบคลุมในหลายกิจการ
              <br />
              ของประเทศรัฐสภาอาจมี <b>‘ข้อจำกัดในการทำหน้าที่’</b> <br />
              จากเงื่อนไขเหล่านี้
            </p>
            <ul className="list-disc pl-6   b5 text-start mt-3 space-y-1">
              <li>พิจารณาปัญหากฎหมายที่หลากหลาย</li>
              <li>ความเชี่ยวชาญและสามารถของสมาชิก</li>
              <li>มีเวลาในการดำเนินงานที่จำกัด</li>
              <li>ปริมาณงานที่มีจำนวนมาก</li>
            </ul>
          </div>
          <div className=" bg-white rounded-t-full w-full min-h-[70vh]">
            <p className=" h4 font-black mt-10">กมธ.</p>
            <p className="b4">
              หรือในชื่อเต็มว่า <b>‘คณะกรรมาธิการ’</b> จึงถูกจัดตั้งขึ้นมา
              <br />
              เพื่อเป็นหนึ่งกลไกสำคัญที่จะช่วยให้รัฐสภาลด<b>ข้อจำกัด</b>
              <br />
              ในการทำงานเพิ่มความคล่องตัวในการทำหน้าที่ 
              <br />
              และศึกษาปัญหาและหาข้อเท็จจริงได้อย่างลึกซึ้งมากขึ้น
            </p>
            <p className=" b2 mt-5">
              กมธ. จึงเป็นเสมือน
              <br /> <b>‘สภาฯเล็ก’</b> ที่ใช้อำนาจนิติบัญญัติ แทน <b>‘เรา’ </b>
              <br />
              ในการทำหน้าที่เหล่านี้
            </p>
            <p className="b4 mt-5">
              <b>
                {" "}
                กมธ. จึงไม่ใช่เรื่องไกลตัว แต่เป็นกลไกที่กระทบต่อชีวิตเราโดยตรง 
                <br />
              </b>
              ไม่ว่าจะเรื่องพิจารณากฎหมาย งบประมาณจากภาษีที่เราจ่าย
              <br />
               หรือการตรวจสอบภาครัฐว่าสุจริตหรือไม่ 
            </p>
            <div className=" bg-[#FEF5CD] py-3 px-5 mb-10 border-[#FCD535] max-w-[458px] mx-auto mt-10 border rounded-lg">
              <p className=" h7 font-bold">กมธ. มี 2 ประเภทหลัก</p>
              <ol className="list-decimal pl-6 space-y-2 text-[#2322BC] text-start b4">
                <li>
                  <span className="font-bold">กมธ. สามัญ</span>{" "}
                  ถูกจัดตั้งไว้ตลอดวาระของสภา โดยสมาชิกต้องเป็น <br />
                  <b>สส. หรือ สว.</b> เท่านั้น
                </li>
                <li>
                  <span className="font-bold">กมธ. วิสามัญ</span> คือ กมธ.
                  ที่ตั้งขึ้นเฉพาะกิจสำหรับทำงานเรื่องหนึ่ง ๆ<br /> เป็นการเฉพาะ
                  เช่น พิจารณาร่างกฎหมาย หรือพิจารณาเรื่องที่สังคม
                  <br />
                  ให้ความสนใจ สมาชิกของ กมธ. วิสามัญ ไม่จำเป็นต้องเป็น สส. หรือ
                  สว.
                  <br />
                  โดยสามารถเป็นผู้ที่มีความรู้หรือเชี่ยวชาญในประเด็นนั้น ๆ ได้
                </li>
              </ol>
            </div>
          </div>
        </div>
      </ModalDetail>
    </div>
  );
};

export default NavigationPage;
