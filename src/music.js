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
      <img src="bb-cover-art.png" alt="image of the people in broke bldgs" />
      <div className="album-info">
        <p>
          <i>Resurrect Dead</i> — Debut Album
        </p>
        <p>Coming Soon</p>
      </div>
      <div className="single-info">
        <p>
          <i id="crushed">Crushed Out</i> — Debut Single
        </p>
        <p>Out Now</p>
      </div>
      <div className="logo-container">
        <a
          href="https://open.spotify.com/artist/5jn5ThEj7cSNU5muBWSOvy"
          target="_blank"
          id="spotify"
        >
          <FontAwesomeIcon icon={faSpotify} />
        </a>
        <a href="https://music.apple.com/us/artist/broke-bldgs/1576904673" target="_blank" id="itunes">
          <FontAwesomeIcon icon={faItunes} />
        </a>
        <a
          href="https://soundcloud.com/user-695221887"
          target="_blank"
          id="soundcloud"
        >
          <FontAwesomeIcon icon={faSoundcloud} />
        </a>
        <a
          href="https://brokebldgs.bandcamp.com/"
          target="_blank"
          id="bandcamp"
        >
          <FontAwesomeIcon icon={faBandcamp} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCeO2gwNYLIwGOsvNmArToQw"
          target="_blank"
          id="youtube"
        >
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
  </>
);

export default Music;
