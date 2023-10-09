/* eslint-disable no-unused-vars */
import { BoxContainer, SpacingLayout } from "../layouts";
import SectionProducts from "../components/sections/SectionProducts";
import { SectionLanding, SectionBenefit } from "../components/sections/";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <SpacingLayout className="bg-[#F5F5F7]">
        <BoxContainer>
          <SectionLanding />
        </BoxContainer>
      </SpacingLayout>
      <SpacingLayout className="bg-[#F5F5F7] mt-[300px]">
        <BoxContainer>
          <SectionProducts />
        </BoxContainer>
      </SpacingLayout>
    </div>
  );
};

export default LandingPage;
