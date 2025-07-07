import React from "react";
import CardSlide from "./CardSlide";
import NavigationPage from "./NavigationPage";

function IntroLandingPage() {
  return (
    <>
      <div className=" component h6 font-black">
        เค้าว่ากันว่า
        <br /> สภาใหญ่ใช้ออกสื่อแต่ดีลลับจับมือ
        <br />
        คือการประชุมคณะกรรมาธิการ ?
      </div>
      <div className="component">Look Through</div>
      <div className="component">
        หากย้อนดูศึกชิงเก้าอี้ ประธานคณะกรรมาธิการ หรือ 'กมธ.' ระหว่าง
      </div>
      <CardSlide />
      <div className="component">
        ศึกแห่งศักดิ์ศรีนี้สะท้อนให้เห็นอย่างชัดเจนว่า  กมธ. มีความสำคัญสุด ๆ
        ในฐานะกลไก ที่ตอบสนองภารกิจนิติบัญญัติ รวมถึง การผลักดันวาระต่าง ๆ
        (อันซ่อนเร้น) ที่พรรคการเมืองต้องการให้เกิดขึ้นในรัฐสภา
      </div>
      <NavigationPage />
    </>
  );
}

export default IntroLandingPage;
