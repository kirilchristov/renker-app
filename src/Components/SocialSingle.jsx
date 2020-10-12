import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SocialSingle = (props) => {
  return (
    <a className="social-single" id="navbarSingle" href="#temp">
      <FontAwesomeIcon icon={props.socialIcon} style={{ color: "white" }} />
    </a>
  );
};

export default SocialSingle;
