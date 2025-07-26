"use client";

import { useState } from "react";
import Image from "next/image";
import off from "assets/images/off.png";
import on from "assets/images/on.png";

export default function CommitteeFilter({ onChange }) {
  const [showRep, setShowRep] = useState(true);
  const [showSen, setShowSen] = useState(true);
  const [showOpen, setShowOpen] = useState(true);
  const [showClose, setShowClose] = useState(true);

  const handleChange = (key) => {
    const updated = {
      showRep,
      showSen,
      showOpen,
      showClose,
      [key]: !eval(key),
    };
    if (key === "showRep") updated.showRep = !showRep;
    if (key === "showSen") updated.showSen = !showSen;
    if (key === "showOpen") updated.showOpen = !showOpen;
    if (key === "showClose") updated.showClose = !showClose;

    setShowRep(updated.showRep);
    setShowSen(updated.showSen);
    setShowOpen(updated.showOpen);
    setShowClose(updated.showClose);

    if (onChange) onChange(updated);
  };

  return (
    <div className="grid max-w-[360px] text-[#2322BC] mx-auto grid-cols-2 gap-2 justify-center ">
      <button
        onClick={() => handleChange("showRep")}
        className={`px-4 py-1 rounded-lg border cursor-pointer  border-[#2322BC] flex-row flex justify-center items-center  ${
          showRep ? "bg-[#55C99C] " : "bg-white text-gray-500"
        }`}
      >
        {showRep ? (
          <Image
            src={on}
            alt="Background"
            className="w-[16px] text-[#2322BC] mr-2 "
          />
        ) : (
          <Image src={on} alt="off" className="w-[16px] text-[#2322BC] mr-2" />
        )}

        <p>สส.</p>
      </button>
      <button
        onClick={() => handleChange("showSen")}
        className={`px-4 py-1 rounded-lg border cursor-pointer  border-[#2322BC] flex-row flex justify-center items-center  ${
          showSen ? "bg-[#E89B55] " : "bg-white text-gray-500"
        }`}
      >
        {showSen ? (
          <Image
            src={on}
            alt="Background"
            className="w-[16px] text-[#2322BC] mr-2 "
          />
        ) : (
          <Image src={on} alt="off" className="w-[16px] text-[#2322BC] mr-2 " />
        )}

        <p>สว.</p>
      </button>
      <button
        onClick={() => handleChange("showOpen")}
        className={`px-4 py-1 rounded-lg border flex-row flex justify-center items-center cursor-pointer  border-[#2322BC]  hover:bg-[#D3D3F2]`}
      >
        {showOpen ? (
          <Image
            src={on}
            alt="Background"
            className="w-[16px] text-[#2322BC] mr-2 "
          />
        ) : (
          <Image src={off} alt="off" className="w-[16px] text-[#2322BC] mr-2" />
        )}
        <p>เปิดเผยข้อมูล</p>
      </button>
      <button
        onClick={() => handleChange("showClose")}
        className={`px-4 py-1 rounded-lg border flex-row flex justify-center items-center cursor-pointer  border-[#2322BC] hover:bg-[#D3D3F2]`}
      >
        {showClose ? (
          <Image
            src={on}
            alt="Background"
            className="w-[16px] text-[#2322BC] mr-2 "
          />
        ) : (
          <Image src={off} alt="off" className="w-[16px] text-[#2322BC] mr-2" />
        )}
        <p>ไม่เปิดเผยข้อมูล</p>
      </button>
    </div>
  );
}
