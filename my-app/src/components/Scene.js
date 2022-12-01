import Simulation from "./notebook/notebookPopout/simulation/Simulation";
import Notebook from "./notebook/Notebook";
import { connect } from "react-redux";
import NotebookPopout from "./notebook/notebookPopout/NotebookPopout";
import React, { useState } from "react";
import { sections } from "./notebook/Notebook";
import NotebookIcon from "./notebook/img/hamburgerIcon.png";
import { Provider, useDispatch } from "react-redux";
import { IoCloseCircleSharp } from "react-icons/io5";

import logo from "./notebook/img/2ULogo.png";
// import NotebookIcon from "./notebook/img/notebook-icon"
function Scene({
  componentToRender,
  simulation,
  role,
  setRole,
  formatTimer,
  setSeconds,
  setMinutes,
  navigation,
}) {
  const [section, setSection] = useState("Introduction");
  // const [stateOpenClose, setStateOpenClose] = useState("open");
  const dispatch = useDispatch();
  window.onload = () => {
    document.querySelector(".testing-item2").focus();
  };
  return (
    <div className="testing">
      <div className="testing-item">
        {navigation ? (
          <Notebook
            tabIndex={1}
            state={section}
            setState={setSection}
            taskPages={sections}
            // setStateOpenClose={setStateOpenClose}
            // sliderOpen={false}
            simulation={simulation}
          />
        ) : (
          ""
        )}
      </div>
      <div className="testing-item2">
        <NotebookPopout
          index={sections.indexOf(section) + 1}
          // sectionSelected={section}
          onSelect={section}
          setState={setSection}
          simulation={simulation}
          role={role}
          formatTimer={formatTimer}
          setRole={setRole}
          setSeconds={setSeconds}
          setMinutes={setMinutes}
        />
      </div>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    role: state.role,
    navigation: state.navigation,
  };
};

export default connect(mapStateToProps, {})(Scene);
// export default Scene;
