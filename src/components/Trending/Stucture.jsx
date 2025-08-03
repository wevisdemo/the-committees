"use client";

import Image from "next/image";
import React from "react";
import trend_01 from "assets/images/trend_01.png";
import trend_02 from "assets/images/trend_02.png";
import trending_list_01 from "assets/images/trending_list_01.png";
import trending_list_02 from "assets/images/trending_list_02.png";
import trending_list_03 from "assets/images/trending_list_03.png";
import trending_list_04 from "assets/images/trending_list_04.png";
import list_01 from "assets/images/list_01.png";
import list_02 from "assets/images/list_02.png";
import list_03 from "assets/images/list_03.png";

const Stucture = () => {
  return (
    <div className="bg-[#FEF5CD] min-h-screen py-10">
      {/* หัวข้อ */}
      <div className="text-center mb-6">
        <p className="text-[#2322BC]  font-black h7 mb-1">
          นี่คือโครงสร้าง
          <br />
          ของ กมธ. สามัญในปัจจุบัน
        </p>
        <div className="text-[#2322BC] b2">ตามรัฐธรรมนูญ 2560</div>
      </div>

      {/* กล่องแสดงจำนวน กมธ. */}
      <div className="bg-white border-x-[15px] border-y-[10px]  border-[#FF795B] rounded-xl w-fit  mx-auto p-6 mb-8 shadow-md">
        <div className="flex flex-col md:flex-row justify-between items-start mb-2 md:space-x-5 space-y-5 md:space-y-0">
          <div className="flex flex-col items-center flex-1 text-[#2322BC]">
            <div className=" text-center ">
              <p className=" font-bold b1">กมธ. สส.</p>
              <p className="font-bold h4">35</p>
              <p className=" b3">คณะ</p>
            </div>
            <div className="flex flex-wrap gap-1 justify-center max-w-[270px] mt-2">
              <Image src={trend_01} alt="Background" className="w-full " />
            </div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className=" text-center text-[#2322BC]">
              <p className=" font-bold b1">กมธ. สว.</p>
              <p className="font-bold h4">22</p>
              <p className=" b3">คณะ</p>
            </div>
            <div className="flex flex-wrap gap-1 justify-center mt-2  max-w-[270px] ">
              <Image src={trend_02} alt="Background" className="w-full " />
            </div>
            <div className="b5 opacity-50 text-[#2322BC] mt-2 text-center">
              *ข้อบังคับการประชุมวุฒิสภากำหนดให้วุฒิสภา
              <br /> จัดตั้ง กมธ. สามัญ 27 คณะ ทั้งนี้มีการรวม
              <br /> กมธ. บางคณะเข้าด้วยกัน ทำให้เหลือเพียงแค่ 22 คณะ
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center flex px-5 md:px-0 flex-col  md:items-start md:flex-row gap-4 mb-10 ">
        <div className="flex md:flex-col space-x-3 md:space-x-0 items-center md:text-center w-fit ">
          <Image
            src={trending_list_01}
            alt="Background"
            className="w-[50px] md:w-[80px] "
          />
          <div className="text-[#2322BC] b3 font-bold my-3">
            กมธ. สามัญ จัดตั้งขึ้น
            <br className=" hidden md:inline" /> ไว้ถาวร
            <br /> ตลอดอายุของสภา
          </div>
        </div>
        <div className="flex md:flex-col space-x-3 md:space-x-0 items-center md:text-center w-fit ">
          <Image
            src={trending_list_02}
            alt="Background"
            className="w-[50px] md:w-[80px] "
          />
          <div className="text-[#2322BC] b3 my-3">
            <b>
              โครงสร้าง กมธ. ที่ใช้ในปัจจุบัน
              <br /> ยึดถือนโยบายหรือประเด็นเป็นหลัก
              <br />
            </b>
            จำนวนของ กมธ. จึงจะเป็นไปตาม
            <br /> นโยบาย หรือประเด็นที่เกิดขึ้น
            <br />
            ในแต่ละช่วงเวลา
          </div>
        </div>
        <div className="flex md:flex-col space-x-3 md:space-x-0 items-center md:text-center w-fit ">
          <Image
            src={trending_list_03}
            alt="Background"
            className="w-[50px] md:w-[80px] "
          />
          <div className="text-[#2322BC] b3 my-3">
            ‘กรรมาธิการ’ หรือ
            <b>
              สมาชิก กมธ.
              <br /> ต้องเป็นสมาชิกของแต่ละสภา
              <br /> คือ สส. หรือ สว. เท่านั้น
            </b>
          </div>
        </div>
        <div className="flex md:flex-col space-x-3 md:space-x-0 items-center md:text-center w-fit ">
          <Image
            src={trending_list_04}
            alt="Background"
            className="w-[50px] md:w-[80px] "
          />
          <div className="text-[#2322BC] b4 my-3">
            <b>
              โดยจำนวนกรรมาธิการของแต่ละ
              <br /> สภาจะแตกต่างกัน ดังนี้
            </b>
            <br />
            กมธ. สามัญของ สส. มีสมาชิก 15 คน
            <br /> กมธ. สามัญของ สว. มีสมาชิก 10-19 คน
          </div>
        </div>
      </div>

      {/* โครงสร้างปัจจุบัน */}

      <div className="text-[#2322BC] h7 font-black text-center mb-4">
        โครงสร้างของ กมธ.
        <br />
        ในปัจจุบันดูเหมือนว่าจะ
      </div>
      <div className=" flex max-w-[485px] space-x-5  justify-center md:space-x-10 mx-auto my-10 ">
        <Image
          src={list_01}
          alt="Background"
          className=" max-w-[87px] md:max-w-[141px] "
        />
        <Image
          src={list_02}
          alt="Background"
          className="max-w-[87px] md:max-w-[141px] "
        />
        <Image
          src={list_03}
          alt="Background"
          className="max-w-[87px] md:max-w-[141px]"
        />
      </div>
      <div className="b3 font-bold text-[#2322BC] text-center mt-4">
        <b>
          ชวนอ่าน 3 ข้อสังเกต เรื่องปัญหาโครงสร้างของ กมธ.
          <br /> ตามรัฐธรรมนูญ 2560{" "}
        </b>
        และความเป็นไปได้ในการ
        <br /> จัดวางโครงสร้าง กมธ. ในรูปแบบอื่น ๆ
      </div>

      {/* Disclaimer */}
      <p className=" mt-5 b5 border border-dashed rounded border-[#2322BC] mx-5 text-[#2322BC] w-fit md:mx-auto z-10 p-4">
        <b>Disclaimer:</b> ข้อมูลโครงสร้างของ กมธ. ในงานชิ้นนี้
        อ้างอิงจากงานศึกษา
        <br />
        เรื่องปัญหาการทําหน้าที่ของคณะกรรมาธิการในการแสวงห้าข้อเท็จจริงฯ:
        <br />
        ศึกษาเปรียบเทียบการทําหน้าที่ของคณะกรรมาธิการในประเทศสหรัฐอเมริกา
        <br /> โดย ผศ.ดร.พรสันต์ เลี้ยงบุญเลิศชัย
      </p>
    </div>
  );
};

export default Stucture;
