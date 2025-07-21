"use client";

import React from "react";
import data from "public/data/the_committees_part_2_OpenDataSuggestion.json";

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
      <div className=" max-w-[627px] mx-auto bg-white w-full rounded-[10px] px-10 py-4  text-center">
        <p className="b2 font-bold">
          นอกเหนือจากการเปิดข้อมูล
          <br /> กมธ. สามารถเพิ่มภาระรับผิดชอบ
          <br />
          (accountability)
          <br /> ในแนวทางไหนได้อีกบ้าง ?
        </p>
        {/* //// */}
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
