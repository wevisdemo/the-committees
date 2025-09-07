"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

export default function ExpandCard({ item, isShowToppic, keywords, index }) {
  const [openSub, setOpenSub] = useState({});
  const [openInSub, setOpenInSub] = useState({});

  const toggleSub = (index) => {
    setOpenSub((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleInSub = (index) => {
    setOpenInSub((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="border rounded-lg p-4  shadow-md w-full border-[#FBCB03]   bg-white ">
      <div className="flex items-center mb-2 justify-between">
        <div className="b1 font-bold">{item.no}</div>
        <div className="text-sm text-[#4F4EC9]">{item.date}</div>
        <a target="_blank" rel="noopener noreferrer" href={item.site}>
          <ExternalLink className="w-[17px] cursor-pointer" />
        </a>
      </div>
      <div className="flex items-center justify-between">
        {!isShowToppic && <div className="b4">{item.committee}</div>}
        {!isShowToppic && (
          <div
            className={` ${
              item.house === "สส." ? "bg-[#55C99C]" : "bg-[#E2822B]"
            } border-l-[2px] px-2 ml-2 border-l-[#2322BC]`}
          >
            {item.house}
          </div>
        )}
      </div>

      <div className="mt-2 items-center text-xs text-[#2322BC] flex flex-wrap gap-1 ">
        {item.keywords.length > 0 && <p>ประเด็นที่พบ:</p>}
        {item.keywords?.map((k, idx) => (
          <span
            key={idx}
            className={` py-1  border-l-[2px] px-2 ml-2 border-l-[#2322BC] ${
              keywords == k ? "bg-[#2322BC] text-white" : "bg-[#D3D3F2]"
            } `}
          >
            #{k}
          </span>
        ))}
      </div>

      <div className="mt-2 space-y-2 ">
        <div className="mt-2 font-medium">{item.title}</div>
        {item.details?.map((d, idx) => (
          <div key={idx} className="border border-[#D3D3F2] rounded-md  ">
            <div
              className="px-2 py-3 "
              dangerouslySetInnerHTML={{ __html: d.title }}
            />
            {d.details && (
              <>
                <button
                  onClick={() => toggleSub(idx)}
                  className="w-full text-left text-[#2322BC] bg-[#D3D3F2]  px-3 py-2 flex items-center justify-between"
                >
                  {openSub[idx] ? "ซ่อนรายละเอียด" : "อ่านรายละเอียด"}
                  {openSub[idx] ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
                {openSub[idx] && (
                  <div className=" bg-[#D3D3F2] p-2 flex flex-col b4 space-y-3">
                    {d.details?.map((inD, idx) => (
                      <div key={idx} className=" bg-white rounded-md">
                        <div
                          className="px-2 py-3 "
                          dangerouslySetInnerHTML={{ __html: inD.title }}
                        />
                        {inD.details && (
                          <>
                            <button
                              onClick={() => toggleInSub(idx)}
                              className="w-full text-left text-[#2322BC] px-2 py-3 rounded-b-md  bg-[#A7A7E4] flex items-center justify-between"
                            >
                              {openInSub[idx]
                                ? "ซ่อนรายละเอียด"
                                : "อ่านรายละเอียด"}
                              {openInSub[idx] ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </button>
                            {openInSub[idx] && (
                              <div className=" flex-col space-y-2 bg-[#A7A7E4] mt-[-5px] pt-5 pb-2 px-2 rounded-b-md ">
                                {inD.details.map((detail, indexDetail) => (
                                  <div
                                    key={indexDetail}
                                    className=" bg-white px-2 py-3 rounded-md"
                                  >
                                    {detail.title}
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
