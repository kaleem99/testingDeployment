import "./App.css";
import Scene from "./components/Scene";
import Role from "./components/notebook/notebookPopout/role/Role";
import Simulation from "./components/notebook/notebookPopout/simulation/Simulation";
import TestingPrompts from "./data/TestingPrompts";
import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import StartHomePage from "./components/HomePage";
import { IoCloseCircleSharp } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import TopNavigationMenu from "./components/TopNav";
// import { sectionSelected } from "./reducers/sectionSelectedReducer";
function OpenClose({ navigation }) {
  const dispatch = useDispatch();
  return (
    <>
      {navigation === true ? (
        <h1 className="closeIcon" onClick={() => dispatch({ type: "close" })}>
          <IoCloseCircleSharp />
        </h1>
      ) : (
        <h1 className="closeIcon" onClick={() => dispatch({ type: "open" })}>
          <IoMenuOutline />
        </h1>
      )}
    </>
  );
}
function App({
  simulation,
  start,
  sectionSelected,
  navigation,
  getTime,
  score,
}) {
  const [seconds, setSeconds] = useState(getTime.seconds);
  const [minutes, setMinutes] = useState(getTime.minutes);
  const [role, setRole] = useState(false);
  const [windowSize, setWindow] = useState(false);
  const dispatch = useDispatch();
  // const state = useSelector((state) => state.time);
  const formatTimer = () => {
    let minResult = minutes;
    let secResult = seconds;
    if (minutes < 10) {
      minResult = "";
      minResult += "0" + minutes;
    }
    if (seconds < 10) {
      secResult = "";
      secResult += "0" + seconds;
    }
    const result = minResult + " : " + secResult;
    dispatch({ type: "setTime", time: result });
    return result;
  };

  const checkTimer = () => {
    // dispatch(incrementSec());
    setTimeout(() => {
      if (seconds === 0) {
        setMinutes(minutes - 1);
        // dispatch(incrementMin());
        setSeconds(59);
        // dispatch(setSecondsToZero());
      } else {
        setSeconds(seconds - 1);
        // dispatch(incrementSec());
      }
    }, 1000);
  };
  useEffect(() => {
    if (!simulation) {
      dispatch({ type: "level" });
    }
    if (!score && simulation) {
      checkTimer();
    } else if (simulation === true && minutes === 0) {
      alert("Your Time Has Expired");
      setTimeout(() => dispatch({ type: "SimulationStartedFalse" }), 2000);
    }
    if (window.innerWidth > 1000) {
      // dispatch({type: "open"})
      setWindow(true);
      dispatch({ type: "open" });
    } else {
      setWindow(false);
    }
  });
  return (
    <div className="App">
      <div className="app-item">
        <TopNavigationMenu
          OpenClose={OpenClose}
          windowSize={windowSize}
          navigation={navigation}
        />
      </div>
      <div className="app-item">
        {!start ? (
          <StartHomePage />
        ) : (
          <Scene
            formatTimer={formatTimer}
            simulation={simulation}
            role={role}
            setRole={setRole}
            setSeconds={setSeconds}
            setMinutes={setMinutes}
          />
        )}
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    level: state.level,
    seconds: state.seconds,
    minutes: state.minutes,
    start: state.start,
    sectionSelected: state.sectionSelected,
    navigation: state.navigation,
    getTime: state.getTime,
    score: state.score,
    simulation: state.simulationNegotiation,
  };
};
// export default connect(mapStateToProps, {
//   notebookSection,
//   notebookPopout,
//   setTotalProtocolPages,
//   toggleNotebookExpanded,
// })(Notebook);
export default connect(mapStateToProps, {})(App);
