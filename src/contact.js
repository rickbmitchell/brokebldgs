import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => (
  <>
    <div className="contact-container" id="contact">
      <h1>contact</h1>
      <p className="contact-email">
        <a href="mailto:brokebldgsmusic@gmail.com">Email</a>
      </p>
      <a href="https://www.instagram.com/brokebldgs/" target="_blank" id="instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
    </div>
  </>
);

export default Contact;
