import { Outlet, useLocation } from "react-router-dom";

const Products = () => {
  const path = useLocation();

  return path.pathname != "/products" ? (
    <div className='products'>
      <Outlet />
    </div>
  ) : (
    <h1>Products</h1>
  );
};

export default Products;
