import React from "react";
import CommitteeChart from "./CommitteeChart";
import part_2 from "public/data/the_committees_part_2_data.json";

const SurveyPage = () => {
  return (
    <div className="  flex flex-col items-center justify-center p-4">
      <p className=" b5  text-center">
        <span className="font-bold">Disclaimer: </span>
        ข้อมูลนี้เก็บศึกษาและตั้งข้อสังเกตโดย WeVis ซึ่งรวบรวมเฉพาะ
        <br />
        คณะกรรมาธิการสามัญของรัฐสภาโดยไม่รวมถึงคณะกรรมาธิการวิสามัญ 
        <br />
        อัปเดตล่าสุดเมื่อเดือนมิถุนายน 2568
      </p>
      <div id="survey-container" className="flex justify-center w-full">
        <CommitteeChart data={part_2} />
      </div>
    </div>
  );
};

export default SurveyPage;
