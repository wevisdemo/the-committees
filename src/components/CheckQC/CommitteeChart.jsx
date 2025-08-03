"use client";

import React, { useState } from "react";
import CommiteeDetails from "./CommiteeDetails";
import Image from "next/image";
import down_load_blue from "assets/images/down_load_blue.png";
import { ChevronRight } from "lucide-react";

export default function CommitteeChart({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="space-y-6 text-center  bg-white max-w-[690px] mx-auto w-full mt-6 rounded-lg">
      {!selectedItem ? (
        <div className=" py-5 px-1 md:px-5">
          <p className="h7 font-bold ">กมธ. เปิดข้อมูลอะไรอยู่บ้าง ?</p>
          <div className="text-[#2322BC] text-center space-y-2">
            <div className="flex items-center justify-center gap-3 b3">
              <div className="flex items-center gap-2">
                <span className="inline-block h-[15px] w-[16px]  bg-[#55C99C]" />
                <span className="b4">สส.</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-[15px] w-[16px]  bg-[#E89B55]" />
                <span className="b4">สว.</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-[#2322BC] b5">
              <span>
                <span className="font-bold">สีเข้ม</span> = ข้อมูลที่เปิดเผย
              </span>
              <span>
                <span className="font-bold">สีอ่อน</span> = ข้อมูลที่ไม่เปิดเผย
              </span>
            </div>
          </div>
          <div className=" flex justify-between b5 border-t border-t-[#A7A7E4] border-b border-b-[#A7A7E4] py-2 my-3">
            <p>ประเภทข้อมูล</p>
            <p>ดูรายชื่อ กมธ.</p>
          </div>
          {data.map((item, index) => {
            const repTotal =
              item.representatives.open + item.representatives.close;
            const repPercent = repTotal
              ? (item.representatives.open / repTotal) * 100
              : 0;

            const senTotal = item.senator.open + item.senator.close;
            const senPercent = senTotal
              ? (item.senator.open / senTotal) * 100
              : 0;

            return (
              <div
                key={index}
                className="border-b px-3  cursor-pointer border-b-[#A7A7E4] py-3   hover:bg-[#D3D3F2]"
                onClick={() => handleItemClick(item)}
              >
                <div className=" flex justify-between">
                  <h3 className="font-bold b4 text-left mb-2">{item.topic}</h3>
                  <ChevronRight className=" font-bold" size={30} />
                </div>
                <div className="flex">
                  <div className="flex-1">
                    <div className="w-full   h-6 relative flex justify-end">
                      <span className=" absolute  right-[5px] b5 top-[50%] translate-y-[-50%]">
                        {repPercent.toFixed(1)}%
                      </span>
                      <div
                        className="bg-[#55C99C] opacity-50 h-6 "
                        style={{ width: `${(100 - repPercent).toFixed(1)}%` }}
                      />
                      <div
                        className="bg-[#55C99C] h-6 "
                        style={{ width: `${repPercent.toFixed(1)}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex-1 ">
                    <div className="w-full   h-6 relative flex justify-end">
                      <span className=" absolute  left-[5px] b5 top-[50%] translate-y-[-50%]">
                        {senPercent.toFixed(1)}%
                      </span>
                      <div
                        className="bg-[#E89B55] h-6 "
                        style={{ width: `${senPercent.toFixed(1)}%` }}
                      />
                      <div
                        className="bg-[#E89B55] opacity-50 h-6 "
                        style={{ width: `${(100 - senPercent).toFixed(1)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="b5 underline mt-5 cursor-pointer">
            <Image
              src={down_load_blue}
              alt="Background"
              className="w-[10px] font-bold text-[#2322BC] inline-block mr-2"
            />
            ดาวน์โหลดข้อมูลทั้งหมด
          </div>
        </div>
      ) : (
        <>
          <CommiteeDetails
            selectedItem={selectedItem}
            clearSelection={() => setSelectedItem(null)}
          />
        </>
      )}
    </div>
  );
}
