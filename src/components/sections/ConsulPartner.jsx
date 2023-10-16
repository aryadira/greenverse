import React from "react";
import { Button } from "../parts";
import { Link } from "react-router-dom";
import { glass } from "../../assets/img";
import CardPartner from "../parts/CardPartner";
import { partner1, partner2, partner3, partner4 } from "../../assets/img";

const ConsulPartner = () => {
  return (
    <div>
      <div className="wrapper mt-32">
        <div className="content">
          <div className="title text-center">
            <h1 className="text-3xl font-HaasMd">
              Find a suitable partner for You.
            </h1>
            <p className="text-[#676767]">We present the best partners!</p>
          </div>

          <div className="input flex justify-center mt-8">
            <div className="input-content flex w-full max-w-[400px] lg:max-w-[505px] items-center bg-white py-2 px-4">
              <img src={glass} className="w-[20px] h-[20px] mr-2" alt="" />
              <input
                className="outline-none border-0 w-full"
                placeholder="Search Partner..."
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="card mt-8">
            <div className="partner-card grid grid-cols-1 place-items-center gap-y-4 w-full ml-14 lg:ml-0">
              <CardPartner
                path={partner1}
                name={"Andine Cristy"}
                desc={"Product Partner"}
              />
              <CardPartner
                path={partner2}
                name={"James Ricky"}
                desc={"Services Partner"}
              />
              <CardPartner
                path={partner3}
                name={"Jayden Will"}
                desc={"Tools Partner"}
              />
              <CardPartner
                path={partner4}
                name={"Simon Riley"}
                desc={"Contractor Partner"}
              />
            </div>
          </div>
          <div className="btn w-full flex mt-20 justify-center">
            <Button
              link={"/"}
              className={`bg-[#313A36] text-lg px-[32px] text-white hover:bg-[#0f231a] mt-7 rounded-[24px]`}
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsulPartner;
