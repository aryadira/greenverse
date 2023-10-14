import { Outlet, useLocation } from "react-router-dom";
import Banner from "../../components/parts/Banner";
import { BoxContainer, SpacingLayout } from "../../layouts";
import ProductSection from "../../components/sections/ProductSection";
import { Marquee } from "../../components/parts";

const Products = () => {
  const path = useLocation();

  return path.pathname != "/products" ? (
    <div className='products'>
      <Outlet />
    </div>
  ) : (
    <div className='wrapper'>
      <div className='container-wrapper'>
        <Banner title='Products.' subtitle='Discover All'>
          Explore <br />
          our products to get some benefits
        </Banner>
        <SpacingLayout className=''>
          <BoxContainer>
            <div className='w-full types grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
              <div className='bg-white hover:bg-neutral-200 shadow-sm flex justify-center items-center h-44 text-lg p-4 text-center rounded-2xl my-6 hover:scale-110 transition-transform'>
                <h1>Brassicas</h1>
              </div>
              <div className='bg-white hover:bg-neutral-200 shadow-sm flex justify-center items-center h-44 text-lg p-4 text-center rounded-2xl my-6 hover:scale-110 transition-transform'>
                <h1>Cover Crop Mixes</h1>
              </div>
              <div className='bg-white hover:bg-neutral-200 shadow-sm flex justify-center items-center h-44 text-lg p-4 text-center rounded-2xl my-6 hover:scale-110 transition-transform'>
                <h1>Grasses, Millets, Sorghums</h1>
              </div>
              <div className='bg-white hover:bg-neutral-200 shadow-sm flex justify-center items-center h-44 text-lg p-4 text-center rounded-2xl my-6 hover:scale-110 transition-transform'>
                <h1>Grains</h1>
              </div>
              <div className='bg-white hover:bg-neutral-200 shadow-sm flex justify-center items-center h-44 text-lg p-4 text-center rounded-2xl my-6 hover:scale-110 transition-transform'>
                <h1>Legumes</h1>
              </div>
            </div>
          </BoxContainer>
        </SpacingLayout>
        <Marquee className='h-[0px]'>Let's Find Our Products!</Marquee>
        <SpacingLayout>
          <BoxContainer className='mt-[100px]'>
            <ProductSection />
          </BoxContainer>
        </SpacingLayout>
      </div>
    </div>
  );
};

export default Products;
