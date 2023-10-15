/* eslint-disable react/no-children-prop */
import { BoxContainer, SpacingLayout } from "../../layouts";
import Banner from "../../components/parts/Banner";
import SmartIrrigation from "../../components/sections/SmartIrrigation";
import transition from "../../components/transition/transition";

const SmartIrrigationSystem = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='container-wrapper'>
          <Banner subtitle={""} title={"Services."} children={"Get your needs from our service"} />
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

export default transition(SmartIrrigationSystem);
