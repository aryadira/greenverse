import React from "react";
import { Button } from "../parts";
import { Link } from "react-router-dom";

const ConsulQuestioner = () => {
  return (
    <div>
      <div className="wrapper mt-52">
        <div className="content">
          <h1 className="text-3xl font-HaasMd text-center">
            Consult via Questionnaire
          </h1>
          <div className="card mt-12 flex justify-center ">
            <div className="card-content max-w-[500px] border-[1px] p-4">
              <h1 className="text-lg font-HaasMd">
                Do You need Greenverse to create and manage your own
                plantation/farm?
              </h1>

              <div className="question w-full ">
                <h1 className="w-full border-[1px] p-4 my-8">
                  Yes, I need to create and manage it myself
                </h1>
                <h1 className="w-full border-[1px] p-4 mb-4">
                  Yes, I need to create and manage it myself
                </h1>
              </div>
            </div>
          </div>

          <div className="btn w-full flex mt-52 justify-center">
            <Link to={"/"}>
              <Button
                className={`bg-[#313A36] text-lg px-[32px] text-white hover:bg-[#0f231a] mt-7 rounded-[24px]`}
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsulQuestioner;
