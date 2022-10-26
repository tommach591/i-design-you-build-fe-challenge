import "./App.css";
import Side from "../Side";
import Main from "../Main";
import { useEffect, useState } from "react";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <div className="App">
      <Side isMobile={isMobile} />
      <Main isMobile={isMobile} />
    </div>
  );
}

export default App;
