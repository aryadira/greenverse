/* eslint-disable react/no-children-prop */
import { Outlet, useLocation } from "react-router-dom";
import { ServiceSection } from "../../components/sections";
import { BoxContainer, SpacingLayout } from "../../layouts";
import Banner from "../../components/parts/Banner";
import { Helmet } from "react-helmet";
import Transition from "../../components/transition/Transition";
import { Button, Marquee } from "../../components/parts";
import CircleButton from "../../components/parts/CircleButton";

const Services = () => {
  const path = useLocation();

  const firstChar = path.pathname.slice(10).charAt(0).toUpperCase();
  const remainingPath = path.pathname.slice(11);
  const finalPath = firstChar.toUpperCase() + remainingPath;

  const withoutStrip = finalPath.replace(/[._-]/g, " ");

  return path.pathname != "/services" ? (
    <div className='services'>
      <Helmet>
        <title>{path.pathname.match("-") ? withoutStrip : finalPath} | Greenverse</title>
      </Helmet>
      <Outlet />
    </div>
  ) : (
    <div className='wrapper bg-[#F5F5F7]'>
      <Helmet>
        <title>Services | Greenverse</title>
      </Helmet>
      <div className='container-wrapper'>
        <div className='banner'>
          <Banner title={"Services."} subtitle='Discover All'>
            Get your <br />
            needs from our service
          </Banner>
          <SpacingLayout>
            <BoxContainer>
              <div className='definition-group grid grid-cols-1 sm:grid-cols-2 place-content-between py-20'>
                <div className='definition'>
                  <p>
                    Greenverse also provides greening services tailored to specific customer needs, such as greening for offices, hotels, restaurants,
                    schools and hospitals. Greenverse hopes that its services can help people create green spaces that are comfortable, beautiful and
                    beneficial for the environment and human health.
                  </p>
                </div>

                <div className='source-btn flex justify-end'>
                  <CircleButton>No Source</CircleButton>
                </div>
              </div>
            </BoxContainer>
          </SpacingLayout>
          <Marquee className='h-[0px]'>Let's Find Our Services!</Marquee>
        </div>
        <div className='content'>
          <SpacingLayout>
            <BoxContainer className='mt-[100px]'>
              <div className='categories  flex items-center gap-5'>
                <div className='search flex items-center relative my-7'>
                  <svg className='absolute m-4' width='20' height='20' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M13.1562 14.5317L9.53542 11.163C9.07708 11.5297 8.55 11.8199 7.95417 12.0338C7.35833 12.2477 6.72431 12.3547 6.05208 12.3547C4.38681 12.3547 2.97758 11.7778 1.82442 10.624C0.67125 9.47021 0.0943611 8.06099 0.09375 6.39632C0.09375 4.73104 0.670639 3.32182 1.82442 2.16866C2.97819 1.01549 4.38742 0.438599 6.05208 0.437988C7.71736 0.437988 9.12658 1.01488 10.2798 2.16866C11.4329 3.32243 12.0098 4.73166 12.0104 6.39632C12.0104 7.06854 11.9035 7.70257 11.6896 8.29841C11.4757 8.89424 11.1854 9.42132 10.8188 9.87965L14.1875 13.5005L13.8438 13.8442L13.1562 14.5317ZM6.05208 10.5213C7.19792 10.5213 8.17203 10.1201 8.97442 9.31774C9.77681 8.51535 10.1777 7.54154 10.1771 6.39632C10.1771 5.25049 9.77589 4.27638 8.9735 3.47399C8.17111 2.6716 7.19731 2.27071 6.05208 2.27132C4.90625 2.27132 3.93214 2.67252 3.12975 3.47491C2.32736 4.27729 1.92647 5.2511 1.92708 6.39632C1.92708 7.54216 2.32828 8.51627 3.13067 9.31866C3.93306 10.121 4.90686 10.5219 6.05208 10.5213Z'
                      fill='#111111'
                    />
                  </svg>

                  <input type='text' className='py-3 px-14 rounded-md outline-2 border-none bg-transparent text-2xl' placeholder='Search...' />
                </div>
                <div className='list-categories flex w-full items-center justify-around'>
                  <Button className='cursor-pointer links max-w-fit' link='/services/green-infrastructure'>
                    Green Infrastructure
                  </Button>
                  <Button className='cursor-pointer links max-w-fit' link='/services/smart-irrigation'>
                    Smart Irrigation
                  </Button>
                  <Button className='cursor-pointer links max-w-fit' link='/services/agriculture-plantation'>
                    Agriculture Plantation
                  </Button>
                  <Button className='cursor-pointer links max-w-fit' link='/services/vertical-farming'>
                    Vertical Farming
                  </Button>
                </div>
              </div>

              <ServiceSection />
            </BoxContainer>
          </SpacingLayout>
        </div>
      </div>
    </div>
  );
};

export default Transition(Services);
