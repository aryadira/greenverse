/* eslint-disable no-unused-vars */
import { BoxContainer, SpacingLayout } from "../layouts";
import SectionProducts from "../components/sections/SectionProducts";
import { SectionLanding, SectionTopics, SectionBenefit, SectionInfrastructure, SectionConsultation } from "../components/sections";
import { Marquee } from "../components/parts";

const LandingPage = () => {
  return (
    <div className='landing-page bg-[#F5F5F7]'>
      <SpacingLayout className='mb-[20px] mt-[150px]'>
        <BoxContainer>
          <SectionLanding />
        </BoxContainer>
      </SpacingLayout>
      <Marquee>THE GREENING WORLD WILL COME WITH US</Marquee>
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
      <Marquee>ENJOY OUR PRODUCTS AND SERVICES</Marquee>
    </div>
  );
};

export default LandingPage;
