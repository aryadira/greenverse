import { Outlet, useLocation } from "react-router-dom";
import { servicesBanner } from "../../assets/img";
import { ServiceSection } from "../../components/sections";
import { BoxContainer, SpacingLayout } from "../../layouts";

const Services = () => {
  const path = useLocation();

  return path.pathname != "/services" ? (
    <div className="Services">
      <Outlet />
    </div>
  ) : (
    <div className="wrapper bg-[#F5F5F7]">
      <div className="container-wrapper">
        <div className="banner relative mt-7">
          <img src={servicesBanner} className="w-full" alt="" />
          <div className="text absolute bottom-1/2 translate-y-1/2 text-xl left-[160px] ">
            <p className="text-[#C8C8C8]">Discover all</p>
            <p className="text-[#C8C8C8] text-[40px] leading-10">
              <span className="text-white">Services</span> Get your <br /> needs
              from our services
            </p>
          </div>
        </div>

        <div className="content">
          <SpacingLayout>
            <BoxContainer>
              <div className="content pt-[150px]">
                <div className="div">
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
