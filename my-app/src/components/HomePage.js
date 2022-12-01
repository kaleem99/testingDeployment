import "./HomePage.scss";
import homeImage from "./notebook/img/homeImage.png";
import { useDispatch } from "react-redux";
export default function StartHomePage() {
  const dispatch = useDispatch();
  return (
    <div className="homePage">
      <div className="start-container">
        <div className="start-item">
          <h1>Negotiating an <br></br> employment contract</h1>
          <h2>A live simulation</h2>
          <button onClick={() => dispatch({ type: "StartSimulationHomePage" })}>
            Start
          </button>
        </div>
        <div className="start-item">
          <img src={homeImage} alt="Negotioation simuation logo"></img>
        </div>
      </div>
    </div>
  );
}

// <h1>Negotiating an employment contract</h1>
//             <button>Start</button>
