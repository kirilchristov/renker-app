import React from "react";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocialSingle from "./SocialSingle";

const SocialBar = () => {
  return (
    <div className="social-wrapper">
      <div className="social-container">
        <SocialSingle socialIcon={faFacebookF} />
        <SocialSingle socialIcon={faTwitter} />
        <SocialSingle socialIcon={faInstagram} />
        <SocialSingle socialIcon={faLinkedinIn} />
      </div>
      <div className="social-single search-icon">
        <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} />
      </div>
    </div>
  );
};
export default SocialBar;
