import "./Footer.css";
import logo from "../../assets/logoimage.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "react-responsive";

function Footer() {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <footer>
      <div className="foot">
        <div className="foot-content">
          <span className="heading"> Download the app now.</span>
          {isMobile ? (
            <span id="sec">Most calendars are designed for teams. </span>
          ) : (
            <span id="sec">
              Available on your favorite store. Start your premium experience
              now
            </span>
          )}
        </div>
        <div className="button-box">
            {isMobile ? (
            <><button className="button left-btn">Buy Now</button><button className="button right-btn"> Try for Free</button></>
        ):(
          <><button className="button left-btn"> Playstore</button><button className="button right-btn"> App store</button></>
          )}
        </div>
      </div>

      {isMobile?(<div className="footer-box">
       

        <div className="social-media-icons">
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <div className="last">
          Thanks for Visiting!
        </div>
      </div>)

      :(
      <div className="footer-box">
        <div>
          <img src={logo} alt="" style={{ width: "200px" }} />
        </div>

        <div className="social-media-icons">
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <a className="last" href="">
          Copywright 2020 Bella Onojie.com
        </a>
      </div>)}
    </footer>
  );
}

export default Footer;
