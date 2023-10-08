import { Routes, Route } from "react-router-dom";
import {
  Consultation,
  LandingPage,
  Topics,
  NotFound,
  Products,
  Seeds,
  Materials,
  Tools,
  Fertilizers,
  Services,
  AgriculturePlantation,
  GreenInfrastructure,
  SmartIrrigationSystem,
  VerticalFarming,
} from "../pages";

const Routing = () => {
  return (
    <Routes>
      <Route path='/' exact element={<LandingPage />} />
      <Route path='products' element={<Products />}>
        <Route path='seeds' element={<Seeds />} />
        <Route path='materials' element={<Materials />} />
        <Route path='tools' element={<Tools />} />
        <Route path='fertilizers' element={<Fertilizers />} />
      </Route>
      <Route path='/services' element={<Services />}>
        <Route path={"green-infrastructure"} element={<GreenInfrastructure />} />
        <Route path={"smart-irrigation"} element={<SmartIrrigationSystem />} />
        <Route path={"agriculture-plantation"} element={<AgriculturePlantation />} />
        <Route path={"vertical-farming"} element={<VerticalFarming />} />
      </Route>
      <Route path='/topics' element={<Topics />} />
      <Route path='/consultation' element={<Consultation />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
