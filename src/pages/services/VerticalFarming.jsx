/* eslint-disable react/no-children-prop */
import { SpacingLayout, BoxContainer } from "../../layouts";
import Banner from "../../components/parts/Banner";
import Farming from "../../components/sections/Farming";
import transition from "../../components/transition/transition";

SpacingLayout;

const VerticalFarming = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='container-wrapper'>
          <Banner subtitle={""} title={"Farming."} children={"Easier with Greenverse"} />

          <SpacingLayout>
            <BoxContainer>
              <div className='border-t-2 mt-12'>
                <Farming />
              </div>
            </BoxContainer>
          </SpacingLayout>
        </div>
      </div>
    </div>
  );
};

export default transition(VerticalFarming);
