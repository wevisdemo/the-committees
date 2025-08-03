"use client";
import React from "react";
import Image from "next/image";
import label_01 from "assets/images/label_01.png";
import house_01 from "assets/images/house_01.png";
import label_02 from "assets/images/label_02.png";
import house_02 from "assets/images/house_02.png";
import label_03 from "assets/images/label_03.png";
import ball_01 from "assets/images/ball_01.png";
import ball_02 from "assets/images/ball_02.png";

const YearPass = () => {
  return (
    <div className=" bg-[#2322BC] text-white  py-10 text-center white_manu">
      <p className=" h7 font-black">2 ปีที่ผ่านมา</p>
      <p className=" b2">(กรกฎาคม 2566 - พฤษภาคม 2568)</p>
      <Image
        src={label_01}
        alt="Background"
        className="  z-10 mx-auto h-[65px] object-cover md:w-full mt-5 bg-repeat-x bg-center"
      />
      <p className="b1 font-bold text-[#2BBB83] mt-5">กมธ.การอุตสาหกรรม</p>
      <p className=" b5">เป็น กมธ. ฝั่ง </p>
      <p className="b5">สส. ที่มีการประชุมมากที่สุด</p>
      <p className=" b3 font-bold">ที่ 87 ครั้ง</p>
      <div className="px-10">
        <Image
          src={house_01}
          alt="Background"
          className="  z-10 mx-auto w-full md:w-[396px] mt-5"
        />
        <div className="w-full md:w-[396px] bg-[#2BBB83] md:mx-auto px-5 py-4 b5 text-[#2322BC]">
          <p className=" b5">
            โดยประเด็นที่พูดคุยกัน
            <br />
            บ่อยครั้งมักเป็นเรื่อง
          </p>
          <div className="b3 font-bold bg-[#55C99C] rounded-full mx-auto py-1 w-fit px-3 mt-2">
            อุตสาหกรรม
          </div>
          <div className="flex space-x-2 justify-center w-full mt-2">
            <div className="b3 font-bold bg-[#55C99C] rounded-full w-fit px-3 py-1">
              ดูงาน
            </div>
            <div className="b3 font-bold bg-[#55C99C] w-fit px-3 rounded-full py-1">
              โรงงาน
            </div>
          </div>
        </div>
      </div>
      <Image
        src={label_02}
        alt="Background"
        className="  z-10 mx-auto h-[65px] object-cover md:w-full mt-5 bg-repeat-x bg-center"
      />
      <p className="b1 font-bold text-[#E2822B] mt-5">
        กมธ.ติดตาม
        <br />
        การบริหารงบประมาณ
      </p>
      <p className=" b5">เป็น กมธ. ฝั่ง สว. </p>
      <p className="b5">ที่มีการประชุมมากที่สุด</p>
      <p className=" b3 font-bold">ที่ 30 ครั้ง</p>
      <div className=" px-10">
        <Image
          src={house_02}
          alt="Background"
          className="  z-10 mx-auto w-full md:w-[396px] mt-5"
        />
        <div className=" w-full md:w-[396px] bg-[#E2822B] mx-auto px-5 py-4 b5 text-[#2322BC]">
          <p className=" b5">
            โดยประเด็นที่พูดคุยกัน
            <br />
            บ่อยครั้งมักเป็นเรื่อง
          </p>
          <div className="b3 font-bold bg-[#E89B55] rounded-full py-1 w-fit px-3 mx-auto mt-2">
            งบประมาณ
          </div>
          <div className="flex space-x-2 w-full justify-center mt-2">
            <div className="b3 font-bold bg-[#E89B55] rounded-full  w-fit px-3   py-1">
              ดูงาน
            </div>
            <div className="b3 font-bold bg-[#E89B55]  rounded-full w-fit px-3 py-1">
              เดินทาง
            </div>
          </div>
        </div>
      </div>
      <Image
        src={label_03}
        alt="Background"
        className="  z-10 mx-auto h-[65px] object-cover md:w-full mt-5 bg-repeat-x bg-center"
      />
      <div className=" b3 font-bold text-[#2BBB83] mt-5">
        5 คีย์เวิร์ดที่พบบ่อย
        <br /> ในบันทึกการประชุมของ กมธ. สส.
        <br /> ประกอบด้วย
      </div>
      <Image
        src={ball_01}
        alt="Background"
        className="  z-10 max-w-[260px] mt-5 mx-auto w-auto"
      />
      <div className=" b3 font-bold text-[#E2822B] mt-5">
        ในขณะที่บันทึกการประชุม
        <br />
        ของ กมธ. สว. มักพบคีย์เวิร์ดเหล่านี้
        <br />
        บ่อยครั้ง
      </div>
      <Image
        src={ball_02}
        alt="Background"
        className="  z-10 max-w-[260px] mt-5 mx-auto w-auto"
      />
    </div>
  );
};

export default YearPass;
