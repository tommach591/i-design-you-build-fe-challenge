import "./Bottom.css";
import Landing from "../../utils/landing.svg";
import Arrow from "../../utils/arrow.svg";

function Bottom({ isMobile }) {
  return (
    <div className="Bottom">
      <div className="BottomContent">
        <img className="Landing" src={Landing} alt="Landing" />
        <div className="Comment">
          <h4>Exploration</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat id
            potenti faucibus nec, rhoncus, vulputate
          </p>
          <img className="Arrow" src={Arrow} alt="Arrow" />
        </div>
        <div className="Comment">
          <h4>Footprint</h4>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
