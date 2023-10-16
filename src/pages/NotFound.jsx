import { Helmet } from "react-helmet";
import notfound from "../assets/images/illustrations";

const NotFound = () => {
  return (
    <div>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className='w-full h-screen flex justify-center items-center'>
        <img src={notfound} alt='not found' className="w-[400px] sm:w-[600px]"/>
      </div>
    </div>
  );
};

export default NotFound;
