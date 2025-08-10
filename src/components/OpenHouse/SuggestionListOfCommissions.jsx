"use client";

import { useState, useRef, useEffect } from "react";
import groupCommittee from "@/app/utils/groupCommittee";

export default function SuggestionListOfCommissions({
  commissions,
  setCommissions,
  commissionsData,
  setOptions,
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const filtered = groupCommittee(commissionsData).filter((c) =>
    c.committee.toLowerCase().includes(commissions.toLowerCase())
  );

  // ✅ Handle click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="w-full max-w-md border  shadow-md bg-white relative rounded-full"
      ref={wrapperRef}
    >
      <div className="flex items-center  p-2 bg-[#2322BC] text-white rounded-full">
        <input
          type="text"
          placeholder="พิมพ์/เลือกชื่อ กมธ.ที่คุณสนใจ"
          value={commissions}
          onChange={(e) => setCommissions(e.target.value)}
          onFocus={() => setOpen(true)}
          className="w-full outline-none px-2 py-1 text-sm "
        />
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="ml-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-white border border-t-0 rounded-b-md  rounded-t-lg shadow-md z-10 mt-1">
          <div className="grid grid-cols-[1fr_auto] px-4 py-2 text-xs font-bold  border-b bg-[#2322BC] text-white b5  rounded-t-lg">
            <div className=" text-start">ชื่อ กมธ.</div>
            <div>การประชุม (ครั้ง)</div>
          </div>

          <div className="max-h-72 overflow-y-auto">
            {filtered.map((c, idx) => (
              <div
                key={idx}
                className="grid grid-cols-[1fr_auto] px-4 py-2 hover:bg-purple-50 cursor-pointer border-b text-sm"
                onClick={() => {
                  setCommissions(c.committee);
                  setOptions(c.house);
                  setOpen(false);
                }}
              >
                <div className=" text-start">{c.committee}</div>
                <div className="flex flex-col items-center gap-1">
                  <span className=" b4 text-[#2322BC]">{c.sum}</span>

                  <div
                    className={` ${
                      c.house === "สส." ? "bg-[#55C99C]" : "bg-[#E2822B]"
                    } border-l-[2px] px-2 ml-2 border-l-[#2322BC]`}
                  >
                    {c.house}
                  </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="p-4 text-center text-gray-500 text-sm">
                ไม่พบผลลัพธ์
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
