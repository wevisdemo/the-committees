"use client";

import React from "react";
import Image from "next/image";
import benefit_landing from "assets/images/benefit_landing.png";
import side_paper from "assets/images/side_paper.png";
import prefix_blue from "assets/images/prefix_blue.png";
import paper_01 from "assets/images/paper_01.png";
import paper_02 from "assets/images/paper_02.png";

const BenefitPage = () => {
  return (
    <div className="  flex items-center  justify-center text-center pb-10 flex-col">
      <Image
        src={benefit_landing}
        alt="Background"
        className=" max-w-[717px]
        "
      />
      <div className=" relative max-w-[501px] w-full py-20 px-7 bg-white mt-5 border border-[#2322BC]">
        <Image
          src={side_paper}
          alt="Background"
          className=" w-[26px] top-0 right-0 translate-y-[-1.8px] translate-x-[1px] absolute bg-[#F3CDAA] border-t botder-r border-t-[#F3CDAA] border-r-[#F3CDAA]
        "
        />
        <div className=" text-left flex space-x-2">
          <Image src={paper_01} alt="Background" className=" w-[57px]" />
          <div>
            <p className=" b4 font-bold">รศ.ดร.วรรณภา ติระสังขะ</p>
            <p className=" b5">อาจารย์ประจำคณะรัฐศาสตร์ </p>
            <p className=" b5">มหาวิทยาลัยธรรมศาสตร์</p>
          </div>
        </div>
        <div className="b3 text-left mt-10">
          <Image
            src={prefix_blue}
            alt="Background"
            className=" w-[38px] mt-2 mb-5"
          />
          <p>
            ในภาพรวม การมีข้อจำกัดเหล่านี้ ทำให้ความตื่นตัวทางการเมืองของ
            <br />
            พลเมืองจะลดน้อยลง อยู่ในเพดาน ที่มันต่ำ จะ exercise (มีส่วนร่วม)
            <br />
            ได้น้อย ถ้ามีเพดานที่สูงขึ้น ประชาชนจะมีความรู้สึกว่าเป็นเจ้าของ
            <br />
            ประเทศ และตระหนักถึงสิทธิที่ควรมี
          </p>
          <p className="mt-5">
            ถ้าเป็นเรื่องเฉพาะของ กมธ. เช่น ประชาชนเสนอกฎหมายไป ถ้าไม่มี
            <br />
            การเปิดพื้นที่ตรงนี้ให้มีส่วนร่วมอย่างเพียงพอ แน่นอนว่าประชาชน
            <br />
            จะถูกจำกัดสิทธิในการตรวจสอบ เรื่องนี้สำคัญมาก{" "}
            <b>
              เพราะไม่มีการ
              <br />
              ใช้อำนาจใดปราศจากการตรวจสอบ
            </b>
          </p>
          <p className=" mt-5">
            การมีส่วนร่วมทางการเมืองคือการตรวจสอบประเภทหนึ่ง
            <br />
            ประชาธิปไตยระบบตัวแทนที่ไม่เข้มแข็งมักจะเริ่มต้นจากการที่
            <br />
            ประชาชนถูกปิดกั้นจากการตรวจสอบ
          </p>
        </div>
      </div>
      <div className=" relative max-w-[501px] w-full py-20 px-7 bg-white mt-10 border border-[#2322BC]">
        <Image
          src={side_paper}
          alt="Background"
          className=" w-[26px] top-0 right-0 translate-y-[-1.8px] translate-x-[1px] absolute bg-[#F3CDAA] border-t botder-r border-t-[#F3CDAA] border-r-[#F3CDAA]
        "
        />
        <div className=" text-left flex space-x-2">
          <Image src={paper_02} alt="Background" className=" w-[57px]" />
          <div>
            <p className=" b4 font-bold">เทวฤทธิ์ มณีฉาย </p>
            <p className=" b5">สมาชิกวุฒิสภา </p>
          </div>
        </div>
        <div className="b3 text-left mt-10">
          <Image
            src={prefix_blue}
            alt="Background"
            className=" w-[38px] mt-2 mb-5"
          />
          <p>
            <b>เมื่อประชาชนเข้าไม่ถึงข้อมูล</b>ในระหว่างหรือปลายกระบวนการ
            <br />
            <b>สิทธิในการร้องทักหรือประท้วงจะน้อยลง ประชาชนจะเสียสิทธิ</b>
            <br />
            ในการมีส่วนร่วมแน่นอน
            <br />
          </p>
          <p className="mt-5">
            ในส่วนของบทบาทหน้าที่ในการตรวจสอบฝ่ายบริหารก็จะหายไป
            <br /> ด้วย คือต้องรอฟัง สส. อภิปรายในสภาอย่างเดียว หรือรอ ครม.
            <br /> แถลงผลงาน ซึ่งก็อาจจะไม่ทันการ
            <br />
          </p>
          <p className=" mt-5">
            การศึกษาในประเด็นบางอย่างก็อาจขาดหายไปแบบที่ตั้งตัวไม่ทัน
            <br />
            กระบวนการนิติบัญญัติก็เช่นกัน ประชาชนอาจจะไม่ทราบถึงผล
            <br />
            กระทบของกฎหมายบางอย่างที่ กมธ. ผลักดันอยู่
            <br />
          </p>
          <p className=" mt-5">
            การเก็บสะสมและเข้าถึงข้อมูลได้จะช่วยให้ประชาชนตัดสินใจอย่าง
            <br />
            รอบคอบและมีดุลพินิจมากขึ้น
            <br /> ซึ่งเป็นสิ่งจำเป็นอย่างมากในกระบวนการ
            <br />
            ประชาธิไตย
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitPage;
