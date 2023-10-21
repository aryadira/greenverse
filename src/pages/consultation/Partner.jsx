import { SpacingLayout, BoxContainer } from "../../layouts";
import ConsulPartner from "../../components/sections/ConsulPartner";
import Transition from "../../components/transition/Transition";
import React from "react";

const Partner = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='container-content'>
          <ConsulPartner />
        </div>
      </div>
    </div>
  );
};

export default Partner;
