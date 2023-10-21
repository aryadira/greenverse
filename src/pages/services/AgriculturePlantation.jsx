import Banner from "../../components/parts/Banner";
import Plantation from "../../components/sections/Plantation";
import Transition from "../../components/transition/transition";
import { SpacingLayout, BoxContainer } from "../../layouts";

const AgriculturePlantation = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='container-wrapper'>
          <Banner title={"Agriculture Plantation."} subtitle='Explore.'>
            <br />
            Create your private agriculture
          </Banner>
          <SpacingLayout>
            <BoxContainer>
              <div className='border-t mt-12 mb-32'>
                <Plantation />
              </div>
            </BoxContainer>
          </SpacingLayout>
        </div>
      </div>
    </div>
  );
};

export default Transition(AgriculturePlantation);
