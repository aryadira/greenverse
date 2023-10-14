/* eslint-disable react/no-children-prop */
import { Outlet, useLocation } from "react-router-dom";
import { ServiceSection } from "../../components/sections";
import { BoxContainer, SpacingLayout } from "../../layouts";
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
        <div className='banner'>
          <Banner title={"Services."} children={"Get your needs from our service"} />
        </div>

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
