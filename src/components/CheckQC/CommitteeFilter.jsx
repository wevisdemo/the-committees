import { useState } from "react";

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
    <div className="grid max-w-[360px] text-[#2322BC] mx-auto grid-cols-2 gap-2 justify-center">
      <button
        onClick={() => handleChange("showRep")}
        className={`px-4 py-2 rounded border  border-[#2322BC]  ${
          showRep ? "bg-[#55C99C] " : "bg-white text-gray-500"
        }`}
      >
        ✅ สส.
      </button>
      <button
        onClick={() => handleChange("showSen")}
        className={`px-4 py-2 rounded border  border-[#2322BC]  ${
          showSen ? "bg-[#E89B55] " : "bg-white text-gray-500"
        }`}
      >
        ✅ สว.
      </button>
      <button
        onClick={() => handleChange("showOpen")}
        className={`px-4 py-2 rounded border  border-[#2322BC] ${
          showOpen ? "bg-blue-100 text-gray-500" : "bg-white "
        }`}
      >
        เปิดเผยข้อมูล
      </button>
      <button
        onClick={() => handleChange("showClose")}
        className={`px-4 py-2 rounded border  border-[#2322BC] ${
          showClose ? "bg-gray-200 text-gray-500" : "bg-white "
        }`}
      >
        ไม่เปิดเผยข้อมูล
      </button>
    </div>
  );
}
