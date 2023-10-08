import { Navbar, Footer } from "../components/parts";
import Routing from "./Routing";

const Main = () => {
  return (
    <main className='bg-baseColor flex justify-center flex-col relative h-max'>
      <Navbar />
      <Routing />
      <Footer />
    </main>
  );
};

export default Main;
