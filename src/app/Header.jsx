"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import wevis_logo from "assets/images/wevis_logo.svg";
import burger from "assets/images/burger.png";
import wevis_white from "assets/images/wevis_white.svg";
import burger_white from "assets/images/burger_white.png";
import ReactMarkdown from "react-markdown";
import { XIcon } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [manuColorBlue, setManuColorBlue] = useState(true);
  const [manuColorWhite, setManuColorWhite] = useState(false);
  const [isManu, setIsManu] = useState(false);

  const manu = [
    { title: "หน้าแรก", link: "/" },
    { title: "หน้าสารบัญ", link: "/" },
    { title: "เปิดบ้าน กมธ. แต่ละวัน\n\nทำอะไรบ้าง ?", link: "/" },
    { title: "เช็ก QC กมธ. เปิดข้อมูลอะไร\n\nให้เราดู ?", link: "/" },
    { title: "กมธ. รุ่นนี้ ถูกพูดถึงอย่างไร ?", link: "/" },
    { title: "About Us", link: "/" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const aElem = document.getElementById("Page-2");
      const actionPage = document.getElementById("action_page");
      const actionPage1 = document.getElementById("action_page_1");
      const navigation = document.getElementById("navigation");
      if (!aElem) return;
      const rect = aElem.getBoundingClientRect();
      const actionRect = actionPage.getBoundingClientRect();
      const actionRect1 = actionPage1.getBoundingClientRect();
      const navigationRect = navigation.getBoundingClientRect();
      // ถ้า top ของ element a อยู่บนสุดของ viewport (หรือสูงกว่า)
      setScrolled(rect.top <= 0);

      if (
        (navigationRect.top <= 0 && navigationRect.bottom > 0) ||
        (rect.top <= 0 && rect.bottom > 0)
      ) {
        setManuColorWhite(false);
        setManuColorBlue(true);
      }
      if (
        (actionRect.top <= 0 && actionRect.bottom > 0) ||
        (actionRect1.top <= 0 && actionRect1.bottom > 0)
      ) {
        setManuColorWhite(true);
        setManuColorBlue(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 left-0 z-50 transition-colors flex justify-between text-[#2322BC] b4 px-5 py-2 duration-300 ${
        scrolled ? "" : "bg-[#FEF5CD] "
      }`}
    >
      {manuColorBlue && (
        <>
          <Image src={wevis_logo} alt="Background" className="h-[37px] " />
          <Image
            src={burger}
            alt="Background"
            className="w-[59px] cursor-pointer"
            onClick={() => setIsManu(!isManu)}
          />
        </>
      )}
      {manuColorWhite && (
        <>
          <Image src={wevis_white} alt="Background" className="h-[37px] " />
          <Image
            src={burger_white}
            alt="Background"
            className="w-[59px] cursor-pointer"
            onClick={() => setIsManu(!isManu)}
          />
        </>
      )}
      {isManu && (
        <div className=" flex flex-col  absolute top-0 right-0 w-[305px] py-10 bg-white">
          <XIcon
            className=" text-[#2322BC] absolute top-0 font-bold right-0 m-2 w-[25px] h-[25px] cursor-pointer"
            onClick={() => setIsManu(!isManu)}
          />
          {manu.map((m, index) => (
            <div
              key={index}
              className={`py-5 border-t-[0.5px] hover:bg-[#D3D3F2] cursor-pointer border-t-[#2322BC] ${
                manu.length - 1 === index
                  ? " border-b-[0.5px] border-b-[#2322BC]"
                  : ""
              }`}
            >
              <div className=" px-3">
                <ReactMarkdown>{m.title}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
