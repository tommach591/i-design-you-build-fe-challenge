import "./Header.css";
import Sun from "../../utils/sun.svg";
import Facebook from "../../utils/facebook.svg";
import Instagram from "../../utils/instagram.svg";
import Twitter from "../../utils/twitter.svg";
import { useState } from "react";

function Header({ isMobile }) {
  const [menuOn, setMenuOn] = useState();

  function getWeb() {
    return (
      <div className="Tab">
        <h3 className="Home">Home</h3>
        <h3 className="About">About</h3>
        <h3 className="Gallery">Gallery</h3>
        <h3 className="Contact">Contact</h3>
        <img src={Sun} alt="Sun" />
      </div>
    );
  }

  function getMobile() {
    return (
      <div className="Navigation">
        <div
          className="Burger"
          onClick={() => {
            setMenuOn(!menuOn);
          }}
        >
          <div className="Line" />
          <div className="Line Short" />
          <div className="Line" />
        </div>
        {menuOn ? (
          <div className="Menu">
            <h3 className="Home">Home</h3>
            <h3 className="About">About</h3>
            <h3 className="Gallery">Gallery</h3>
            <h3 className="Contact">Contact</h3>
            <img src={Sun} alt="Sun" />
            <div className="Socials">
              <img className="Facebook" src={Facebook} alt="Facebook" />
              <img className="Instagram" src={Instagram} alt="Instagram" />
              <img className="Twitter" src={Twitter} alt="Twitter" />
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }

  return <div className="Header">{isMobile ? getMobile() : getWeb()}</div>;
}

export default Header;
