import { SpacingLayout, BoxContainer } from "../../layouts";
import ConsulQuestioner from "../../components/sections/ConsulQuestioner";
import transition from "../../components/transition/transition";
import React from "react";

const Questioner = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="container-content">
          <ConsulQuestioner />
        </div>
      </div>
    </div>
  );
};

export default transition(Questioner);
