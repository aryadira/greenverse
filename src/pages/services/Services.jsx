/* eslint-disable react/no-children-prop */
import { Outlet, useLocation } from "react-router-dom";
import { ServiceSection } from "../../components/sections";
import { BoxContainer, SpacingLayout } from "../../layouts";
import Banner from "../../components/parts/Banner";
import { Helmet } from "react-helmet";
import Transition from "../../components/transition/Transition";

const Services = () => {
  const path = useLocation();

  const firstChar = path.pathname.slice(10).charAt(0).toUpperCase();
  const remainingPath = path.pathname.slice(11);
  const finalPath = firstChar.toUpperCase() + remainingPath;

  const withoutStrip = finalPath.replace(/[._-]/g, " ");

  return path.pathname != "/services" ? (
    <div className='Services'>
      <Helmet>
        <title>{path.pathname.match("-") ? withoutStrip : finalPath} | Greenverse</title>
      </Helmet>
      <Outlet />
    </div>
  ) : (
    <div className='wrapper bg-[#F5F5F7]'>
      <div className='container-wrapper'>
        <div className='banner'>
          <Banner title={"Services."} subtitle='Discover All'>
            Get your <br />
            needs from our service
          </Banner>
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

export default Transition(Services);
