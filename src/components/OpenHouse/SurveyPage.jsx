"use client";

import React, { useState } from "react";
import Image from "next/image";
import part_1 from "public/data/the_committees_part_1_data.json";
import SuggestionListOfCommissions from "./SuggestionListOfCommissions";
import SuggestionListOfKeyWord from "./SuggestionListOfKeyWord";
import filterByCommitteeAndKeyword from "@/app/utils/filterByCommitteeAndKeyword";
import ExpandCard from "./ExpandCard";
import { ArrowDown, ArrowDownToLine } from "lucide-react";
import summarizeKeywords from "@/app/utils/summarizeKeywords";
import clear from "assets/images/clear.png";

const SurveyPage = ({ onOpen }) => {
  const [commissions, setCommissions] = useState("");
  const [keywords, setKeywords] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);
  const filteredData = filterByCommitteeAndKeyword(
    part_1,
    commissions,
    keywords
  );
  const summarize = summarizeKeywords(filteredData);
  const filtered = summarize.filter((c) =>
    c.keyword.toLowerCase().includes(keywords.toLowerCase())
  );

  const visibleData = filteredData.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="bg-[#2322BC] text-white py-3 white_manu">
      <div className=" py-8 text-center white_manu">
        <div className="   h7 font-black">
          <p>สำรวจและตรวจสอบ </p>
          <p>
            ประเด็นที่ กมธ. ผลักดัน
            <br className=" md:hidden block" /> ในช่วง 2 ปีที่ผ่านมา
          </p>
        </div>
        <p className="b4">ตั้งแต่กรกฎาคม 2566 - พฤษภาคม 2568</p>
        <div className=" px-10">
          <div className="b5 mt-2 border border-white border-dashed w-fit mx-auto py-3 px-5 rounded">
            <span className="font-bold">Disclaimer:</span>{" "}
            ข้อมูลส่วนนี้เก็บศึกษาจากเอกสาร
            <br className=" md:hidden" />
            บันทึกการประชุมของ กมธ. สามัญ
            <br className=" hidden md:block" />
            ในสมัย <br className=" md:hidden" />
            สภาผู้แทนราษฎรไทย ชุดที่ 26 และ วุฒิสภา ชุดที่ 13
            <p className=" underline cursor-pointer mt-2" onClick={onOpen}>
              อ่านเพิ่มเติม
            </p>
          </div>
        </div>
        <p className=" b5 mt-6">เลือกวิธีดูข้อมูล กมธ.</p>
      </div>
      <div className=" mx-auto container flex flex-col  md:flex-row relative bg-primary md:space-x-1 justify-center h-max ">
        <div className="flex flex-col md:max-w-[330px] flex-1  md:sticky md:top-0 pt-6 h-fit ">
          <div className="flex flex-col gap-4 bg-[#D3D3F2] p-6 border text-[#2322BC] border-[#2322BC]  rounded-lg text-center">
            <p className=" h7 font-bold">เลือกสำรวจราย กมธ.</p>
            <div className="flex items-center">
              <SuggestionListOfCommissions
                commissions={commissions}
                setCommissions={setCommissions}
                commissionsData={filteredData}
              />
              {commissions && (
                <Image
                  src={clear}
                  onClick={() => setCommissions("")}
                  alt="Background"
                  className="w-[25px] h-[25px] ml-2 cursor-pointer"
                />
              )}
            </div>
            <p className=" h10 font-bold">เลือกสำรวจประเด็น กมธ.</p>
            <div className=" flex space-x-1 items-center mx-auto">
              <p className="b5">เลือกจากประเด็นดัง </p>
              <ArrowDown className="w-[10px] text-[#2322BC]" />
            </div>
            <div className=" flex space-y-2 space-x-2 flex-wrap justify-center">
              {summarize.slice(0, 5).map((key, index) => (
                <div
                  onClick={() => setKeywords(key.keyword)}
                  key={index}
                  className=" cursor-pointer b3 bg-white border border-[#2322BC] h-max px-3 py-1 rounded-full"
                >
                  {key.keyword} ({key.sum.toLocaleString("en-US")})
                </div>
              ))}
            </div>
            <div className=" flex space-x-1 items-center mx-auto">
              <p className="b5">หรือมีประเด็นในใจที่อยากสำรวจ </p>
              <ArrowDown className="w-[10px] text-[#2322BC]" />
            </div>
            <div className="flex items-center">
              <SuggestionListOfKeyWord
                keywords={keywords}
                setKeywords={setKeywords}
                filtered={filtered}
              />
              {keywords && (
                <Image
                  src={clear}
                  onClick={() => setKeywords("")}
                  alt="Background"
                  className="w-[25px] h-[25px] ml-2 cursor-pointer"
                />
              )}
            </div>
            <div className="b5 cursor-pointer mt-2 underline flex justify-center items-center space-x-1">
              <ArrowDownToLine className="w-[10px] text-[#2322BC]" />
              <p>ดาวน์โหลดเฉพาะข้อมูลที่ค้นหา </p>
            </div>
          </div>
          {/* //// */}
          <div className=" bg-white text-[#2322BC] rounded-lg mt-1 py-4 text-center">
            <p className="b3">ดูข้อมูลการประชุม</p>
            <p className=" h6 font-black">
              {commissions || "ทุกคณะกรรมาธิการ"}
            </p>
            <p className="b3">ในประเด็น</p>
            <p className="h6 font-black">{keywords || "ทุกประเด็น"}</p>
            <p className="b3">
              พบการประชุม {filteredData.length.toLocaleString("en-US")} ครั้ง
            </p>
            <div className="flex space-x-1 mt-2 justify-center">
              {filteredData.find((data) => data.house === "สส.") && (
                <div className=" bg-[#55C99C] border-l-[2px] px-2 border-l-[#2322BC]">
                  {"สส."}
                </div>
              )}
              {filteredData.find((data) => data.house === "สว.") && (
                <div className=" bg-[#E2822B] border-l-[2px] px-2 border-l-[#2322BC]">
                  {"สว."}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* //// */}
        <div className="flex-2 relative max-w-[690px] flex flex-col gap-4 bg-[#FEF5CD] border border-[#2322BC] rounded-lg mt-6 pb-6 text-[#2322BC] ">
          <div className="card-sticky  h-fit py-2 md:py-6 bg-[#FEF5CD] border-b border-b-[#FBCB03] w-full justify-between rounded-t-lg flex px-6 ">
            <p>ประชุมครั้งที่</p>
            <p>หัวข้อการประชุม</p>
            <p>หน้าเว็บ</p>
          </div>
          {visibleData.map((item, index) => (
            <div key={index} className=" px-2 md:px-6 ">
              <ExpandCard item={item} />
            </div>
          ))}
          {visibleCount < filteredData.length && (
            <button
              onClick={handleLoadMore}
              className="mt-4 bg-primary  px-4 py-2 rounded hover:bg-primary/80 transition"
            >
              ดูอีก{" "}
              {(filteredData.length - visibleCount).toLocaleString("en-US")}{" "}
              การประชุมที่เหลือ +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;
