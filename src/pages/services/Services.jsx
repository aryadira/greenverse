import { Outlet, useLocation } from "react-router-dom";

const Services = () => {
  const path = useLocation();

  return path.pathname != "/services" ? (
    <div className="Services">
      <Outlet />
    </div>
  ) : (
    <div>
      
    </div>
  );
};

export default Services;
