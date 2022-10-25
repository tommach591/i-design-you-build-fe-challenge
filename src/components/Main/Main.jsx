import "./Main.css";
import Header from "../Header";
import Display from "../Display";
import Bottom from "../Bottom";

function Main({ isMobile }) {
  return (
    <div className="Main">
      <Header isMobile={isMobile} />
      <Bottom isMobile={isMobile} />
      <Display isMobile={isMobile} />
    </div>
  );
}

export default Main;
