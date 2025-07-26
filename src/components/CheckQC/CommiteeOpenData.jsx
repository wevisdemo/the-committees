"use client";

import React from "react";
import data from "public/data/the_committees_part_2_OpenDataSuggestion.json";
import Image from "next/image";
import head_question from "assets/images/head_question.png";
import uk from "assets/images/uk.png";
import aud from "assets/images/aud.png";
import glass from "assets/images/glass.png";
import qc_toppic_01 from "assets/images/qc_toppic_01.png";

const CommiteeOpenData = () => {
  const [toppic1, setToppic1] = React.useState(0);
  const [toppic2, setToppic2] = React.useState(0);

  function groupByTheme(data) {
    return data.reduce((acc, item) => {
      const theme = item.theme;
      if (!acc[theme]) {
        acc[theme] = [];
      }
      acc[theme].push(item);
      return acc;
    }, {});
  }
  return (
    <div className=" py-10 flex flex-col ">
      <Image
        src={head_question}
        alt="Background"
        className="max-w-[627px] mx-auto"
      />
      <div className=" max-w-[627px] mx-auto bg-white w-full rounded-b-[10px] px-10 py-4  text-center">
        <p className="b2 font-bold">
          นอกเหนือจากการเปิดข้อมูล
          <br /> กมธ. สามารถเพิ่มภาระรับผิดชอบ
          <br />
          (accountability)
          <br /> ในแนวทางไหนได้อีกบ้าง ?
        </p>
        <p className=" b4 mt-3">
          แม้จะยังไม่มีมาตรฐานสากล
          <br /> เรื่องภาระรับผิดชอบที่ กมธ. ต้องปฏิบัติ
          <br />
          แต่แนวทางการสร้างความรับผิดชอบของ
        </p>

        <div className=" flex justify-center mt-5 space-x-5">
          <div>
            <Image src={uk} alt="Background" className="max-w-[90px] mx-auto" />
            <p className="b4 font-bold">
              รัฐสภาสหราช
              <br /> อาณาจักร
            </p>
          </div>
          <div>
            <Image
              src={aud}
              alt="Background"
              className="max-w-[90px] mx-auto"
            />
            <p className="b4 font-bold">ออสเตรเลีย</p>
          </div>
        </div>
        <p className=" b4 mt-3">
          อาจเป็นตัวอย่างที่ดีที่ให้รัฐสภาไทย
          <br />
          ใช้เป็นแนวทางเพื่อเพิ่มความรับผิดชอบ
          <br /> ของ กมธ. ที่มากขึ้นได้
        </p>
        <Image
          src={glass}
          alt="Background"
          className="max-w-[300px] mt-5 mx-auto"
        />
        <Image
          src={qc_toppic_01}
          alt="Background"
          className="max-w-[420px] mt-10 mx-auto"
        />
        <div
          className="flex space-x-5  justify-center mt-10
         "
        >
          {groupByTheme(data)["กมธ. กับการมีส่วนร่วมของประชาชน"].map(
            (item, index) => (
              <div
                key={item.toppic}
                className=" b5 font-bold max-w-[90px] cursor-pointer bg-[#2322BC] pb-5 text-white p-3"
                onClick={() => setToppic1(index)}
              >
                <h3
                  className="font-bold"
                  dangerouslySetInnerHTML={{ __html: item.toppic }}
                ></h3>
              </div>
            )
          )}
        </div>
        <div className=" bg-[#FEF5CD]  text-[#2322BC] border border-[#2322BC] text-start py-15 px-10">
          <div>
            <div className="flex space-x-3  mb-5">
              <div className=" b4 font-bold min-w-[69px]">สหราชอาณาจักร</div>
              <div className="b5">
                {
                  groupByTheme(data)["กมธ. กับการมีส่วนร่วมของประชาชน"][toppic1]
                    .สหราชอาณาจักร
                }
              </div>
            </div>
            <div className="flex space-x-3 mb-5 border-t border-b border-[#F9E6D5] py-5">
              <div className=" b4 font-bold min-w-[69px]">ออสเตรเลีย</div>
              <div className="b5">
                {
                  groupByTheme(data)["กมธ. กับการมีส่วนร่วมของประชาชน"][toppic1]
                    .ออสเตรเลีย
                }
              </div>
            </div>
            <div className="flex space-x-3 ">
              <div className=" b4 font-bold min-w-[69px]">ไทย</div>
              <div className="b5">
                {
                  groupByTheme(data)["กมธ. กับการมีส่วนร่วมของประชาชน"][toppic1]
                    .ไทย
                }
              </div>
            </div>
          </div>
        </div>
        {/* //// */}
        <div
          className="flex space-x-5  justify-center mt-10
         "
        >
          {groupByTheme(data)["คุณภาพของข้อมูลเปิดที่ กมธ. ควรปฏิบัติ"].map(
            (item, index) => (
              <div
                key={item.toppic}
                className=" b5 font-bold max-w-[90px] cursor-pointer bg-[#2322BC] pb-5 text-white p-3"
                onClick={() => setToppic2(index)}
              >
                <h3
                  className="font-bold"
                  dangerouslySetInnerHTML={{ __html: item.toppic }}
                ></h3>
              </div>
            )
          )}
        </div>

        <div className=" bg-[#FEF5CD]  text-[#2322BC] border border-[#2322BC] text-start py-15 px-10">
          <div>
            <div className="flex space-x-3  mb-5">
              <div className=" b4 font-bold min-w-[69px]">สหราชอาณาจักร</div>
              <div className="b5">
                {
                  groupByTheme(data)["คุณภาพของข้อมูลเปิดที่ กมธ. ควรปฏิบัติ"][
                    toppic2
                  ].สหราชอาณาจักร
                }
              </div>
            </div>
            <div className="flex space-x-3 mb-5 border-t border-b border-[#F9E6D5] py-5">
              <div className=" b4 font-bold min-w-[69px]">ออสเตรเลีย</div>
              <div className="b5">
                {
                  groupByTheme(data)["คุณภาพของข้อมูลเปิดที่ กมธ. ควรปฏิบัติ"][
                    toppic2
                  ].ออสเตรเลีย
                }
              </div>
            </div>
            <div className="flex space-x-3 ">
              <div className=" b4 font-bold min-w-[69px]">ไทย</div>
              <div className="b5">
                {
                  groupByTheme(data)["คุณภาพของข้อมูลเปิดที่ กมธ. ควรปฏิบัติ"][
                    toppic2
                  ].ไทย
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommiteeOpenData;
