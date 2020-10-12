import React,{ useState, useEffect }  from "react";

const NavItemRegular = (props) => {
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
    <li className="nav-item">
      <a className={`${
            isMobile ? "nav-link p-2" : "nav-link p-3"
          }`} href="#home">
        {props.title.toUpperCase()}
      </a>
    </li>
  );
};

export default NavItemRegular;