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
      <div className="singles-container">
        <div className="singles-cover">
          <img src="bb-cover-co.jpg" alt="Crushed Out cover" />
          <div className="single-info">
            <p>
              <i id="crushed">Crushed Out</i> — Debut Single
            </p>
            <a href="https://brokebldgs.bandcamp.com/track/crushed-out-2" target="_blank">Out Now</a>
          </div>
        </div>
        <div className="singles-cover">
          <img src="bb-cover-rc.jpg" alt="Razor Candy cover" />
          <div className="single-info">
            <p>
              <i id="crushed">Razor Candy</i> — Single #2
            </p>
            <a href="https://brokebldgs.bandcamp.com/track/razor-candy-2" target="_blank">Out Now</a>
          </div>
        </div>
      </div>
      <img src="bb-cover-art.png" alt="Resurrect Dead album cover" />
      <div className="album-info">
        <p>
          <i>Resurrect Dead</i> — Debut Album
        </p>
        <p>Released October 8th</p>
      </div>
      <div className="video-container">
      <iframe className="co-video" src="https://www.youtube.com/embed/PIXoG_ZH26M" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <div className="single-info">
            <p>
              <i id="crushed">Crushed Out</i> — Video
            </p>
          </div>
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
