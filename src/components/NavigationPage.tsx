import React from "react";
import Link from "next/link";

const NavigationPage = () => {
  return (
    <div id="navigation" className="component">
      <div className=" flex space-x-3">
        <Link href="/OpenHouse">เปิดบ้าน</Link>
        <Link href="/CheckQC">เช็ก QC</Link>
        <Link href="/Trending">ถูกพูดถึง</Link>
      </div>
    </div>
  );
};

export default NavigationPage;
