import { useEffect, useState } from "react";
import "../../css/Navbar.css";
import bag from "../../imgs/Bag.png";

function Navbar() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [respBtnPressed, setRespBtnPressed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const respBtnFn = () => {
    setRespBtnPressed((prevState) => !prevState);
  };

  return (
    <nav>
      <a href="/" id="logo">
        Panto
      </a>
      {windowWidth >= 722 ? (
        <div className="chooses">
          <a href="/" className="choose">
            Furniture <i className="fa-solid fa-chevron-down"></i>
          </a>
          <a href="/" className="choose">
            Shop
          </a>
          <a href="/" className="choose">
            About Us
          </a>
          <a href="/" className="choose">
            Contact
          </a>
        </div>
      ) : (
        <>
          <a className="rightA" onClick={respBtnFn}>
            <i className="fa-solid fa-bars" style={{ fontSize: 25, position: 'absolute',right: 20, marginTop: -10}}></i>
          </a>
          {respBtnPressed && (
            <div className="responsive-menu">
              <a href="/" className="chooseResp">
                Furniture 
              </a>
              <a href="/" className="chooseResp">
                Shop
              </a>
              <a href="/" className="chooseResp">
                About Us
              </a>
              <a href="/" className="chooseResp">
                Contact
              </a>
            </div>
          )}
        </>
      )}
      <a href="/" className="rightA">
        <img src={bag} alt="Shopping bag" />
      </a>
    </nav>
  );
}

export default Navbar;
