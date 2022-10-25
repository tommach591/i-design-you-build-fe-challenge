import "./Side.css";
import Facebook from "../../utils/facebook.svg";
import Instagram from "../../utils/instagram.svg";
import Twitter from "../../utils/twitter.svg";

function Side() {
  return (
    <div className="Side">
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      />
      <h1 className="Title">Xae</h1>
      <div className="Socials">
        <img className="Facebook" src={Facebook} alt="Facebook" />
        <img className="Instagram" src={Instagram} alt="Instagram" />
        <img className="Twitter" src={Twitter} alt="Twitter" />
      </div>
    </div>
  );
}

export default Side;
