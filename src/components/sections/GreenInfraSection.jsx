/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from "react";
import { contentGreenInfrastructureDesign } from "../../constants/contents/services/green-infrastructure-design";

const GreenInfraSection = () => {
  return (
    <div className="border-t-2 pt-7 border-[#0000004d]">
      <p className="text-[#676767]">Definition.</p>
      {contentGreenInfrastructureDesign.map((content) => (
        <div key={content.id}>
          <div>
            <h1 className="text-[32px]">{content.title}</h1>
            <p className="mt-10 max-w-[716px]">{content.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GreenInfraSection;
