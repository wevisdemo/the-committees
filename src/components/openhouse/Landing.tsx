"use client";

import Image from "next/image";
import ModalDetail from "@/components/ModalDetail";
import IntroOpenHouse from "@/components/openhouse/IntroOpenHouse";
import LastPage from "@/components/openhouse/LastPage";
import modal_close from "assets/images/modal_close.png";
import ReasonPage from "@/components/openhouse/ReasonPage";
import SurveyPage from "@/components/openhouse/SurveyPage";
import YearPass from "@/components/openhouse/YearPass";
import React, { useState } from "react";

const Landing = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalDetail open={open} onClose={() => setOpen(false)}>
        <div className="w-full md:w-[600px] md:mt-10 relative pb-10 px-5  text-start text-[#2322BC]  bg-white md:rounded-lg  flex flex-col ">
          <div
            className=" cursor-pointer  sticky top-0 left-[100%] p-5 w-fit"
            onClick={() => setOpen(false)}
          >
            <Image src={modal_close} alt="Background" className="w-[30px]" />
          </div>
          <p className=" b2 font-bold text-center">ที่มาและข้อจำกัดของข้อมูล</p>
          <p className="b5 mt-5">
            ข้อมูลในงานส่วนนี้ มาจากไฟล์บันทึกการประชุมของ กมธ.
            จากการดาวน์โหลดผ่าน API ของ{" "}
            <a
              href="https://www.parliament.go.th/view/1/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%B1%E0%B8%8D/TH-TH"
              target="_blank"
              className="underline inline cursor-pointer "
            >
              เว็บไซต์สภาผู้แทน ราษฎร
            </a>
            และ{" "}
            <a
              href="https://www.senate.go.th/view/2/%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3/TH-TH/?t=1"
              target="_blank"
              className="underline inline cursor-pointer"
            >
              วุฒิสภา
            </a>{" "}
            ในรูปแบบไฟล์นามสกุล PDF โดยรวบรวมเฉพาะระเบียบวาระที่ 3 และ 4
            ซึ่งมีเนื้อหาเกี่ยวกับการพิจารณาระเบียบวาระที่แต่ละ กมธ.
            ประชุมในแต่ละครั้ง
          </p>
          <p className="b5 mt-5">
            เครื่องมือที่ใช้ในการดึงข้อมูลจากไฟล์คือ Gemini 2.0 flash
            ผ่านคำสั่งตั้งต้น เมื่อการดึงข้อมูลเสร็จสิ้น
            ข้อมูลจะถูกนำเอาไปฟิลเตอร์เพื่อหาข้อผิดพลาด เช่น
            ตัวเลขหัวข้อตรงกับเอกสารหรือไม่, มีเนื้อหาหัวข้อครบถ้วนหรือไม่,
            คุณภาพของข้อมูลที่ดึงออกมาดีหรือไม่ ประกอบด้วย ตัวสะกด ภาษา
            และภาพรวมเนื้อหา
          </p>
          <p className="b5 mt-5">
            หลังจากนั้น ข้อมูลที่มีข้อผิดพลาดจะถูกส่งให้เครื่องมือ Gemini 2.5
            flash ดึงซ้ำด้วยคำสั่งเดิม และถูกตรวจ
            <br className=" hidden md:block" />
            เช็กอีกรอบ
          </p>
          <p className="b5 mt-5">
            เมื่อการดึงข้อมูลเสร็จสิ้น
            ขั้นตอนหลังจากนั้นคือการรวมข้อมูลทั้งหมดและตรวจเช็กไฟล์การประชุมที่หายไปหรือ
            ตกหล่น
            เพื่อเก็บรวมรวมให้ครบถ้วนและใช้เครื่องมือเดิมในการดึงข้อมูลจากไฟล์ที่ตกหล่นเหล่านี้อีกครั้ง
            โดยมีบางกรณีที่ไฟล์บันทึกการประชุมไม่สามารถใช้งานได้หรือ
            ขึ้นสถานะว่า error ทำให้ไม่ถูกรวมอยู่ในฐานข้อมูล
            ในส่วนของไฟล์ข้อมูลที่ยังมีข้อผิดพลาด ไม่มีใน API หรือใน กรณีอื่น ๆ
            จะถูกตรวจสอบและกรอกข้อมูลด้วยมือ
            <br />
            <br />
            <span className="b5 mt-5 text-start">
              ในขั้นตอนสุดท้ายคือการตรวจเช็กคุณภาพของข้อมูล
              และตรวจสอบความถูกต้องของข้อมูลก่อนนำไปใช้ในงาน
            </span>
          </p>
          <p className="b5 mt-5">
            แม้เครื่องมือ Gemini 2.5 flash
            จะเป็นเครื่องมือที่สามารถดึงข้อมูลได้อย่างแม่นยำ
            แต่เครื่องมือนี้อาจยังมีข้อจำกัดในการพิสูจน์ความครบถ้วนของจำนวนข้อความ
            ที่ซึ่งอาจตกหล่นในระหว่างกระบวนการดึงข้อมูลได้
          </p>
          <p className="b2 font-bold mt-5">
            คำสั่งตั้งต้นที่ใช้ในเครื่องมือ Gemini 2.5 flash
          </p>
          <div className="b5 mt-5 text-start">
            This is a document of a Thai meeting record. extract all of the
            meeting topic from sections: 'ระเบียบวาระที่ ๓' and 'ระเบียบวาระที่
            ๔' while treat it in result as '3' and '4' respectively, there also
            subtopic like '๔.๑': treat it as '4.1'. always include the word
            'พิจารณา', 'เรื่อง' or 'พิจารณาเรื่อง' in the topic if it's present.
            <br />
            <br />
            DO NOT translate these text to english, return it in original Thai
            text. output the result in csv format with two columns
            'topic_number' and 'topic'. here is the example of the output:
            <br />
            ```topic_number,topic
            <br /> 3,พิจารณาเรื่องการจัดการประชุม
            <br />
            4,พิจารณาเรื่องการอนุมัติงบประมาณ
            <br /> 4.1,กำหนดวันประชุมคณะกรรมาธิการ```
          </div>
        </div>
      </ModalDetail>
      <IntroOpenHouse />
      <ReasonPage />
      <YearPass />
      <SurveyPage onOpen={() => setOpen(true)} />
      <LastPage />
    </>
  );
};

export default Landing;
