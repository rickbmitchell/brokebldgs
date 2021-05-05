import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSoundcloud,
  faSpotify,
  faItunes,
  faYoutube,
  faBandcamp,
} from "@fortawesome/free-brands-svg-icons";

const Music = () => (
  <>
    <div className="music-container" id="music">
      <h1>music</h1>
      <img
        src="bb-cover-art.png"
        alt="image of the people in broke bldgs"
      />
      <div className="album-info">
        <p>
          <i>Resurrect Dead</i> — Debut Album
        </p>
        <p>Coming Soon</p>
      </div>
      {/* <div className="logo-container">
        <a href="#" id="spotify">
          <FontAwesomeIcon icon={faSpotify} />
        </a>
        <a href="#" id="itunes">
          <FontAwesomeIcon icon={faItunes} />
        </a>
        <a href="#" id="soundcloud">
          <FontAwesomeIcon icon={faSoundcloud} />
        </a>
        <a href="#" id="youtube">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="#" id="bandcamp">
          <FontAwesomeIcon icon={faBandcamp} />
        </a>
      </div> */}
    </div>
  </>
);

export default Music;
