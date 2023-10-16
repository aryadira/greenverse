/* eslint-disable react/no-children-prop */
import { SpacingLayout, BoxContainer } from "../../layouts";
import Banner from "../../components/parts/Banner";
import Farming from "../../components/sections/Farming";
import Transition from "../../components/transition/Transition";

SpacingLayout;

const VerticalFarming = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='container-wrapper'>
          <Banner subtitle={"Explore."} title={"Vertical Farming."}>
            <br />
            Farming more easier <br />
            with vertical solution
          </Banner>

          <SpacingLayout>
            <BoxContainer>
              <div className='border-t mt-12'>
                <Farming />
              </div>
            </BoxContainer>
          </SpacingLayout>
        </div>
      </div>
    </div>
  );
};

export default Transition(VerticalFarming);
