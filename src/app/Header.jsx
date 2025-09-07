"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import wevis_logo from "assets/images/wevis_logo.svg";
import burger from "assets/images/burger.png";
import wevis_white from "assets/images/wevis_white.svg";
import burger_white from "assets/images/burger_white.png";
import ReactMarkdown from "react-markdown";
import { XIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [isManu, setIsManu] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);

  const manu = [
    { title: "หน้าแรก", link: "/" },
    { title: "หน้าสารบัญ", link: "#navigation" },
    { title: "เปิดบ้าน กมธ. แต่ละวัน\n\nทำอะไรบ้าง ?", link: "/openhouse" },
    { title: "เช็ก QC กมธ. เปิดข้อมูลอะไร\n\nให้เราดู ?", link: "/checkqc" },
    { title: "กมธ. รุ่นนี้ ถูกพูดถึงอย่างไร ?", link: "/trending" },
    { title: "About Us", link: "/about" },
  ];

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      // เพิ่มเงื่อนไขป้องกัน scroll เล็กน้อย
      if (Math.abs(currentScrollY - lastScrollY) < 10) {
        return;
      }

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsManu(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }
  };
  const handleScroll = () => {
    const whiteSections = document.getElementsByClassName("white_manu");
    const isInWhiteSection = Array.from(whiteSections).some((section) => {
      const rect = section?.getBoundingClientRect();
      return rect?.top <= 0 && rect?.bottom > 0;
    });
    setIsDarkBg(isInWhiteSection);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY, controlNavbar]); // เพิ่ม dependencies

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest("#manu")
      ) {
        setIsManu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      id="manu"
      className={`sticky top-0 left-0 z-50 transition-colors items-center flex justify-between text-[#2322BC] b4 px-2 md:px-5 py-2 duration-300 ${"bg-transparent"} ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Image
        src={isDarkBg ? wevis_white : wevis_logo}
        alt="Background"
        className="h-[20px] md:h-[37px] w-auto transition-all duration-300"
      />
      <Image
        src={isDarkBg ? burger_white : burger}
        alt="Background"
        className="w-[40px] md:w-[59px] cursor-pointer transition-all duration-300"
        onClick={() => setIsManu(!isManu)}
      />
      {isManu && (
        <div
          className=" flex flex-col  absolute top-0 right-0 w-[305px] py-10 bg-white"
          ref={menuRef}
        >
          <XIcon
            className=" text-[#2322BC] absolute top-0 font-bold right-0 m-2 w-[25px] h-[25px] cursor-pointer"
            onClick={() => setIsManu(!isManu)}
          />
          {manu.map((m, index) => (
            <Link
              onClick={() => setIsManu(false)}
              href={m.link}
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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
