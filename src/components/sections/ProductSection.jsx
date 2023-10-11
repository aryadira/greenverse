/* eslint-disable react/jsx-key */
import React from "react";
import { displayAll } from "../../constants/contents/products/displayAll";
import { crimson } from "../../assets/img";

const ProductSection = () => {
  return (
    <div className="border-t-2 pt-[90px] border-[#0000004d]">
      <h1 className="text-[32px]">Seeds Type List</h1>
      <div>
        <div>
          <div className="card grid gap-y-10 grid-cols-2">
            {displayAll.map((content) => (
              <div className="card-content mt-8">
                <img src={content.img} alt="" />
                <div className="text mt-8">
                  <h1 className="text-sm text-[#676767]">{content.type}</h1>
                  <h1 className="text-2xl">{content.title}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
