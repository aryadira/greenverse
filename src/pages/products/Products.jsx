import { Outlet, useLocation } from "react-router-dom";
import Banner from "../../components/parts/Banner";
import { BoxContainer, SpacingLayout } from "../../layouts";
import ProductSection from "../../components/sections/ProductSection";

const Products = () => {
  const path = useLocation();

  return path.pathname != "/products" ? (
    <div className="products">
      <Outlet />
    </div>
  ) : (
    <div className="wrapper">
      <div className="container-wrapper">
        <Banner />
        <SpacingLayout>
          <BoxContainer className="mt-[100px]">
            <ProductSection/>
          </BoxContainer>
        </SpacingLayout>
      </div>
    </div>
  );
};

export default Products;
