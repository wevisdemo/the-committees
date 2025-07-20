"use client";

import { useState, useRef, useEffect } from "react";

export default function SuggestionListOfKeyWord({
  keywords,
  setKeywords,
  filtered,
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

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
          placeholder=" พิมพ์/เลือกประเด็นที่คุณสนใจ"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          onFocus={() => setOpen(true)}
          className="w-full outline-none px-2 py-1 text-sm"
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
                  setKeywords(c.keyword);
                  setOpen(false);
                }}
              >
                <div className=" text-start">{c.keyword}</div>
                <div className="flex items-center gap-1">
                  <span className=" b4 text-[#2322BC]">{c.sum}</span>
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
