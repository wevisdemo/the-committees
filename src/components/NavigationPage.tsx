"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import navigation from "assets/images/navigation.png";
import navigation_01 from "assets/images/navigation_01.png";
import modal_01 from "assets/images/modal_01.png";
import navigation_02 from "assets/images/navigation_02.png";
import navigation_03 from "assets/images/navigation_03.png";
import modal_card from "assets/images/modal_card.png";
import modal_card_01 from "assets/images/modal_card_01.png";
import modal_card_hover from "assets/images/modal_card_hover.png";
import modal_close from "assets/images/modal_close.png";
import arrow_down_blue from "assets/images/arrow_down_blue.svg";
import arrow_down_white from "assets/images/arrow_down_white.svg";
import ModalDetail from "./ModalDetail";
import ReactMarkdown from "react-markdown";
import { Minus, Plus, TriangleAlert, CircleAlert } from "lucide-react";

const NavigationPage = () => {
  const [open, setOpen] = useState(false);
  const [openCards, setOpenCards] = useState<number[]>([]);

  const handleToggleCard = (index: number) => {
    setOpenCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  const modal = [
    {
      title: "อำนาจนิติบัญญัติ",
      des: "การตรา/ยกเลิก/แก้ไขกฎหมาย\n\n การอนุมัติพระราชกำหนด\n\n และการแก้ไขเพิ่มเติม\n\nรัฐธรรมนูญ",
    },
    {
      title: "ให้ความเห็นชอบ\n\n เรื่องสำคัญของประเทศ",
      des: "ให้ความเห็นชอบเรื่องสำคัญ\n\nที่ส่งผลกระทบต่อประชาชน\n\n หรือผลประโยชน์ของชาติ เช่น\n\n การตั้งผู้สำเร็จราชการแทน\n\nพระองค์ การสืบราชสมบัติ\n\n การประกาศสงคราม การทำ\n\nหนังสือสัญญาระหว่างประเทศ\n\nที่มีผลต่อการเปลี่ยนแปลง\n\nอาณาเขตหรืออำนาจอธิปไตย\n\nของชาติ เป็นต้น",
    },
    {
      title: "ควบคุมการบริหาร\n\n ราชการแผ่นดิน",
      des: "ควบคุมและตรวจสอบการ\n\nบริหารงานของรัฐบาล\n\n ให้เป็นไปตามนโยบายที่แถลงไว้\n\nต่อรัฐสภา โดยวิธีการต่าง ๆ\n\n เช่น การตั้งกระทู้ถาม\n\n การตรวจสอบโดย\n\nคณะกรรมาธิการ การขอเปิด\n\nอภิปรายทั่วไปเพื่อให้คณะ\n\nรัฐมนตรีแถลงข้อเท็จจริง\n\n และการขอเปิดอภิปรายทั่วไป\n\nเพื่อลงมติไม่ไว้วางใจ",
    },
    {
      title: "อำนาจอื่น ๆ ",
      des: "เช่น วุฒิสภามีอำนาจ\n\nสรรหาบุคคลมาดำรงตำแหน่ง\n\nในองค์กรต่าง ๆ อำนาจ\n\nถอดถอนผู้ดำรงตำแหน่งทาง\n\nการเมือง ตามที่บัญญัติไว้\n\nในรัฐธรรมนูญ",
    },
  ];
  return (
    <div id="navigation" className="component flex-col text-[#2322BC] relative">
      <Image
        src={navigation}
        alt="Background"
        className="absolute top-0 left-[50%] translate-x-[-50%] h-full   "
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
      <div className=" flex space-x-3 z-10  overflow-hidden">
        <Link href="/OpenHouse">
          <Image
            src={navigation_01}
            alt="Background"
            className=" max-w-[95px] md:max-w-[142px] "
          />
        </Link>
        <Link href="/CheckQC">
          <Image
            src={navigation_02}
            alt="Background"
            className="  max-w-[95px] md:max-w-[142px]"
          />
        </Link>
        <Link href="/Trending">
          <Image
            src={navigation_03}
            alt="Background"
            className=" max-w-[95px] md:max-w-[142px]"
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
            {modal.map((m, index) => (
              <div
                className="relative w-[187px] h-[54px] bg-white group cursor-pointer"
                onClick={() => handleToggleCard(index)}
                key={index}
              >
                <Image
                  src={modal_card}
                  alt="Background"
                  className=" w-[15px] bg-[#2322BC]  absolute z-20 top-0 left-0 block group-hover:hidden"
                />
                <Image
                  src={modal_card_hover}
                  alt="Background"
                  className=" w-[15px] bg-[#2322BC]  absolute z-20 top-0 left-0 hidden group-hover:block"
                />
                <div className="bg-white absolute w-[187px] b5 font-bold flex items-center justify-center z-[10] border border-[#2322BC] h-[54px] group-hover:bg-[#D3D3F2] transition-colors">
                  <div className=" flex items-center">
                    <div className="flex flex-col">
                      <ReactMarkdown>{`${m.title}`}</ReactMarkdown>
                    </div>
                    {openCards.includes(index) ? (
                      <Minus className="w-[12px] ml-2 text-[#2322BC]" />
                    ) : (
                      <Plus className="w-[13px] ml-2 text-[#2322BC]" />
                    )}
                  </div>
                </div>
                <div className="bg-white absolute w-[187px] b5 p-2 min-h-[54px] top-0 border border-[#2322BC] left-0 translate-y-[5px] group-hover:bg-[#D3D3F2] translate-x-[5px]">
                  {openCards.includes(index) && (
                    <div className=" flex flex-col pt-[54px]">
                      <ReactMarkdown>{m.des}</ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Image
            src={arrow_down_white}
            alt="Background"
            className="w-[20px]  mx-auto mt-5"
          />
          <div className=" bg-[#FEF5CD] py-3 px-10 rounded-lg my-3">
            <TriangleAlert className=" mx-auto my-3 text-[#2322BC] w-[33px] h-[28px]" />
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
          <Image
            src={arrow_down_white}
            alt="Background"
            className="w-[20px]  mx-auto my-5"
          />
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
            <Image
              src={arrow_down_blue}
              alt="Background"
              className="w-[20px]  mx-auto my-5"
            />
            <p className=" b2 mt-5">
              กมธ. จึงเป็นเสมือน
              <br /> <b>‘สภาฯเล็ก’</b> ที่ใช้อำนาจนิติบัญญัติ แทน <b>‘เรา’ </b>
              <br />
              ในการทำหน้าที่เหล่านี้
            </p>
            <div className="w-[267px] my-2 mx-auto">
              <Image
                src={modal_card_01}
                alt="Background"
                className=" max-full "
              />
            </div>
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
              <p className=" h7 font-bold">
                <CircleAlert className=" mx-auto my-3 text-[#2322BC] w-[33px] h-[28px] inline pr-3" />
                กมธ. มี 2 ประเภทหลัก
              </p>
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
