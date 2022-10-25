import "./Header.css";
import Sun from "../../utils/sun.svg";

function Header({ isMobile }) {
  return (
    <div className="Header">
      <div className="Tab">
        <h3 className="Home">Home</h3>
        <h3 className="About">About</h3>
        <h3 className="Gallery">Gallery</h3>
        <h3 className="Contact">Contact</h3>
        <img src={Sun} alt="Sun" />
      </div>
    </div>
  );
}

export default Header;
