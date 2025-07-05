import React from "react";
import Link from "next/link";

const NavigationPage = () => {
  return (
    <div id="navigation" className="component">
      <div className=" flex space-x-3">
        <Link href="/OpenHouse">เปิดบ้าน</Link>
        <div>เช็ก QC</div>
        <div>ถูกพูดถึง</div>
      </div>
    </div>
  );
};

export default NavigationPage;
