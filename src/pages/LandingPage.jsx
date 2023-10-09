import { BoxContainer, SpacingLayout } from "../layouts";
import SectionLanding from "../components/sections/SectionLanding";
import SectionProducts from "../components/sections/SectionProducts";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <SpacingLayout className="bg-[#F5F5F7]">
        <BoxContainer>
          <SectionLanding />
        </BoxContainer>
      </SpacingLayout>

      <SpacingLayout className="bg-[#F5F5F7]">
        <BoxContainer>
          <SectionProducts />
        </BoxContainer>
      </SpacingLayout>
    </div>
  );
};

export default LandingPage;
