"use client";

import React from "react";
import Image from "next/image";
import benefit_landing from "assets/images/benefit_landing.png";
import side_paper from "assets/images/side_paper.png";
import prefix_blue from "assets/images/prefix_blue.png";
import paper_01 from "assets/images/paper_01.png";
import paper_02 from "assets/images/paper_02.png";
import paper_03 from "assets/images/paper_03.png";
import paper_04 from "assets/images/paper_04.png";
import paper_frame from "assets/images/paper_frame.png";

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
      <div className="max-w-[376px] mx-auto mt-10">
        <Image src={paper_03} alt="Background" className=" w-full mt-2 mb-5" />
        <p className=" b3 my-3">
          <b>
            การเปิดเผยข้อมูลและการเพิ่ม
            <br /> การมีส่วนร่วมของประชาชนจะทำให้ กมธ.
            <br />
            ทำงานอยู่ภายใต้การตรวจสอบของ
            <br /> ประชาชนและสื่อมวลชน
          </b>{" "}
          ซึ่งจะเป็น
          <br /> แรงจูงใจให้ กมธ. ปฏิบัติหน้าที่ด้วย
          <br /> ความรอบคอบ โปร่งใส และมีความรับผิด
        </p>
        <Image src={paper_04} alt="Background" className=" w-full mt-2 mb-5" />
        <p className=" b3 my-3">
          ดังนั้นแล้ว การเปิดเผยข้อมูลของ กมธ.
          <br /> และการมีส่วนร่วมจากประชาชน
          <br /> ไม่เพียงแต่ส่งเสริมความโปร่งใสและ
          <br /> ความน่าเชื่อถือของกระบวนการ
          <br /> นิติบัญญัติ{" "}
          <b>
            แต่ยังเป็นการรักษา
            <br />
            สิทธิของประชาชนในการรับรู้และมีส่วนร่วม
            <br /> ในกระบวนการทางการเมืองเช่นกัน
          </b>
        </p>
      </div>
      <div className=" relative max-w-[501px] w-full py-20 px-7 bg-white mt-5 border border-[#2322BC]">
        <Image
          src={paper_frame}
          alt="Background"
          className=" full top-0 right-0 translate-y-[-55%] scale-[100.5%]  absolute"
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
            การเพิ่มการมีส่วนร่วมจากประชาชนจะทำให้ความเป็นตัวแทนของนัก
            <br />
            การเมือง active (กระตือรือร้น) และ professional (มีความเป็น
            <br />
            มืออาชีพ) มากขึ้น และสามารถเปลี่ยนวิถีการทำงานของ สส. และ สว.ได้
          </p>
          <p className="mt-5">
            เช่น ในมุมของ สส. เขต เขาสามารถแสดงออกได้ว่าเขาไม่ใช่ แค่ตัวแทน
            <br />
            เชิงพื้นที่เท่านั้น แต่เป็นตัวแทนของคนทั้งประเทศด้วย
            เมื่อต้องผลักดัน
            <br />
            วาระเชิงนโยบายหรือตรวจสอบผ่านการทำงานของ กมธ. เช่น ประเด็น
            <br />
            กมธ. ที่ตรวจสอบสำนักงานประกันสังคม
          </p>
          <p className=" mt-5">
            ทำให้ประชาชน (ที่เป็นฐานเสียง) เห็นว่าตัวแทนที่เลือกไปทำงาน
            <br />
            ตอบสนองนโยบายที่เคยหาเสียงหรือสัญญาไว้หรือไม่ หรือทำงาน
            <br />
            ได้มีประสิทธิภาพมากแค่ไหนการ
          </p>
          <p className="mt-5">
            เปิดเผยข้อมูลจะช่วยให้เห็นได้ว่า สส. ทำงานมีประสิทธิภาพไหม
            <br />
            และข้อดีคือ ประชาชนจะรู้ภาระงานของนักการเมืองที่ทำงาน แล้ว
            <br />
            จะมีตัวเลือกตัวแทนของตนในการเลือกตั้งครั้งหน้าได้
          </p>
        </div>
      </div>
      <div className=" relative max-w-[501px] w-full py-20 px-7 bg-white mt-10 border border-[#2322BC]">
        <Image
          src={paper_frame}
          alt="Background"
          className=" full top-0 right-0 translate-y-[-55%] scale-[100.5%]  absolute"
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
            การทำงานของ กมธ. จะได้รับมุมมองในหลายมิติมากขึ้น และถ้า
            <br />
            มีข้อผิดพลาดจะได้แก้ไขทันท่วงที 
          </p>
          <p className="mt-5">
            การเปิดข้อมูลที่มีคุณภาพและการเปิดพื้นที่การมีส่วนร่วมให้ประชาชน
            <br /> จะทำให้ กมธ. ได้ข้อมูลที่มันรอบคอบ รอบด้านและผ่านการพิสูจน์ 
          </p>
          <p className=" mt-5">
            Performance (ผลงาน) ของ กมธ. จะดีขึ้นด้วย ผ่านกลไกตรวจสอบ
            <br />
            กำกับ ควบคุม และถอดถอนจากสาธารณะ
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitPage;
