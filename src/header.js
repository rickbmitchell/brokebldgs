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
    bgImage="https://images.unsplash.com/photo-1565626424178-c699f6601afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2976&q=80"
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
