"use client";

import React, { useCallback, useEffect, useState } from "react";
import CommitteeFilter from "./CommitteeFilter";
import CommitteeList from "./CommitteeList";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import down_load_blue from "assets/images/down_load_blue.png";

const CommiteeDetails = ({ selectedItem, clearSelection }) => {
  const [representatives, setRepresentatives] = useState(
    selectedItem.representatives
  );
  const [senators, setSenators] = useState(selectedItem.senator);
  const [filter, setFilter] = useState({
    showRep: true,
    showSen: true,
    showOpen: true,
    showClose: true,
  });

  const filterData = useCallback((data, showOpen, showClose) => {
    if (showOpen && showClose) {
      return data;
    } else if (showOpen) {
      return data?.filter((item) => item.open === true);
    } else if (showClose) {
      return data?.filter((item) => item.open === false);
    } else {
      return [];
    }
  }, []);

  const handleFilterChange = useCallback(
    (filters) => {
      setFilter(filters);
      setRepresentatives({
        ...representatives,
        lists: filterData(
          selectedItem.representatives?.lists ?? [],
          filters.showOpen,
          filters.showClose
        ),
      });
      setSenators({
        ...senators,
        lists:
          filterData(
            selectedItem.senator?.lists ?? [],
            filters.showOpen,
            filters.showClose
          ) ?? [],
      });
    },
    [representatives, senators]
  );

  useEffect(() => {
    setRepresentatives(selectedItem.representatives);
    setSenators(selectedItem.senator);
  }, [selectedItem]);

  return (
    <div className=" relative">
      <div className=" py-5 px-5">
        <div className="absolute top-0 left-0 p-4">
          <button
            className="text-[#2322BC] cursor-pointer"
            onClick={clearSelection}
          >
            <ChevronLeft className=" w-[30px] font-bold" />
          </button>
        </div>
        <p className="h7 px-10">
          ข้อมูล <span className="font-bold">‘{selectedItem?.topic}’</span>
        </p>
        <p className="b3">
          มีจำนวน {selectedItem?.total} กมธ. ที่เปิดเผยข้อมูล
        </p>
      </div>
      <CommitteeFilter onChange={handleFilterChange} />
      <div className="b5 underline my-5 cursor-pointer">
        <Image
          src={down_load_blue}
          alt="Background"
          className="w-[10px] font-bold text-[#2322BC] inline-block mr-2"
        />
        ดาวน์โหลดข้อมูลทั้งหมด
      </div>
      {filter?.showRep && <CommitteeList data={representatives} />}
      {filter?.showSen && <CommitteeList data={senators} />}
    </div>
  );
};

export default CommiteeDetails;
