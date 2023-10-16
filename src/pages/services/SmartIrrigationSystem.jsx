/* eslint-disable react/no-children-prop */
import { BoxContainer, SpacingLayout } from "../../layouts";
import Banner from "../../components/parts/Banner";
import SmartIrrigation from "../../components/sections/SmartIrrigation";
import Transition from "../../components/transition/Transition";

const SmartIrrigationSystem = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='container-wrapper'>
          <Banner subtitle={"Explore."} title={"Smart Irrigation Technology."}>
            <br />
            Simple solution, for your irrigation
          </Banner>
          <SpacingLayout>
            <BoxContainer>
              <div className='border-t-2 mt-12 mb-32'>
                <SmartIrrigation />
              </div>
            </BoxContainer>
          </SpacingLayout>
        </div>
      </div>
    </div>
  );
};

export default Transition(SmartIrrigationSystem);
