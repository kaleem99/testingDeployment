import React, { Component, useState } from "react";
import { connect } from "react-redux";

import Introduction from "./introduction/Introduction";
import Materials from "./resources/Resources";
import Simulation from "./simulation/Simulation";
import Results from "./results/Results";
import Reflection from "./reflection/Reflection2";
// import MultipleChoiceQuestion from "../../MultipleChoiceQuestion";
import FinalContractResults from "./finalContract/FinalContract";
import Role from "./role/Role";
import { Provider, useDispatch } from "react-redux";
import "./NotebookPopout.scss";
import { sections } from "../Notebook";
import { setSecondsToZero, setMinutesToZero } from "../../../actions";
import NotebookSection from "../notebookSection/NotebookSection";
import data from "../../../data/notebook.json";
import RoleComponentsSVG from "../../OtherComponents/RoleComponentSVG";
import PopoutFooter from "./PopoutFooter";
const Progress = [
  "Introduction",
  "Role",
  "Important Resources",
  "Simulation",
  "Results",
  "Renegotiation",
  "Contract",
];
function NotebookPopout({
  sectionSelected,
  role,
  simulation,
  level,
  formatTimer,
  setSeconds,
  setMinutes,
  score,
  getTime,
}) {
  const dispatch = useDispatch();
  let ProtocolSteps = "";
  if (role) {
    ProtocolSteps = data.Notebook.Role[role].Information[1];
  }
  //TODO: choose which to render based on Redux state
  const nextSection = () => {
    let nextSection = sections.indexOf(sectionSelected) + 1;
    if (sectionSelected === sections[sections.length - 1]) {
      dispatch({ type: sections[0] });

      // this.props.onSelect({section: sections[nextSection]})
    } else {
      dispatch({ type: sections[nextSection] });
    }
  };
  const previousSection = () => {
    let prevSect = sections.indexOf(sectionSelected) - 1;
    dispatch({ type: sections[prevSect] });
  };
  const beginSimulation = () => {
    if (role === "Candidate" || role === "Recruiter") {
      dispatch({ type: "SimulationStartedTrue" });
      dispatch({ type: "SCORETOZERO" });
      dispatch({ type: "setTimeToZero" });
      setMinutes(getTime.minutes);
      setSeconds(getTime.seconds);
      dispatch({ type: "closeModal" });
      dispatch({ type: "SimulationStarted" });
    } else {
      dispatch({ type: "Select Role" });
      alert("please make sure to choose a role in the role section");
      return alert("You will be Redirected shortly.");
    }
  };
  const EndSimulation = () => {
    dispatch({ type: "SimulationStartedFalse" });
    dispatch({ type: "level" });
    dispatch({ type: "SimulationComplete" });
  };
  const buttonConditions = () => {
    return sectionSelected === "Simulation" && !simulation && !score
      ? "Begin Simulation"
      : sections.indexOf(sectionSelected) === sections.length - 1
      ? "Introduction"
      : level === 8 && sectionSelected === "Simulation"
      ? "End Simulation"
      : // : simulationCompleted === true
        // ? "Next section"
        "Next Section";
  };
  const buttonfunctionality = () => {
    return sectionSelected === "Simulation" && !simulation && !score
      ? beginSimulation
      : level === 8 && sectionSelected === "Simulation"
      ? EndSimulation
      : nextSection;
  };
  // render() {
  let body = "";
  switch (sectionSelected) {
    case "Introduction":
      body = <Introduction />;
      break;
    case "Select Role":
      body = <Role />;
      break;
    case "Additional Resources":
      body = <Materials />;
      break;
    case "Simulation":
      body = (
        <Simulation
          formatTimer={formatTimer}
          simulation={simulation}
          role={role}
        />
      );
      break;
    case "Results":
      body = <Results />;
      break;
    case "Test Your Knowledge":
      body = <Reflection />;
      break;
    case "Final Contract":
      body = <FinalContractResults />;
      break;
    default:
      break;
  }
  return (
    <div
      className="notebook-popout"
      onFocus={() => dispatch({ type: "False_Notebook_Section_Focus_Button" })}
    >
      <div className="popout-content">
        <div tabIndex={0} className="popout-body">
          <div className="header">
            <div
              className="firstDivHeaderDiv"
              style={
                simulation && sectionSelected === "Simulation"
                  ? { display: "grid" }
                  : { display: "inline" }
              }
            >
              {/* <h1 className="section-header"> */}
              {simulation && sectionSelected === "Simulation" ? (
                <RoleComponentsSVG role={role} />
              ) : (
                // <div></div>
                ""
              )}
              <h1 className="section-header">
                {!score && simulation && sectionSelected === "Simulation"
                  ? ProtocolSteps[level]
                  : sectionSelected === "Final Contract"
                  ? ""
                  : sectionSelected}
              </h1>
              {/* </h1> */}
            </div>
            {simulation || sectionSelected === "Simulation" ? (
              <div
                className="timer"
                style={
                  role === "Candidate"
                    ? { backgroundColor: "#e8387c" }
                    : role === "Recruiter"
                    ? { backgroundColor: "#58c7cc" }
                    : { backgroundColor: "gray" }
                }
              >
                {" "}
                <div>
                  <h1 className="pFont">Timer</h1>
                </div>{" "}
                <div>
                  <h1 role={"alert"}>{formatTimer()}</h1>
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          {body}
        </div>
      </div>
      {!simulation && (
        <PopoutFooter
          sectionSelected={sectionSelected}
          sections={sections}
          buttonConditions={buttonConditions}
          buttonfunctionality={buttonfunctionality}
          previousSection={previousSection}
        />
      )}
    </div>
  );
  // }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     EndSimulationGame1: () => dispatch({ type: "level" }),
//     beginSimulation: () => {},
//   };
// };
const mapStateToProps = (state, ownProps) => {
  return {
    index: ownProps.index,
    sectionSelected: state.sectionSelected,
    role: state.role,
    onSelect: ownProps.setState,
    formatTimer: ownProps.formatTimer,
    level: state.level,
    score: state.score,
    getTime: state.getTime,
    SCQ: state.SCQ,
    simulation: state.simulationNegotiation,
    NoteBookSectionButton: state.AccessibilityObject.NoteBookSectionButton,
  };
};

export default connect(mapStateToProps, {})(NotebookPopout);

// export default NotebookPopout;
