import "./Display.css";
import Stairs from "../../utils/stairs.svg";
import Astro from "../../utils/astro.svg";

function Display({ isMobile }) {
  return (
    <div className="Display">
      <div className="Intro">
        <h1>Adventure Together</h1>
        <p>
          Voluptatem, sed asperiores ipsum itaque aliquam omnis dicta nostrum
          error pariatur sit recusandae unde magni libero repellendus illum
          alias ratione numquam autem!
        </p>
      </div>
      <div className="Picture">
        <img className="Stairs" src={Stairs} alt="Stairs" />
        <img className="Astro" src={Astro} alt="Astro" />
      </div>
    </div>
  );
}

export default Display;
