import { servicesBanner } from "../../assets/img";
import { BoxContainer, SpacingLayout } from "../../layouts";
import { GreenInfraSection } from "../../components/sections";
import Banner from "../../components/parts/Banner";

const GreenInfrastructure = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='container-wrapper'>
          <Banner title='Green Infrastructure Design.'>
            <br />
            Find Your Green World
          </Banner>
        </div>
        <div className='content pt-[150px]'>
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
