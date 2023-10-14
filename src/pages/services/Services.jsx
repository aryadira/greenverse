import { Outlet, useLocation } from "react-router-dom";
import { servicesBanner } from "../../assets/img";
import { ServiceSection } from "../../components/sections";
import { BoxContainer, SpacingLayout } from "../../layouts";
import { Marquee } from "../../components/parts";
import Banner from "../../components/parts/Banner";

const Services = () => {
  const path = useLocation();

  return path.pathname != "/services" ? (
    <div className='Services'>
      <Outlet />
    </div>
  ) : (
    <div className='wrapper bg-[#F5F5F7]'>
      <div className='container-wrapper'>
        <Banner title='Services.' subtitle='Discover All'>
          Get your <br />
          need from our services
        </Banner>

        <div className='content'>
          <SpacingLayout>
            <BoxContainer>
              <div className='content pt-[150px]'>
                <div className='div'>
                  <ServiceSection />
                </div>
              </div>
            </BoxContainer>
          </SpacingLayout>
        </div>
      </div>
    </div>
  );
};

export default Services;
