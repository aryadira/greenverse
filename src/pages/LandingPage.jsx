/* eslint-disable no-unused-vars */
import { BoxContainer, SpacingLayout } from "../layouts";
import SectionProducts from "../components/sections/SectionProducts";
import { SectionLanding, SectionTopics, SectionBenefit, SectionInfrastructure, SectionConsultation } from "../components/sections";
import { Footer, Marquee } from "../components/parts";
import { Helmet } from "react-helmet";

const LandingPage = () => {
  return (
    <div className='landing-page bg-[#F5F5F7]'>
      <Helmet>
        <title>Greenverse | Providing for Greening The World</title>
      </Helmet>
      <SpacingLayout className='mb-[20px] mt-[150px]'>
        <BoxContainer>
          <SectionLanding />
        </BoxContainer>
      </SpacingLayout>
      <Marquee className={"h-[20px]"}>THE GREENING WORLD WILL COME WITH US</Marquee>
      <SpacingLayout>
        <BoxContainer>
          <SectionBenefit />
        </BoxContainer>
      </SpacingLayout>
      <SpacingLayout className='mt-[100px]'>
        <BoxContainer>
          <SectionProducts />
        </BoxContainer>
      </SpacingLayout>
      <SpacingLayout className='mt-[100px]'>
        <BoxContainer>
          <SectionInfrastructure />
        </BoxContainer>
      </SpacingLayout>
      <SpacingLayout className='my-[150px]'>
        <BoxContainer>
          <SectionConsultation />
        </BoxContainer>
      </SpacingLayout>
      <SpacingLayout className='my-[150px]'>
        <BoxContainer>
          <SectionTopics />
        </BoxContainer>
      </SpacingLayout>
    </div>
  );
};

export default LandingPage;
