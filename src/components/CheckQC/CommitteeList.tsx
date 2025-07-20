"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react"; // ใช้ icon ถ้าใช้ lucide-react หรือปรับเป็นของคุณ

export default function CommitteeList({ data }) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? data?.lists : data?.lists.slice(0, 10); // default โชว์ 6 อันแรก

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="bg-white max-w-[690px] mx-auto w-full my-6 rounded-lg">
      <div
        className={`flex justify-between items-center b5 pb-2  ${
          data?.title === "สส." ? "bg-[#55C99C]" : "bg-[#E89B55]"
        } px-7 py-3`}
      >
        <p>รายชื่อ กมธ. ประเภท สส.</p>
        <p>
          เปิด {data?.open} / ไม่เปิด {data?.close}
        </p>
      </div>

      {visibleItems?.map((item, idx) => (
        <div
          key={idx}
          className={`flex justify-between items-end p-2 px-7 border-b  ${
            data?.title === "สส." ? "bg-[#D5F1E6]" : "bg-[#F9E6D5]"
          }`}
        >
          <div className=" text-start">
            <p className="max-w-[544px]">{item.title}</p>
            <span
              className={`px-2 py-0.5 rounded text-xs font-medium ${"bg-[#E5EAF0] text-[#65707A]"}`}
            >
              {item.open ? "เปิด" : "ไม่เปิด"}
            </span>
          </div>
          <div className="flex  space-x-2">
            <a href={item.site} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 text-[#65707A]" />
            </a>
          </div>
        </div>
      ))}

      <button
        onClick={handleToggle}
        className="mt-4 w-full text-center text-[#2461A4] underline"
      >
        {showAll
          ? "ซ่อนรายการ"
          : `ดูอีก ${
              data?.lists.length - visibleItems?.length
            } กมธ. ที่เหลือ +`}
      </button>
    </div>
  );
}
