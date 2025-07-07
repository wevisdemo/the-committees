"use client";

import React, { useState } from "react";
import part_1 from "../../../public/data/the_committees_part_1_data.json";
import SuggestionListOfCommissions from "./SuggestionListOfCommissions";
import SuggestionListOfKeyWord from "./SuggestionListOfKeyWord";
import filterByCommitteeAndKeyword from "@/app/utils/filterByCommitteeAndKeyword";
import ExpandCard from "./ExpandCard";
const SurveyPage = () => {
  const [commissions, setCommissions] = useState("");
  const [keywords, setKeywords] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);
  const filteredData = filterByCommitteeAndKeyword(
    part_1,
    commissions,
    keywords
  );
  const visibleData = filteredData.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="bg-[#AAE4CD] text-[#2322BC] ">
      <div className=" py-8 text-center">
        <div className="   h7 font-black">
          <p>สำรวจและตรวจสอบ </p>
          <p>ประเด็นที่ กมธ. ผลักดัน ในช่วง 2 ปีที่ผ่านมา</p>
        </div>
        <p className="b4">ตั้งแต่กรกฎาคม 2566 - พฤษภาคม 2568</p>
        <div className="b5 mt-2">
          <span className="font-bold">Disclaimer:</span>{" "}
          ข้อมูลส่วนนี้เก็บศึกษาจากเอกสารบันทึกการประชุมของ กมธ. สามัญ
          <br />
          ในสมัยสภาผู้แทนราษฎรไทย ชุดที่ 26 และ วุฒิสภา ชุดที่ 13
        </div>
        <p className=" b5 mt-6">เลือกวิธีดูข้อมูล กมธ.</p>
      </div>
      <div className=" mx-auto container flex  flex-row  bg-primary space-x-1 justify-center h-max ">
        <div className="flex flex-col max-w-[330px] flex-1 card-sticky  pt-6 h-fit ">
          <div className="flex flex-col gap-4 bg-[#D3D3F2] p-6 border border-[#2322BC]  rounded-lg text-center">
            <p className=" h7 font-bold">เลือกสำรวจราย กมธ.</p>
            <SuggestionListOfCommissions
              commissions={commissions}
              setCommissions={setCommissions}
              commissionsData={filteredData}
            />
            <p className=" h7 font-bold">เลือกสำรวจประเด็น กมธ.</p>
            <p className="b5">เลือกจากประเด็นดัง</p>
            <div>keywords list</div>
            <p className="b5">หรือมีประเด็นในใจที่อยากสำรวจ</p>
            <SuggestionListOfKeyWord
              keywords={keywords}
              setKeywords={setKeywords}
              commissionsData={filteredData}
            />
          </div>
          <div>
            <h2>Selected Commission:</h2>
            <p>{commissions}</p>
            <h2>Selected Keywords:</h2>
            <p>{keywords}</p>
          </div>
        </div>
        <div className="flex-2 max-w-[690px] flex flex-col gap-4 bg-[#FEF5CD] border border-[#2322BC] rounded-lg mt-6 pb-6 ">
          <div className="card-sticky  h-fit py-6 bg-[#FEF5CD] w-full justify-between rounded-lg flex px-6 ">
            <p>ประชุมครั้งที่</p>
            <p>หัวข้อการประชุม</p>
            <p>หน้าเว็บ</p>
          </div>
          {visibleData.map((item, index) => (
            <div key={index} className="px-6 ">
              <ExpandCard item={item} />
            </div>
          ))}
          {visibleCount < filteredData.length && (
            <button
              onClick={handleLoadMore}
              className="mt-4 bg-primary  px-4 py-2 rounded hover:bg-primary/80 transition"
            >
              + โหลดเพิ่มเติม
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SurveyPage;
