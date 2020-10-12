import React,{ useState, useEffect }  from "react";
import NavItemDropDown from "./NavItemDropDown";
import NavItemDropDownAdvanced from "./NavItemDropDownAdvanced";
import NavItemRegular from "./NavItemRegular";
import SocialBar from "./SocialBar";

//Check the size - and serve the right class

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

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

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <div className="wrapper">
          <div className="nav-main-container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
              <span className="divider pt-4">|</span> 
               <NavItemDropDown
                  title={"Home"}
                  subtitles={["Home 1", "Home 2", "Home 3"]}
                />
                <span className="divider pt-4">|</span> 
                {/* Make ot here */}
                { isMobile ? (
                  <NavItemDropDown title={"Lifestyle"} subtitles={["Lifestyle 1", "Lifestyle 2", "Lifestyle 3"]} />
                ) : (
                  <NavItemDropDownAdvanced title={"Lifestyle"} />
                )}
                <span className="divider pt-4">|</span> 
                <NavItemRegular title={"Technology"} />
                <span className="divider pt-4">|</span> 
                <NavItemDropDown
                  title={"Video"}
                  subtitles={["Video 1", "Video 2", "Video 3"]}
                />
                 <span className="divider pt-4">|</span> 
                <NavItemRegular title={"Travel"} />
                <span className="divider pt-4">|</span> 
                <NavItemDropDown
                  title={"Features"}
                  subtitles={["Feature 1", "Feature 2", "Feature 3"]}
                />
              </ul>
            </div>
            <div className="social-links">
              <SocialBar />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
