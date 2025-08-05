"use client";

import Link from "next/dist/client/link";
import React from "react";
import Image from "next/image";
import last_trending from "assets/images/last_trending.png";

const LastPage = () => {
  return (
    <div className="component bg-[#FEF5CD] text-[#2322BC] relative flex flex-col items-center justify-center space-y-4">
      <p className="b2 z-10">
        <b>
          {" "}
          การเข้าใจโครงสร้าง กมธ.
          <br className=" md:hidden" /> เป็นจุดเริ่มต้นสำคัญที่ทำให้เรา
          <br />
          สามารถทบทวนว่าในปัจจุบัน
          <br className=" md:hidden" /> กมธ. มีช่องโหว่ตรงไหน
          <br />
          ที่ควรค่าแก่การพิจารณาปรับปรุง
          <br className=" md:hidden" /> เพื่อให้ กมธ. ทำงานได้ดีขึ้น
          <br />
        </b>
        มีหลักการและแนวคิดที่สอดคล้อง
        <br className=" md:hidden" />
        กับบริบทที่ควรจะเป็น
      </p>
      <Image
        src={last_trending}
        alt="Background"
        className=" md:w-full scale-150 md:scale-100 translate-y-[-20%]"
      />

      <p className="b2  mt-4  z-10">
        ในระยะยาว หากทำให้ กมธ.
        <br className=" md:hidden" /> มีระบบที่ ‘เวิร์ก’ ขึ้นได้ ก็จะช่วยให้
        <br />
        <b>
          {" "}
          รัฐสภาไทยมีกลไกที่ตอบสนอง
          <br className=" md:hidden" />
          ภารกิจด้านนิติบัญญัติ ให้ตรงกับ
          <br />
          ความต้องการของประชาชน
          <br className=" md:hidden" />
          ได้ดียิ่งขึ้น
        </b>
      </p>
      <Link
        href="/#navigation"
        className="bg-[#FEF5CD] z-10  border border-[#2322BC] px-4 py-2 rounded-full hover:bg-[#E6E6E6] transition-colors"
      >
        กลับไปที่สารบัญ
      </Link>
    </div>
  );
};

export default LastPage;
