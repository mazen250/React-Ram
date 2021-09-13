import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../style/Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link
          to={{ pathname: "https://www.facebook.com/mazen.fayezmano/" }}
          target="_blank"
        >
          <FacebookIcon />
        </Link>
        <Link
          to={{ pathname: "https://www.instagram.com/mazenfayez/" }}
          target="_blank"
        >
          <InstagramIcon />
        </Link>
        <Link
          to={{ pathname: "https://twitter.com/fayez_mazen" }}
          target="_blank"
        >
          <TwitterIcon />
        </Link>
        <Link
          to={{
            pathname: "https://www.linkedin.com/in/mazen-fayez-31b693152/",
          }}
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
      </div>
      <p className="copyright">&copy; 2021 mazenfayez.com</p>
    </div>
  );
}

export default Footer;
