import { SpacingLayout, BoxContainer } from "../../layouts";
import ConsulQuestioner from "../../components/sections/ConsulQuestioner";
import Transition from "../../components/transition/Transition";
import React from "react";

const Questioner = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='container-content'>
          <ConsulQuestioner />
        </div>
      </div>
    </div>
  );
};

export default Transition(Questioner);
