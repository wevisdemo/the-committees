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
    <div className="  flex items-center px-5  justify-center text-center pb-10 flex-col">
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
            ในภาพรวม การมีข้อจำกัดเหล่านี้
            <br className=" md:hidden" /> ทำให้ความตื่นตัวทางการเมืองของ
            <br />
            พลเมืองจะลดน้อยลง อยู่ในเพดาน
            <br className=" md:hidden" /> ที่มันต่ำ จะ exercise (มีส่วนร่วม)
            <br />
            ได้น้อย ถ้ามีเพดานที่สูงขึ้น
            <br className=" md:hidden" /> ประชาชนจะมีความรู้สึกว่าเป็นเจ้า
            <br className=" md:hidden" />
            ของ
            <br className=" hidden md:block" />
            ประเทศ และตระหนักถึงสิทธิ
            <br className=" md:hidden" />
            ที่ควรมี
          </p>
          <p className="mt-5">
            ถ้าเป็นเรื่องเฉพาะของ กมธ. เช่น
            <br className=" md:hidden" /> ประชาชนเสนอกฎหมายไป ถ้าไม่มี
            <br />
            การเปิดพื้นที่ตรงนี้ให้มีส่วนร่วม
            <br className=" md:hidden" />
            อย่างเพียงพอ แน่นอนว่าประชาชน
            <br />
            จะถูกจำกัดสิทธิในการตรวจสอบ
            <br className=" md:hidden" /> เรื่องนี้สำคัญมาก{" "}
            <b>
              เพราะไม่มีการ
              <br />
              ใช้อำนาจใดปราศจากการตรวจสอบ
            </b>
          </p>
          <p className=" mt-5">
            การมีส่วนร่วมทางการเมืองคือ
            <br className=" md:hidden" />
            การตรวจสอบประเภทหนึ่ง
            <br />
            ประชาธิปไตยระบบตัวแทนที่ไม่
            <br className=" md:hidden" />
            เข้มแข็งมักจะเริ่มต้นจากการที่
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
            <b>เมื่อประชาชนเข้าไม่ถึงข้อมูล</b>ใน
            <br className=" md:hidden" />
            ระหว่างหรือปลายกระบวนการ
            <br />
            <b>
              สิทธิในการร้องทักหรือประท้วง
              <br className=" md:hidden" />
              จะน้อยลง ประชาชนจะเสียสิทธิ
            </b>
            <br />
            ในการมีส่วนร่วมแน่นอน
            <br />
          </p>
          <p className="mt-5">
            ในส่วนของบทบาทหน้าที่ในการ
            <br className=" md:hidden" />
            ตรวจสอบฝ่ายบริหารก็จะหายไป
            <br /> ด้วย คือต้องรอฟัง สส. อภิปราย
            <br className=" md:hidden" />
            ในสภาอย่างเดียว หรือรอ ครม.
            <br /> แถลงผลงาน ซึ่งก็อาจจะไม่ทันการ
            <br />
          </p>
          <p className=" mt-5">
            การศึกษาในประเด็นบางอย่าง
            <br className=" md:hidden" />
            ก็อาจขาดหายไปแบบที่ตั้งตัวไม่ทัน
            <br />
            กระบวนการนิติบัญญัติก็เช่นกัน
            <br className=" md:hidden" /> ประชาชนอาจจะไม่ทราบถึงผล
            <br />
            กระทบของกฎหมายบางอย่างที่
            <br className=" md:hidden" /> กมธ. ผลักดันอยู่
            <br />
          </p>
          <p className=" mt-5">
            การเก็บสะสมและเข้าถึงข้อมูลได้
            <br className=" md:hidden" />
            จะช่วยให้ประชาชนตัดสินใจอย่าง
            <br className=" md:hidden" />
            รอบคอบและมีดุลพินิจมากขึ้น ซึ่ง
            <br className=" md:hidden" />
            เป็นสิ่งจำเป็นอย่างมากใน
            <br className=" md:hidden" />
            กระบวนการประชาธิปไตย
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
            <b>
              การเพิ่มการมีส่วนร่วมจาก <br className=" md:hidden" />
              ประชาชนจะทำให้ความเป็น <br className=" md:hidden" />
              ตัวแทนของนัก
              <br className=" hidden md:block" />
              การเมือง active
              <br className=" md:hidden" /> (กระตือรือร้น) และ professional
              <br className=" md:hidden" />
              (มีความเป็นมืออาชีพ) มากขึ้น
              <br className=" md:hidden" />
            </b>{" "}
            และสามารถเปลี่ยนวิถีการทำงาน
            <br className=" md:hidden" />
            ของ สส. และ สว.ได้
          </p>
          <p className="mt-5">
            เช่น ในมุมของ สส. เขต เขา
            <br className=" md:hidden" />
            สามารถแสดงออกได้ว่าเขาไม่ใช่
            <br className=" md:hidden" /> แค่ตัวแทน
            <br className=" hidden md:block" />
            เชิงพื้นที่เท่านั้น แต่เป็น
            <br className=" md:hidden" />
            ตัวแทนของคนทั้งประเทศด้วย เมื่อ
            <br className=" md:hidden" />
            ต้องผลักดัน
            <br className=" hidden md:block" />
            วาระเชิงนโยบายหรือ
            <br className=" md:hidden" />
            ตรวจสอบผ่านการทำงานของ
            <br className=" md:hidden" /> กมธ. เช่น ประเด็น
            <br className=" hidden md:block" />
            กมธ. ที่ตรวจสอบ
            <br className=" md:hidden" />
            สำนักงานประกันสังคม
          </p>
          <p className=" mt-5">
            ทำให้ประชาชน (ที่เป็นฐานเสียง)
            <br className=" md:hidden" /> เห็นว่าตัวแทนที่เลือกไปทำงาน
            <br />
            ตอบสนองนโยบายที่เคยหาเสียง
            <br className=" md:hidden" />
            หรือสัญญาไว้หรือไม่ หรือทำงาน
            <br />
            ได้มีประสิทธิภาพมากแค่ไหน
          </p>
          <p className="mt-5">
            การเปิดเผยข้อมูลจะช่วยให้เห็น
            <br className=" md:hidden" />
            ได้ว่า สส. ทำงานมีประสิทธิภาพไหม
            <br />
            และข้อดีคือ ประชาชนจะรู้ภาระ
            <br className=" md:hidden" />
            งานของนักการเมืองที่ทำงาน แล้ว
            <br />
            จะมีตัวเลือกตัวแทนของตนในการ
            <br className=" md:hidden" />
            เลือกตั้งครั้งหน้าได้
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
            การทำงานของ กมธ. จะได้รับ
            <br className=" md:hidden" />
            มุมมองในหลายมิติมากขึ้น และถ้า
            <br />
            มีข้อผิดพลาดจะได้แก้ไขทันท่วงที 
          </p>
          <p className="mt-5">
            การเปิดข้อมูลที่มีคุณภาพและการ
            <br className=" md:hidden" />
            เปิดพื้นที่การมีส่วนร่วมให้ประชาชน
            <br /> จะทำให้ กมธ. ได้ข้อมูลที่มันรอบคอบ
            <br className=" md:hidden" /> รอบด้านและผ่านการพิสูจน์ 
          </p>
          <p className=" mt-5">
            Performance (ผลงาน) ของ กมธ.
            <br className=" md:hidden" /> จะดีขึ้นด้วย ผ่านกลไกตรวจสอบ
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
