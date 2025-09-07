"use client";

import Image from "next/image";
import React from "react";
import batch_qc from "assets/images/batch_qc.png";
import survey_qc from "assets/images/survey_qc.png";
import landing_qc_bg from "assets/images/landing_qc_bg.png";
import bg_question from "assets/images/bg_question.png";
import prefix from "assets/images/prefix_blue.png";
import like_label from "assets/images/like_label.png";
import bind_label from "assets/images/bind_label.png";
import like_01 from "assets/images/like_01.png";
import like_02 from "assets/images/like_02.png";
import like_03 from "assets/images/like_03.png";
import like_04 from "assets/images/like_04.png";
import like_05 from "assets/images/like_05.png";
import like_06 from "assets/images/like_06.png";
import like_07 from "assets/images/like_07.png";
import like_08 from "assets/images/like_08.png";
import doc_01 from "assets/images/doc_01.png";
import doc_02 from "assets/images/doc_02.png";

const IntroLandingPage = () => {
  return (
    <div>
      <div className="component relative">
        <Image
          src={landing_qc_bg}
          alt="Background"
          className="absolute top-0 left-[50%] translate-x-[-50%]  h-full object-cover "
        />
        <Image
          src={batch_qc}
          alt="Background"
          className=" max-w-[168px] md:max-w-[267px] z-10  inline-block mr-2"
        />
      </div>
      <div className="component  flex flex-col text-start ">
        <p className="h7 font-black"> สำรวจ ‘ข้อมูลเปิด ของ กมธ.’ </p>

        <div className=" relative  max-w-[349px] h-[439px] mt-5 w-full   ">
          <div className="  w-[349px] h-[439px] bg-white absolute top-0 left-0 translate-y-[10px] translate-x-[10px] border border-[#2322BC]"></div>
          <div className="  w-[349px] h-[439px] bg-white absolute top-0 left-0 translate-y-[5px] translate-x-[5px]  border border-[#2322BC]"></div>
          <div className="  w-[349px] h-[439px] bg-white absolute text-start top-0 left-0 border border-[#2322BC] p-5">
            <Image
              src={survey_qc}
              alt="Background"
              className="absolute top-[100%] translate-x-[-100%] translate-y-[-100%] left-[100%] w-[177px] "
            />
            <p>ในรัฐธรรมนูญ 2560 </p>
            <p>มาตรา 129 วรรค 7 ระบุว่า</p>
            <div className=" b3 mt-20">
              <Image
                src={prefix}
                alt="Background"
                className=" max-w-[30px] inline-block mr-2"
              />
              <b>
                ให้สภาผู้แทนราษฎรและวุฒิสภาเปิดเผย
                <br />
                บันทึกการประชุมรายงานการดําเนินการ
                <br /> รายงาน การสอบหาข้อเท็จจริง หรือรายงาน
                <br /> การศึกษา แล้วแต่กรณี ของคณะกรรมาธิการ
                <br /> ให้ประชาชนทราบ
              </b>{" "}
              เว้นแต่สภาผู้แทนราษฎรหรือ
              <br /> วุฒิสภา แล้วแต่กรณี มีมติมิให้เปิดเผย
            </div>
          </div>
        </div>
      </div>
      <div className="component relative flex flex-col  ">
        <Image
          src={bg_question}
          alt="Background"
          className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] h-full object-cover  md:w-full "
        />
        <p className="b3">มีระเบียบว่าต้องเปิดเผยข้อมูล</p>
        <p className="b3 font-bold ">
          แต่ในความเป็นจริง
          <br className=" md:hidden" />
          ระเบียบนี้ถูกใช้เป็นสภาพบังคับ
          <br />
          มากน้อยแค่ไหน
          <br className=" md:hidden" />
           และการเปิดเผยข้อมูลมีคุณภาพ
          <br /> มากเพียงพอหรือยัง ?
        </p>
      </div>
      <div className=" py-5 flex items-center   justify-center text-center  flex-col">
        <Image
          src={like_label}
          alt="Background"
          className=" h-[55px] md:h-full object-cover w-full"
        />
        <div className="my-5">
          <p className=" b1 font-bold ">
            มีเพียงแค่ 8 กมธ. ที่เปิดเผย
            <br /> ข้อมูลครบ 8 ประเภทข้อมูล
          </p>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 pb-3 pt-6">
            <Image src={like_01} alt="Background" className="w-[100px]" />
            <Image src={like_02} alt="Background" className="w-[100px]" />
            <Image src={like_03} alt="Background" className="w-[100px]" />
            <Image src={like_04} alt="Background" className="w-[100px]" />
            <Image src={like_05} alt="Background" className="w-[100px]" />
            <Image src={like_06} alt="Background" className="w-[100px]" />
            <Image
              src={like_07}
              alt="Background"
              className="w-[100px] hidden md:block"
            />
            <Image
              src={like_08}
              alt="Background"
              className="w-[100px] hidden md:block"
            />
          </div>
          <div className="flex justify-center md:hidden  gap-4 pb-3 pt-6">
            <Image src={like_07} alt="Background" className="w-[100px]" />
            <Image src={like_08} alt="Background" className="w-[100px]" />
          </div>
        </div>
        <Image
          src={like_label}
          alt="Background"
          className=" h-[55px] md:h-full object-cover w-full"
        />
        <div className=" mt-10">
          <Image
            src={bind_label}
            alt="Background"
            className=" h-[55px] md:h-full object-cover w-full"
          />
          <div className=" my-5">
            <p className=" b1 font-bold ">
              ข้อมูลไหนที่ กมธ.
              <br /> มักไม่ค่อยเปิดกัน ?
            </p>
            <div className=" flex justify-center space-x-3">
              <div className=" flex flex-col">
                <div>
                  <Image
                    src={doc_01}
                    alt="Background"
                    className=" w-[150px] h-[270px]"
                  />
                </div>
                <p className="b5 mt-3">
                  แม้จะเป็นเอกสารสำคัญ
                  <br /> แต่
                  <b>
                    มีเพียงแค่ 32.8%
                    <br /> ของ กมธ. ที่เปิดเผยสิ่งนี้
                    <br /> บนเว็บไซต์
                  </b>
                </p>
              </div>
              <div className=" flex flex-col">
                <div>
                  <Image
                    src={doc_02}
                    alt="Background"
                    className=" w-[155px] h-[270px]"
                  />
                </div>
                <p className="b5 mt-3">
                  จาก กมธ.
                  <br /> สามัญทั้งหมด
                  <br />{" "}
                  <b>
                    มีเพียงแค่ 41.4%
                    <br /> ที่เปิดเผยข้อมูลส่วนนี้
                  </b>
                </p>
              </div>
            </div>
          </div>
          <Image
            src={bind_label}
            alt="Background"
            className=" h-[55px] md:h-full object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroLandingPage;
