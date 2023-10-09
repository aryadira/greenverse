import { BoxContainer, SpacingLayout } from "../layouts";
import SectionLanding from "../components/sections/SectionLanding";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <SpacingLayout className="bg-[#F5F5F7]">
        <BoxContainer>
          <SectionLanding />
        </BoxContainer>
      </SpacingLayout>
      <div className="box-3 bg-red-500">
        <SpacingLayout className="bg-green-300">
          <BoxContainer>BOX 3</BoxContainer>
        </SpacingLayout>
      </div>
      <SpacingLayout>
        <BoxContainer>
          <div className="box-4 bg-red-600">BOX 4</div>
        </BoxContainer>
      </SpacingLayout>
      <div className="box-5 bg-red-700">
        <SpacingLayout>
          <BoxContainer>BOX 5</BoxContainer>
        </SpacingLayout>
      </div>
    </div>
  );
};

export default LandingPage;
