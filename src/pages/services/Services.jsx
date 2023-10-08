import { Outlet, useLocation } from "react-router-dom";

const Services = () => {
  const path = useLocation();

  return path.pathname != "/services" ? (
    <div className='Services'>
      <Outlet />
    </div>
  ) : (
    <h1>Services hahahah</h1>
  );
};

export default Services;
