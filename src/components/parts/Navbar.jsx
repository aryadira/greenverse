import { Link } from "react-router-dom";
import { BoxContainer, SpacingLayout } from "../../layouts";

const Navbar = () => {
  return (
    <header>
      <SpacingLayout>
        <BoxContainer>
          <nav>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <div>
                <li>
                  <Link to={"/products"}>Products</Link>
                  <Link to={"/products/seeds"}>Seeds</Link>
                  <Link to={"/products/materials"}>Materials</Link>
                  <Link to={"/products/tools"}>Tools</Link>
                  <Link to={"/products/fertilizers"}>Fertilizer</Link>
                </li>
              </div>
              <li>
                <Link to={"/services"}>Services</Link>
                <Link to={"/services/green-infrastructure"}>Green infrastructure</Link>
                <Link to={"/services/smart-irrigation"}>Smart irrigation</Link>
                <Link to={"/services/agriculture-plantation"}>Agriculture plantation</Link>
                <Link to={"/services/vertical-farming"}>Vertical farming</Link>
              </li>
              <li>
                <Link to={"/topics"}>Topics</Link>
              </li>
              <li>
                <Link to={"/consultation"}>Consultation</Link>
              </li>
            </ul>
          </nav>
        </BoxContainer>
      </SpacingLayout>
    </header>
  );
};

export default Navbar;
