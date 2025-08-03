"use client";

import React from "react";
import data from "public/data/the_committees_part_2_OpenDataSuggestion.json";
import Image from "next/image";
import head_question from "assets/images/head_question.png";
import uk from "assets/images/uk.png";
import aus from "assets/images/aud.png";
import thai from "assets/images/thai.png";
import glass from "assets/images/glass.png";
import qc_toppic_01 from "assets/images/qc_toppic_01.png";
import qc_toppic_02 from "assets/images/qc_toppic_02.png";

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

  const displayToppic2 = (
    <div>
      <div className="flex space-x-3  mb-5">
        <div className=" b4 font-bold min-w-[69px]">
          {" "}
          <Image src={uk} alt="Background" className="w-[34px] h-[17px] mb-2" />
          สหราชอาณาจักร
        </div>
        <div className="b5">
          {
            groupByTheme(data)["คุณภาพของข้อมูลเปิดที่ กมธ. ควรปฏิบัติ"][
              toppic2
            ].สหราชอาณาจักร
          }
        </div>
      </div>
      <div className="flex space-x-3 mb-5 border-t border-b border-[#F9E6D5] py-5">
        <div className=" b4 font-bold min-w-[69px]">
          <Image
            src={aus}
            alt="Background"
            className="w-[34px] h-[17px] mb-2"
          />
          ออส
          <br />
          เตรเลีย
        </div>
        <div className="b5">
          {
            groupByTheme(data)["คุณภาพของข้อมูลเปิดที่ กมธ. ควรปฏิบัติ"][
              toppic2
            ].ออสเตรเลีย
          }
        </div>
      </div>
      <div className="flex space-x-3 ">
        <div className=" b4 font-bold min-w-[69px]">
          <Image
            src={thai}
            alt="Background"
            className="w-[34px] h-[17px] mb-2"
          />
          ไทย
        </div>
        <div className="b5">
          {
            groupByTheme(data)["คุณภาพของข้อมูลเปิดที่ กมธ. ควรปฏิบัติ"][
              toppic2
            ].ไทย
          }
        </div>
      </div>
    </div>
  );

  const displayToppic1 = (
    <div>
      <div className="flex space-x-3  mb-5">
        <div className=" b4 font-bold min-w-[69px]">
          <Image src={uk} alt="Background" className="w-[34px] h-[17px] mb-2" />
          สหราชอาณาจักร
        </div>
        <div className="b5">
          {
            groupByTheme(data)["กมธ. กับการมีส่วนร่วมของประชาชน"][toppic1]
              .สหราชอาณาจักร
          }
        </div>
      </div>
      <div className="flex space-x-3 mb-5 border-t border-b border-[#F9E6D5] py-5">
        <div className=" b4 font-bold min-w-[69px]">
          <Image
            src={aus}
            alt="Background"
            className="w-[34px] h-[17px] mb-2"
          />
          ออส
          <br />
          เตรเลีย
        </div>
        <div className="b5">
          {
            groupByTheme(data)["กมธ. กับการมีส่วนร่วมของประชาชน"][toppic1]
              .ออสเตรเลีย
          }
        </div>
      </div>
      <div className="flex space-x-3 ">
        <div className=" b4 font-bold min-w-[69px]">
          {" "}
          <Image
            src={thai}
            alt="Background"
            className="w-[34px] h-[17px] mb-2"
          />
          ไทย
        </div>
        <div className="b5">
          {groupByTheme(data)["กมธ. กับการมีส่วนร่วมของประชาชน"][toppic1].ไทย}
        </div>
      </div>
    </div>
  );

  return (
    <div className=" py-10 flex flex-col ">
      <Image
        src={head_question}
        alt="Background"
        className="md:max-w-[627px] mx-auto"
      />
      <div className=" relative max-w-[627px] mx-auto bg-white w-full   text-center">
        <div className=" h-[50px] bg-[#2322BC] rounded-b-[10px] absolute w-full translate-y-[15px] bottom-0 left-0"></div>
        <div className=" relative z-10 bg-white rounded-b-[10px] px-3 md:px-10 pt-4 pb-16 ">
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
              <Image
                src={uk}
                alt="Background"
                className="max-w-[90px] mx-auto"
              />
              <p className="b4 font-bold">
                รัฐสภาสหราช
                <br /> อาณาจักร
              </p>
            </div>
            <div>
              <Image
                src={aus}
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
            className="md:max-w-[420px] mt-10 mx-auto"
          />
          <p className=" b5 my-1">กดเลือกประเด็นที่สนใจ</p>
          <div className=" relative">
            <div
              className="flex space-x-5  justify-center mt-10 z-0
         "
            >
              {groupByTheme(data)["กมธ. กับการมีส่วนร่วมของประชาชน"].map(
                (item, index) => (
                  <div
                    key={item.toppic}
                    className={` b5 font-bold max-w-[90px] transition delay-150 duration-100 ease-in-out  cursor-pointer bg-[#2322BC] pb-5 text-white p-3 ${
                      toppic1 === index ? "" : " opacity-50 translate-y-5"
                    }`}
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
            <div className=" relative z-10 bg-[#FEF5CD]  py-15 px-1 md:px-10">
              <div className=" absolute inset-0 bg-[#FEF5CD]  top-0 left-0 translate-x-[-6px]  md:translate-x-[-8px] z-30 py-15 px-2 md:px-10 text-start   border border-[#2322BC]">
                {displayToppic1}
              </div>
              <div className=" absolute inset-0 bg-[#FEF5CD] translate-x-[8px]  md:translate-x-[16px] translate-y-[15px]  top-0 left-0 z-20  border border-[#2322BC]"></div>
              <div className=" absolute inset-0 bg-[#FEF5CD]  translate-x-[4px]  md:translate-x-[8px] translate-y-[10px]  top-0 left-0 z-20  border border-[#2322BC]"></div>
              <div className=" absolute inset-0 bg-[#FEF5CD] translate-x-[0px]  md:translate-x-[0px] translate-y-[5px]  top-0 left-0 z-20  border border-[#2322BC]"></div>
              {displayToppic1}
            </div>
          </div>
          {/* //// */}
          <Image
            src={qc_toppic_02}
            alt="Background"
            className="md:max-w-[420px] mt-10 mx-auto"
          />
          <p className=" b5 my-1">กดเลือกประเด็นที่สนใจ</p>
          <div className=" relative">
            <div
              className="flex space-x-2 md:space-x-5  justify-center mt-10
         "
            >
              {groupByTheme(data)["คุณภาพของข้อมูลเปิดที่ กมธ. ควรปฏิบัติ"].map(
                (item, index) => (
                  <div
                    key={item.toppic}
                    className={` b6 font-bold z-10 max-w-[85px] md:max-w-[90px] transition delay-150 duration-100 ease-in-out  cursor-pointer bg-[#2322BC] pb-5 text-white p-3 ${
                      toppic2 === index ? "" : " opacity-50 translate-y-5"
                    }`}
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
            <div className=" relative z-10 bg-[#FEF5CD]  py-15 px-10">
              <div className=" absolute z-40 inset-0 bg-[#FEF5CD]  top-0 left-0 translate-x-[-6px]  md:translate-x-[-8px] py-15 px-2 md:px-10 text-start   border border-[#2322BC]">
                {displayToppic2}
              </div>
              <div className=" absolute inset-0 bg-[#FEF5CD] translate-x-[8px]  md:translate-x-[16px] translate-y-[15px]  top-0 left-0 z-20  border border-[#2322BC]"></div>
              <div className=" absolute inset-0 bg-[#FEF5CD]  translate-x-[4px]  md:translate-x-[8px] translate-y-[10px]  top-0 left-0 z-20  border border-[#2322BC]"></div>
              <div className=" absolute inset-0 bg-[#FEF5CD] translate-x-[0px]  md:translate-x-[0px] translate-y-[5px]  top-0 left-0 z-20  border border-[#2322BC]"></div>
              {displayToppic2}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommiteeOpenData;
