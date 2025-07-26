"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import open from "assets/images/open.png";
import close from "assets/images/close.png";

export default function CommitteeList({ data }) {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? data?.lists : data?.lists?.slice(0, 10); // default โชว์ 6 อันแรก

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
          เปิด {data?.open ?? 0} / ไม่เปิด {data?.close ?? 0}
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
            <p
              className={`max-w-[544px] mb-1 ${!item.open ? "opacity-50" : ""}`}
            >
              {item.title}
            </p>

            {item.open ? (
              <Image
                src={open}
                alt="Background"
                className="w-[44px] h-[18px]"
              />
            ) : (
              <Image
                src={close}
                alt="Background"
                className="w-[55px] h-[18px] "
              />
            )}
          </div>
          <div className="flex  space-x-2">
            <a href={item.site} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 text-[#2322BC]" />
            </a>
          </div>
        </div>
      ))}

      {(data?.lists?.length ?? 0) - (visibleItems?.length ?? 0) > 0 ? (
        <button
          onClick={handleToggle}
          className="mt-4 w-full text-center text-[#2322BC] underline b5 cursor-pointer"
        >
          {showAll
            ? "ซ่อนรายการ"
            : `ดูอีก ${
                (data?.lists?.length ?? 0) - (visibleItems?.length ?? 0)
              } กมธ. ที่เหลือ +`}
        </button>
      ) : (
        <div className="b5 text-[#2322BC] mt-5">- ไม่มีข้อมูล -</div>
      )}
    </div>
  );
}
