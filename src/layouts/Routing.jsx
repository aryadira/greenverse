import { Routes, Route } from "react-router-dom";
import {
  Consultation,
  LandingPage,
  Topics,
  NotFound,
  Products,
  Brassicas,
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

const Routing = () => {
  return (
    <Routes>
      <Route path='/' exact element={<LandingPage />} />
      <Route path='products' element={<Products />}>
        <Route path='brassicas' element={<Brassicas />} />
        <Route path='cover-crop-mixes' element={<CoverCropMixes />} />
        <Route path='grains' element={<Grains />} />
        <Route path='grasses-millets-sorghums' element={<GrassesMilletsSorghums />} />
        <Route path='legumes' element={<Legumes />} />
      </Route>
      <Route path='/services' element={<Services />}>
        <Route path={"green-infrastructure"} element={<GreenInfrastructure />} />
        <Route path={"smart-irrigation"} element={<SmartIrrigationSystem />} />
        <Route path={"agriculture-plantation"} element={<AgriculturePlantation />} />
        <Route path={"vertical-farming"} element={<VerticalFarming />} />
      </Route>
      <Route path='/topics' element={<Topics />} />
      <Route path='/consultation' element={<Consultation />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
