import React, { useEffect, useState } from "react";
import CommitteeFilter from "./CommitteeFilter";
import CommitteeList from "./CommitteeList";

const CommiteeDetails = ({ selectedItem, clearSelection }) => {
  const [representatives, setRepresentatives] = useState(
    selectedItem.representatives
  );
  const [senators, setSenators] = useState(selectedItem.senators);
  const [filter, setFilter] = useState({
    showRep: true,
    showSen: true,
    showOpen: true,
    showClose: true,
  });

  function filterData(data, showOpen, showClose) {
    if (showOpen && showClose) {
      return data;
    } else if (showOpen) {
      return data.filter((item) => item.open === true);
    } else if (showClose) {
      return data.filter((item) => item.open === false);
    } else {
      return [];
    }
  }
  const handleFilterChange = (filters) => {
    setFilter(filters);
    setRepresentatives({
      ...representatives,
      lists: filterData(
        selectedItem.representatives.lists,
        filters.showOpen,
        filters.showClose
      ),
    });
    setSenators({
      ...senators,
      lists: filterData(
        selectedItem.senators.lists,
        filters.showOpen,
        filters.showClose
      ),
    });
  };

  useEffect(() => {
    setRepresentatives(selectedItem.representatives);
    setSenators(selectedItem.senators);
  }, [selectedItem]);

  return (
    <div className=" relative">
      <div className=" py-5 px-5">
        <div className="absolute top-0 left-0 p-4">
          <button className="text-blue-500" onClick={clearSelection}>
            back
          </button>
        </div>
        <p className="h7">
          ข้อมูล <span className="font-bold">‘{selectedItem?.topic}’</span>
        </p>
        <p className="b3">
          มีจำนวน {selectedItem?.total} กมธ. ที่เปิดเผยข้อมูล
        </p>
      </div>
      <CommitteeFilter onChange={handleFilterChange} />
      {filter?.showRep && <CommitteeList data={representatives} />}
      {filter?.showSen && <CommitteeList data={senators} />}
    </div>
  );
};

export default CommiteeDetails;
