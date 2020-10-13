import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import axios from "axios";

const NavItemDropDownAdvanced = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  const [data, setData] = useState({ hits: [] });

  // This func checks the size of the window in order to serve the right css class
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 990;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  // This func fetches the data
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/assets/content.json");
      setData(result.data);
    };
    fetchData();
  }, []);

  if (!data[0]) {
    return <></>;
  } else {
    return (
      <li className="nav-item dropdown">
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
        <div
          className={`${
            isMobile ? "dropdown-menu" : "dropdown-menu advanced p-0"
          }`}
          aria-labelledby="navbarDropdown"
        >
          <Tabs
            defaultTab="vertical-tab-one"
            vertical
            className="vertical-tabs"
          >
            <TabList>
              <Tab tabFor="vertical-tab-one">Health</Tab>
              <Tab tabFor="vertical-tab-two">Travel</Tab>
              <Tab tabFor="vertical-tab-three">Food</Tab>
              <Tab tabFor="vertical-tab-four">Fashion</Tab>
            </TabList>

            <TabPanel tabId="vertical-tab-one">
              <div className="vertical-container">
                {data.map((item) => (
                  <div className="vertical-container-item p-2" key={item._id}>
                  <img
                    className="vertical-tab-image rounded"
                    src={item.image}
                    alt="article"
                  />
                  <div>
                  <p className="vertical-tab-title">Sed ut lorem perspects omnis iste</p>
                  </div>
                  
                  </div>
                ))}
              </div>
            </TabPanel>

            <TabPanel tabId="vertical-tab-two">
              <p>Tab 2 content</p>
            </TabPanel>

            <TabPanel tabId="vertical-tab-three">
              <p>Tab 3 content</p>
            </TabPanel>
          </Tabs>
        </div>
      </li>
    );
  }
};

export default NavItemDropDownAdvanced;
