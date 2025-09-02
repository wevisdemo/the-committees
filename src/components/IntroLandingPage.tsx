"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CardSlide from "./CardSlide";
import NavigationPage from "./NavigationPage";
import landing_01 from "assets/images/landing_01.png";
import landing_02 from "assets/images/landing_02.png";
import landing_03 from "assets/images/landing_03.png";
import landing_toppic from "assets/images/landing_toppic.png";
import modal_01 from "assets/images/modal_01.png";
import modal_card from "assets/images/modal_card.png";
import modal_card_01 from "assets/images/modal_card_01.png";
import modal_card_hover from "assets/images/modal_card_hover.png";
import modal_close from "assets/images/modal_close.png";
import arrow_down_blue from "assets/images/arrow_down_blue.svg";
import arrow_down_white from "assets/images/arrow_down_white.svg";
import ModalDetail from "./ModalDetail";
import ReactMarkdown from "react-markdown";
import { Minus, Plus, TriangleAlert, CircleAlert } from "lucide-react";

function IntroLandingPage() {
  const actionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [openCards, setOpenCards] = useState<number[]>([]);

  const handleToggleCard = (index: number) => {
    setOpenCards((prev) => {
      if (prev.includes(index)) {
        return [];
      }
      return [index];
    });
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

  useEffect(() => {
    const onScroll = () => {
      if (!actionRef.current) return;
      const rect = actionRef.current.getBoundingClientRect();
      const visible = rect.top + rect.height / 2 < window.innerHeight;
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
    <>
      <div className=" mt-[-67px] relative component h6 bg-[#FEF5CD] text-[#2322BC] font-black overflow-hidden">
        <Image
          src={landing_01}
          alt="Background"
          className="absolute top-0 left-[50.5%] translate-x-[-49%]  h-full "
        />
        <div
          className=" relative z-10 flex items-center justify-center"
          id="Page-2"
        >
          เค้าว่ากันว่า
          <br /> สภาใหญ่ใช้ออกสื่อ
          <br />
          แต่ดีลลับจับมือ
          <br />
          คือการประชุม
          <br />
          คณะกรรมาธิการ ?
        </div>
      </div>
      <div className=" relative">
        <div className="h-screen sticky top-0 ">
          <Image
            src={landing_03}
            alt="Background"
            className={`absolute top-[-2%] scale-105 right-0 w-[50%] h-full transition-transform duration-700 ${
              isVisible ? "translate-x-[100%]" : "translate-x-[-0%]"
            }`}
          />
          <Image
            src={landing_02}
            alt="Background"
            className={`absolute top-[-2%] scale-105 left-0 z-10 w-[50%] h-full transition-transform duration-700 ${
              isVisible ? "-translate-x-[100%]" : "-translate-x-[2%]"
            }`}
          />
        </div>
        <div
          className=" h-screen items-center relative flex flex-col  overflow-hidden white_manu"
          id="action_page"
        >
          <Image
            src={landing_toppic}
            alt="Background"
            className=" mt-20 w-[275px] z-30 md:w-[482px]"
          />

          <div className=" relative text-center z-30 text-[#2322BC]">
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
        <div className=" component b2 flex-col white_manu" ref={actionRef}>
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
      </div>
      <CardSlide />
      <div className="component b2 white_manu" id="action_page_1">
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
      <NavigationPage setOpen={() => setOpen(true)} />
      <ModalDetail open={open} onClose={() => setOpen(false)}>
        <div className="w-full md:mt-10 px-5 relative text-center text-[#2322BC]  bg-[#2322BC] md:rounded-lg  flex flex-col items-center">
          <div
            className=" cursor-pointer sticky top-0 left-[100%] p-5 "
            onClick={() => setOpen(false)}
          >
            <Image src={modal_close} alt="Background" className="w-[30px]" />
          </div>
          <div className="w-[274px] mx-auto">
            <Image src={modal_01} alt="Background" className=" max-full " />
          </div>
          <p className=" text-white b5 my-3 opacity-50">กดเพื่อเลือกดูข้อมูล</p>
          <div className="flex md:flex-row flex-col mt-5 space-y-3 md:space-y-0 md:space-x-3">
            {modal.map((m, index) => (
              <div
                className="relative w-[187px] h-[54px] bg-white group cursor-pointer"
                style={{ zIndex: openCards.includes(index) ? 20 - index : 10 }} // Add dynamic z-index
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
                <div
                  className={`bg-white absolute w-[187px] b5 p-2 min-h-[54px] top-0 border border-[#2322BC] left-0 translate-y-[5px] group-hover:bg-[#D3D3F2] translate-x-[5px]`}
                >
                  {openCards.includes(index) && (
                    <div className="flex flex-col pt-[54px]">
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
          <div className=" px-5">
            <div className=" bg-[#FEF5CD] py-3 px-10 rounded-lg my-3">
              <TriangleAlert className=" mx-auto my-3 text-[#2322BC] w-[33px] h-[28px]" />
              <p className="b4">
                แต่ด้วยหน้าที่ที่กว้างขวางและ
                <br className=" md:hidden" />
                ครอบคลุมในหลายกิจการ
                <br className=" hidden md:block" />
                ของประเทศ
                <br className="md:hidden" />
                รัฐสภาอาจมี <b>‘ข้อจำกัดในการทำหน้าที่’</b> <br />
                จากเงื่อนไขเหล่านี้
              </p>
              <ul className="list-disc pl-6   b5 text-start mt-3 space-y-1">
                <li>พิจารณาปัญหากฎหมายที่หลากหลาย</li>
                <li>ความเชี่ยวชาญและสามารถของสมาชิก</li>
                <li>มีเวลาในการดำเนินงานที่จำกัด</li>
                <li>ปริมาณงานที่มีจำนวนมาก</li>
              </ul>
            </div>
          </div>
          <Image
            src={arrow_down_white}
            alt="Background"
            className="w-[20px]  mx-auto my-5"
          />
          <div className=" bg-white px-5 rounded-t-full w-full min-h-[70vh]">
            <p className=" h4 font-black mt-10">กมธ.</p>
            <p className="b4">
              หรือในชื่อเต็มว่า <b>‘คณะกรรมาธิการ’</b>
              <br className=" md:hidden" /> จึงถูกจัดตั้งขึ้นมา
              <br className=" hidden md:block" />
              เพื่อเป็นหนึ่งกลไกสำคัญ
              <br className=" md:hidden" />
              ที่จะช่วยให้รัฐสภาลด<b>ข้อจำกัด</b>
              <br className=" hidden md:block" />
              ในการทำงาน
              <br className="md:hidden" />
              เพิ่มความคล่องตัวในการทำหน้าที่ 
              <br />
              และศึกษาปัญหาและหาข้อเท็จจริง
              <br className=" md:hidden" />
              ได้อย่างลึกซึ้งมากขึ้น
            </p>
            <Image
              src={arrow_down_blue}
              alt="Background"
              className="w-[20px]  mx-auto my-5"
            />
            <p className=" b2 mt-5">
              กมธ. จึงเป็นเสมือน
              <br className=" hidden md:block" /> <b>‘สภาฯเล็ก’</b>
              <br className=" md:hidden" />
               ที่ใช้อำนาจนิติบัญญัติ แทน <b>‘เรา’ </b>
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
                กมธ. จึงไม่ใช่เรื่องไกลตัว
                <br className=" md:hidden" />{" "}
                แต่เป็นกลไกที่กระทบต่อชีวิตเราโดยตรง 
                <br />
              </b>
              ไม่ว่าจะเรื่องพิจารณากฎหมาย
              <br className=" md:hidden" /> งบประมาณจากภาษีที่เราจ่าย
              <br />
               หรือการตรวจสอบภาครัฐว่าสุจริตหรือไม่ 
            </p>

            <div className=" bg-[#FEF5CD] py-3 px-5 mb-10 border-[#FCD535] w-fit md:w-auto md:max-w-[458px] mx-auto mt-10 border rounded-lg">
              <p className=" h7 font-bold">
                <CircleAlert className=" mx-auto my-3 text-[#2322BC] w-[33px] h-[28px] inline pr-3" />
                กมธ. มี 2 ประเภทหลัก
              </p>
              <ol className="list-decimal pl-6 space-y-2 text-[#2322BC] text-start b4">
                <li>
                  <span className="font-bold">กมธ. สามัญ</span>{" "}
                  ถูกจัดตั้งไว้ถาวรตลอด
                  <br className=" md:hidden" />
                  วาระของสภา โดยสมาชิกต้องเป็น
                  <br className=" hidden md:block" /> สส.
                  <br className=" md:hidden" /> หรือ สว. เท่านั้น
                </li>
                <li>
                  <span className="font-bold">กมธ. วิสามัญ</span> คือ กมธ.
                  ที่ตั้งขึ้นมา
                  <br className=" md:hidden" />
                  เฉพาะกิจสำหรับทำงานเรื่องหนึ่ง ๆ<br /> เป็นการเฉพาะ เช่น
                  พิจารณาร่าง
                  <br className=" md:hidden" />
                  กฎหมาย หรือพิจารณาเรื่องที่สังคม
                  <br />
                  ให้ความสนใจ สมาชิกของ กมธ.
                  <br className=" md:hidden" /> วิสามัญ ไม่จำเป็นต้องเป็น สส.
                  หรือ
                  <br className=" md:hidden" />
                  สว.
                  <br className=" hidden md:block" />
                  โดยสามารถเป็นผู้ที่มีความรู้
                  <br className=" md:hidden" />
                  หรือเชี่ยวชาญในประเด็นนั้น ๆ ได้
                </li>
              </ol>
            </div>
          </div>
        </div>
      </ModalDetail>
    </>
  );
}

export default IntroLandingPage;
