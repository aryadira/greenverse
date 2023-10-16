import { Routes, Route, useLocation } from "react-router-dom";
import {
  Consultation,
  Questioner,
  Partner,
  LandingPage,
  Brassica,
  NotFound,
  Products,
  CoverCropMixes,
  Grains,
  GrassesMilletsSorghums,
  Services,
  AgriculturePlantation,
  GreenInfrastructure,
  SmartIrrigationSystem,
  VerticalFarming,
  Legumes,
} from "../pages";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { AnimatePresence } from "framer-motion";

const Routing = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index path='/' exact element={<LandingPage />} />
          <Route path='products' element={<Products />}>
            <Route path='brassica' element={<Brassica />} />
            <Route path='cover-crop-mixes' element={<CoverCropMixes />} />
            <Route path='grains' element={<Grains />} />
            <Route path='grasses-millets-sorghums' element={<GrassesMilletsSorghums />} />
            <Route path='legumes' element={<Legumes />} />
          </Route>
          <Route path="/services" element={<Services />}>
            <Route
              path={"green-infrastructure"}
              element={<GreenInfrastructure />}
            />
            <Route
              path={"smart-irrigation"}
              element={<SmartIrrigationSystem />}
            />
            <Route
              path={"agriculture-plantation"}
              element={<AgriculturePlantation />}
            />
            <Route path={"vertical-farming"} element={<VerticalFarming />} />
          </Route>
          <Route path="/consultation" element={<Consultation />}>
            <Route path={"questioner"} element={<Questioner />} />
            <Route path={"partner"} element={<Partner />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Routing;
