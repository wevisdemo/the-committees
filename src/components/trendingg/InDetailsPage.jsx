"use client";

import Image from "next/image";
import React, { useState } from "react";
import data from "/public/data/the_committees_part_3_data.json";
import { TriangleAlert } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import header_paper from "assets/images/header_paper.png";
import toppic_01 from "assets/images/toppic_01.png";
import toppic_02 from "assets/images/toppic_02.png";
import toppic_03 from "assets/images/toppic_03.png";

const InDetailsPage = () => {
  const [openDesc, setOpenDesc] = useState({});

  const handleToggle = (index, conjIndex) => {
    setOpenDesc((prev) => ({
      ...prev,
      [`${index}-${conjIndex}`]: !prev[`${index}-${conjIndex}`],
    }));
  };

  return (
    <div className="bg-[#FEF5CD] py-10 text-[#2322BC] relative px-5 ">
      {data.map((d, index) => (
        <div className=" py-10 flex flex-col items-center" key={index}>
          {/* กล่องเนื้อหา */}
          <div className="bg-white rounded-xl border border-[#2322BC] shadow-lg p-6 max-w-xl w-full flex flex-col items-center relative">
            <Image
              src={header_paper}
              alt="parliament"
              className=" absolute  top-0 translate-y-[-50%] scale-[100.35%] left-0 "
            />
            {/* รูปภาพ */}
            <div className="w-full flex justify-center mb-4 max-w-[606px] mx-auto">
              {index === 0 && (
                <Image src={toppic_01} alt="parliament" className=" w-full" />
              )}
              {index === 1 && (
                <Image src={toppic_02} alt="parliament" className=" w-full" />
              )}
              {index === 2 && (
                <Image src={toppic_03} alt="parliament" className=" w-full" />
              )}
            </div>

            <div className=" text-center b3 mb-1 flex items-center justify-center gap-1">
              <TriangleAlert className=" w-[20px] inline " />
              <span className=" mt-2"> ประเด็นที่ {index + 1}</span>
            </div>
            <div className=" text-center font-black h6 mb-1">{d.issue}</div>
            <div className=" text-center b3 mb-4">{d.topic}</div>
            <div className="b3 font-bold mb-6">
              {d.Conjunction[0].Conjunction}
            </div>
            <div className="w-full mb-3 relative">
              <div className="border relative  border-[#2322BC] rounded-lg pt-5   text-center  bg-white">
                <button className="w-full bg-[#2322BC] text-white rounded-full b4 max-w-[320px] absolute  top-0 translate-y-[-50%] translate-x-[-50%] left-[50%]  py-1 b4">
                  {d.Conjunction[0].principle}
                </button>
                <div className=" p-3 b3">
                  <ReactMarkdown>{`${
                    d.Conjunction[0].option ?? ""
                  }`}</ReactMarkdown>
                </div>
                <div
                  onClick={() =>
                    handleToggle(index, d.Conjunction[0].principle)
                  }
                  className=" min-h-[48px]  space-y-5 flex-col py-3 px-5 justify-center bg-[#D3D3F2] rounded-b-lg b5 flex items-center  mt-1  cursor-pointer"
                >
                  {openDesc[`${index}-${d.Conjunction[0].principle}`] && (
                    <div className=" border-b pb-3 border-b-[#2322BC] border-dashed">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{`${
                        d.Conjunction[0].Description ?? ""
                      }`}</ReactMarkdown>
                    </div>
                  )}

                  <p>
                    {openDesc[`${index}-${d.Conjunction[0].principle}`]
                      ? "ซ่อนรายละเอียด -"
                      : "อ่านเพิ่มเติม +"}
                  </p>
                </div>
              </div>
            </div>

            <div className="b3 font-bold mb-6">
              {d.Conjunction[1].Conjunction}
            </div>
            <div className="w-full mb-3 relative">
              <div className="border relative  border-[#FBCB03] rounded-lg pt-5   text-center  bg-white">
                <button className="w-full bg-[#FBCB03] rounded-full max-w-[320px] b4 absolute  top-0 translate-y-[-50%] translate-x-[-50%] left-[50%]  py-1 b4">
                  <ReactMarkdown>{`${
                    d.Conjunction[1].principle ?? ""
                  }`}</ReactMarkdown>
                </button>
                <div className="p-3 b3">
                  <ReactMarkdown>{`${
                    d.Conjunction[1].option ?? ""
                  }`}</ReactMarkdown>
                </div>
                <div
                  onClick={() =>
                    handleToggle(index, d.Conjunction[1].principle)
                  }
                  className="  min-h-[48px] flex-col space-y-5  py-3 px-5 justify-center bg-[#FEF5CD] rounded-b-lg b5 flex items-center  mt-1  cursor-pointer"
                >
                  {openDesc[`${index}-${d.Conjunction[1].principle}`] && (
                    <div className=" border-b pb-3 border-b-[#2322BC] border-dashed">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{`${
                        d.Conjunction[1].Description ?? ""
                      }`}</ReactMarkdown>
                    </div>
                  )}
                  <p>
                    {openDesc[`${index}-${d.Conjunction[1].principle}`]
                      ? "ซ่อนรายละเอียด -"
                      : "อ่านเพิ่มเติม +"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InDetailsPage;
