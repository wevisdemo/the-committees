"use client";

import React, { useState } from "react";
import part_1 from "../../../public/data/the_committees_part_1_data.json";
import SuggestionListOfCommissions from "./SuggestionListOfCommissions";
import SuggestionListOfKeyWord from "./SuggestionListOfKeyWord";
import filterByCommitteeAndKeyword from "@/app/utils/filterByCommitteeAndKeyword";
const SurveyPage = () => {
  const [commissions, setCommissions] = useState("");
  const [keywords, setKeywords] = useState("");
  const filteredData = filterByCommitteeAndKeyword(
    part_1,
    commissions,
    keywords
  );

  return (
    <>
      <div className="component flex flex-col">
        <div className="flex">
          <SuggestionListOfCommissions
            commissions={commissions}
            setCommissions={setCommissions}
            commissionsData={filteredData}
          />
          <SuggestionListOfKeyWord
            keywords={keywords}
            setKeywords={setKeywords}
            commissionsData={filteredData}
          />
        </div>
        <div>
          <h2>Selected Commission:</h2>
          <p>{commissions}</p>
          <h2>Selected Keywords:</h2>
          <p>{keywords}</p>
        </div>
      </div>
    </>
  );
};

export default SurveyPage;
