"use client";
import React, { useState } from "react";
import CommiteeDetails from "./CommiteeDetails";

export default function CommitteeChart({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="space-y-6 text-center  bg-white max-w-[690px] mx-auto w-full mt-6 rounded-lg">
      {!selectedItem ? (
        <div className=" py-5 px-5">
          <p className="h7 font-bold ">กมธ. เปิดข้อมูลอะไรอยู่บ้าง ?</p>
          {data.map((item, index) => {
            const repTotal =
              item.representatives.open + item.representatives.close;
            const repPercent = repTotal
              ? (item.representatives.open / repTotal) * 100
              : 0;

            const senTotal = item.senator.open + item.senator.close;
            const senPercent = senTotal
              ? (item.senator.open / senTotal) * 100
              : 0;

            return (
              <div
                key={index}
                className="border-b pb-4  cursor-pointer  "
                onClick={() => handleItemClick(item)}
              >
                <h3 className="font-bold b4 text-left mb-2">{item.topic}</h3>
                <div className="flex">
                  <div className="flex-1">
                    <div className="w-full   h-6 relative flex justify-end">
                      <span className=" absolute  right-[5px] b5 top-[50%] translate-y-[-50%]">
                        {repPercent.toFixed(1)}%
                      </span>
                      <div
                        className="bg-[#55C99C] opacity-50 h-6 "
                        style={{ width: `${(100 - repPercent).toFixed(1)}%` }}
                      />
                      <div
                        className="bg-[#55C99C] h-6 "
                        style={{ width: `${repPercent.toFixed(1)}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex-1 ">
                    <div className="w-full   h-6 relative flex justify-end">
                      <span className=" absolute  left-[5px] b5 top-[50%] translate-y-[-50%]">
                        {senPercent.toFixed(1)}%
                      </span>
                      <div
                        className="bg-[#E89B55] h-6 "
                        style={{ width: `${senPercent.toFixed(1)}%` }}
                      />
                      <div
                        className="bg-[#E89B55] opacity-50 h-6 "
                        style={{ width: `${(100 - senPercent).toFixed(1)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <CommiteeDetails
            selectedItem={selectedItem}
            clearSelection={() => setSelectedItem(null)}
          />
        </>
      )}
    </div>
  );
}
