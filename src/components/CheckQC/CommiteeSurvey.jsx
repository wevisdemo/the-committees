"use client";

import React, { useState } from "react";
import the_committees_part_2_dropdown from "../../../public/data/the_committees_part_2_dropdown.json";
import { ChevronDown, ChevronUp } from "lucide-react";

const CommiteeSurvey = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("เว็บไซต์และข้อมูลทั่วไป");

  return (
    <div className="component flex flex-col ">
      <div>กมธ. ยังทำหน้าที่ เปิดเผยข้อมูล ‘เหล่านี้’ ได้ไม่ดีพอ ?</div>
      <div className=" bg-white  max-w-[540px] w-full b rounded-[10px] p-3 border border-[#2322BC]  relative">
        <div className=" bg-[#2322BC] rounded-[10px] p-4">
          <label className="block text-white b4 mb-2 font-bold">
            กดเลือกสำรวจอีก 12 ประเภทข้อมูล
          </label>
          <div className="w-full relative max-w-lg text-left mx-auto mt-5">
            <div
              className="relative bg-[#AAE4CD] rounded-md cursor-pointer px-4 py-2 b4 font-bold text-blue-[#2322BC]"
              onClick={() => setOpen(!open)}
            >
              {selected}
              {open ? (
                <ChevronUp className="absolute right-3 top-2.5 h-5 w-5 text-blue-900" />
              ) : (
                <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-blue-900" />
              )}
              {open && (
                <ul className="bg-white border border-blue-300 mt-1 left-0 rounded-md shadow-lg max-h-72 overflow-auto absolute w-full top-[100%]">
                  {Object.keys(the_committees_part_2_dropdown).map(
                    (key, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 text-blue-800 hover:bg-blue-100 cursor-pointer border-b border-blue-100 last:border-b-0"
                        onClick={() => {
                          setSelected(key);
                          setOpen(false);
                        }}
                      >
                        {key}
                      </li>
                    )
                  )}
                </ul>
              )}
            </div>
            <div
              className=" bg-[#AAE4CD] mt-3 rounded-[10px] p-4 b5"
              dangerouslySetInnerHTML={{
                __html: the_committees_part_2_dropdown[selected],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommiteeSurvey;
