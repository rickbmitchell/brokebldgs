import { Parallax, Background } from "react-parallax";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faInfoCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const Header = () => (
  <Parallax
    blur={0}
    bgImage="./bb-concrete.jpeg"
    bgImageAlt="a background image of concrete blocks"
    strength={200}
  >
    {/* <div className="header-nav-wrapper">
      <a href="#" id="music">
        <FontAwesomeIcon icon={faMusic} />
      </a>
      <a href="#" id="info">
        <FontAwesomeIcon icon={faInfoCircle} />
      </a>
      <a href="#" id="contact">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div> */}
    <h1 className="header-name">
      broke<br></br>
      <span className="header-second">bldgs</span>
    </h1>
  </Parallax>
);

export default Header;
