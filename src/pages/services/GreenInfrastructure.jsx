/* eslint-disable react/no-children-prop */
import { BoxContainer, SpacingLayout } from "../../layouts";
import { GreenInfraSection } from "../../components/sections";
import Banner from "../../components/parts/Banner";
import Transition from "../../components/transition/Transition";
// import { Search } from '../../components/parts';

const GreenInfrastructure = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='container-wrapper'>
          <Banner subtitle={"Explore."} title={"Green Infrastructure Design."}>
            <br />
            Find your green world
          </Banner>
        </div>
        <div className='content py-[50px]'>
          <SpacingLayout>
            <BoxContainer>
              <GreenInfraSection />
            </BoxContainer>
          </SpacingLayout>
        </div>
      </div>
    </div>
  );
};

export default Transition(GreenInfrastructure);
