/* eslint-disable react/no-children-prop */
import { BoxContainer, SpacingLayout } from "../../layouts";
import { GreenInfraSection } from "../../components/sections";
import Banner from "../../components/parts/Banner";
// import { Search } from '../../components/parts';

const GreenInfrastructure = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='container-wrapper'>
          <Banner subtitle={"Explore."} title={"Green Infrastructure Design."} children={"Find your green world"}/>
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

export default GreenInfrastructure;
