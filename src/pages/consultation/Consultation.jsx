import CardConsul from "../../components/parts/CardConsul";
import { Outlet, useLocation } from "react-router-dom";
import { Button } from "flowbite-react";
import { question, conselor } from "../../assets/img";
import { Helmet } from "react-helmet";
import transition from "../../components/transition/transition";

import { SpacingLayout, BoxContainer } from "../../layouts";
import ConsulHome from "../../components/sections/ConsulHome";

const Consultation = () => {
  const path = useLocation();

  const firstChar = path.pathname.slice(10).charAt(0).toUpperCase();
  const remainingPath = path.pathname.slice(11);
  const finalPath = firstChar.toUpperCase() + remainingPath;

  const withoutStrip = finalPath.replace(/[._-]/g, " ");
  return path.pathname != "/consultation" ? (
    <div className="Services">
      <Helmet>
        <title>
          {path.pathname.match("-") ? withoutStrip : finalPath} | Greenverse
        </title>
      </Helmet>
      <Outlet />
    </div>
  ) : (
    <div>
      <div className="wrapper">
        <SpacingLayout>
          <BoxContainer>
            <div className="mt-32">
              <ConsulHome />
            </div>
          </BoxContainer>
        </SpacingLayout>
      </div>
    </div>
  );
};

export default transition(Consultation);
