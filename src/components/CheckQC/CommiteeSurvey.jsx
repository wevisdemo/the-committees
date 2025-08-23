"use client";

import React, { useState } from "react";
import the_committees_part_2_dropdown from "public/data/the_committees_part_2_dropdown.json";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import lamp from "assets/images/lamp.png";
import base from "assets/images/base.png";
import keyboard from "assets/images/keyboard.png";

const CommiteeSurvey = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("เว็บไซต์และข้อมูลทั่วไป");

  return (
    <div className="flex items-center  justify-center text-center  flex-col px-1 ">
      <Image
        src={lamp}
        alt="Background"
        className=" max-w-[350px] md:max-w-[388px] mx-auto py-6"
      />
      <div className=" bg-white  max-w-[540px] mt-5 w-full  rounded-[10px] p-3 border border-[#2322BC]  relative">
        <div className=" bg-[#2322BC] rounded-[10px] p-4">
          <label className="block text-white b4 mb-2 font-bold">
            กดเลือกสำรวจอีก 12 ประเภทข้อมูล
          </label>
          <div className="w-full relative max-w-lg text-left mx-auto  mt-5">
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
            <div className=" bg-[#AAE4CD] mt-3 rounded-[10px] p-4 b5">
              <div
                dangerouslySetInnerHTML={{
                  __html: the_committees_part_2_dropdown[selected],
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={base}
        alt="Background"
        className="max-w-[228px] mx-auto pb-6"
      />
      <Image
        src={keyboard}
        alt="Background"
        className="md:max-w-[443px] mx-auto py-6"
      />
    </div>
  );
};

export default CommiteeSurvey;
