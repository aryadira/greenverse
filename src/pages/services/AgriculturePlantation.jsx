import Banner from "../../components/parts/Banner";
import Plantation from "../../components/sections/Plantation";
import transition from "../../components/transition/transition";
import { SpacingLayout, BoxContainer } from "../../layouts";

const AgriculturePlantation = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='container-wrapper'>
          <Banner title={"Services."} children={"Get your needs from our service"} />
          <SpacingLayout>
            <BoxContainer>
              <div className='border-t-2 mt-12 mb-32'>
                <Plantation />
              </div>
            </BoxContainer>
          </SpacingLayout>
        </div>
      </div>
    </div>
  );
};

export default transition(AgriculturePlantation);
