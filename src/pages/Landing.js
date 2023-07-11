import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            I'm baby blackbird spyplane fashion axe af chia mustache knausgaard
            letterpress before they sold out readymade. Irony mixtape XOXO, kogi
            sriracha DSA green juice vinyl. Bicycle rights Brooklyn four loko
            same asymmetrical. Farm-to-table semiotics flexitarian mixtape
            praxis asymmetrical XOXO paleo, artisan pok pok DSA williamsburg
            truffaut. 8-bit chartreuse
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
