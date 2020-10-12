import React from "react";

//FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const NavItemDropDown = (props) => {
  return (
    <li className="nav-item dropdown p-0">
      <a
        className="nav-link dropdown-toggle py-3 pl-2 pr-2"
        href="#temp"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {props.title.toUpperCase()} <FontAwesomeIcon icon={faAngleDown} />
      </a>
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        {props.subtitles.map((subtitle) => (
          <a className="dropdown-item" href={subtitle} key={subtitle}>
            {subtitle.toUpperCase()}
          </a>
        ))}
      </div>
    </li>
  );
};

export default NavItemDropDown;
