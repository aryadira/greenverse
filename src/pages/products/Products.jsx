import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Banner from "../../components/parts/Banner";
import { BoxContainer, SpacingLayout } from "../../layouts";
import ProductSection from "../../components/sections/ProductSection";
import { Marquee } from "../../components/parts";
import { Helmet } from "react-helmet";
import transition from "../../components/transition/transition";

const Products = () => {
  const path = useLocation();

  const firstChar = path.pathname.slice(10).charAt(0).toUpperCase();
  const remainingPath = path.pathname.slice(11);
  const finalPath = firstChar.toUpperCase() + remainingPath;

  const withoutStrip = finalPath.replace(/[._-]/g, " ");

  return path.pathname != "/products" ? (
    <div className="products">
      <Helmet>
        <title>
          {path.pathname.match("-") ? withoutStrip : finalPath} | Greenverse
        </title>
      </Helmet>
      <Outlet />
    </div>
  ) : (
    <div className="wrapper">
      <Helmet>
        <title>Products | Greenverse</title>
      </Helmet>
      <div className="container-wrapper">
        <Banner title="Products." subtitle="Discover All">
          Explore <br />
          our products to get some benefits
        </Banner>
        <SpacingLayout className="">
          <BoxContainer>
            <div className="w-full types grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              <div className="bg-white hover:bg-neutral-200 shadow-sm flex justify-center items-center h-44 text-lg p-4 text-center rounded-2xl my-6 hover:scale-110 transition-transform">
                <h1>brassica</h1>
              </div>
              <div className="bg-white hover:bg-neutral-200 shadow-sm flex justify-center items-center h-44 text-lg p-4 text-center rounded-2xl my-6 hover:scale-110 transition-transform">
                <h1>Cover Crop Mixes</h1>
              </div>
              <div className="bg-white hover:bg-neutral-200 shadow-sm flex justify-center items-center h-44 text-lg p-4 text-center rounded-2xl my-6 hover:scale-110 transition-transform">
                <h1>Grasses, Millets, Sorghums</h1>
              </div>
              <div className="bg-white hover:bg-neutral-200 shadow-sm flex justify-center items-center h-44 text-lg p-4 text-center rounded-2xl my-6 hover:scale-110 transition-transform">
                <h1>Grains</h1>
              </div>
              <div className="bg-white hover:bg-neutral-200 shadow-sm flex justify-center items-center h-44 text-lg p-4 text-center rounded-2xl my-6 hover:scale-110 transition-transform">
                <h1>Legumes</h1>
              </div>
            </div>
          </BoxContainer>
        </SpacingLayout>
        <Marquee className="h-[0px]">Let's Find Our Products!</Marquee>
        <SpacingLayout>
          <BoxContainer className="mt-[100px]">
            <ProductSection />
          </BoxContainer>
        </SpacingLayout>
      </div>
    </div>
  );
};

export default transition(Products);
