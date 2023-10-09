/* eslint-disable no-unused-vars */
import React from "react";
import TopicsCard from "../parts/TopicsCard";

const SectionTopics = () => {
  return (
    <div>
      <div className="wrapper">
        <div>
          <p className="text-[#676767] text-xl font-base">Going to...</p>
          <p className="text-[32px] text-[#676767] max-w-md">
            <span className="text-black">Topics.</span> Get more information out
            of here
          </p>
          <div className="topics-card">
            <TopicsCard title="Design"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTopics;
