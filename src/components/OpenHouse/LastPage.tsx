import Link from "next/dist/client/link";
import React from "react";

const LastPage = () => {
  return (
    <div className="component flex flex-col items-center justify-center space-y-4">
      <p className="b2">
        จากข้อมูล
        <br /> ที่เราชวนคุณตรวจสอบ
        <br />
        และเปรียบเทียบนี้
      </p>
      <Link
        href="/#navigation"
        className="bg-[#FEF5CD] text-[#2322BC] border border-[#2322BC] px-4 py-2 rounded-full hover:bg-[#E6E6E6] transition-colors"
      >
        กลับไปที่สารบัญ
      </Link>
    </div>
  );
};

export default LastPage;
