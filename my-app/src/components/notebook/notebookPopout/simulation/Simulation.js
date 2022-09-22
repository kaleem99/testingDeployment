import Draggable from "react-draggable";
import { Square, Circle } from "../../../Shapes";
import { useState, useEffect } from "react";
import Notebook from "../../Notebook";
import { useSelector, useDispatch } from "react-redux";
import table1 from "./img/preview.jpeg";
import table2 from "./img/preview2.jpeg";

import employer from "./img/employer.png";
import "./Simulation.scss";
import { connect } from "react-redux";
import SimulationPrompts from "../../../Prompts";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import { IoIosCloseCircle } from "react-icons/io";
import candidateImage from "../role/img/candidate.png";
import recruiterImage from "../role/img/recruiter.png";
import React from "react";
// import './styles.css';
import Lottie from "react-lottie";
import happy from "../../../../data/JSON-Examples/example 3/happy.json";
import neutral from "../../../../data/JSON-Examples/example 3/neutral.json";
import angry from "../../../../data/JSON-Examples/example 3/angry.json";
import homeImage from "../../img/homeImage.png";
import Reflection from "../reflection/Reflection";

// const arr = [Square, Circle];
function Animation({ CandidateEmotion, RecruiterEmotion }) {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: CandidateEmotion,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: RecruiterEmotion,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="animation">
      <Lottie
        isStopped={false}
        options={defaultOptions1}
        height={100}
        width={100}
      />
      <Lottie
        isStopped={false}
        options={defaultOptions2}
        height={100}
        width={100}
      />
      {/* <button onClick={() => setEmotion(false)}>start</button>
      <button onClick={() => setEmotion(true)}>stop</button>
      <button onClick={() => setNewEmotion(angry)}>Update emotion</button> */}
    </div>
  );
}
function Simulation({
  simulation,
  role,
  level,
  formatTimer,
  modal,
  isComplete,
  score,
  emotion,
  CandidateEmotion,
  RecruiterEmotion,
}) {
  // const [modal, setModal] = useState(true);
  const dispatch = useDispatch();
  const [renegotiate, setRenegotiate] = useState(false);
  const [state, setState] = useState("Closed");
  return (
    <DeviceOrientation lockOrientation={"landscape"}>
      <Orientation orientation="landscape" alwaysRender={false}>
        <div className="scene">
          {!isComplete ? (
            <div>
              {!simulation ? (
                <>
                  <div className="popup1">
                    <div>
                      <img
                        alt="please select a role"
                        src={
                          role === "Candidate"
                            ? candidateImage
                            : role === "Recruiter"
                            ? recruiterImage
                            : homeImage
                        }
                      ></img>
                    </div>
                    <div>
                      {" "}
                      <h3>
                        {role ? "Role you have chosen" : "please select a role"}
                        <p>{role}</p>
                      </h3>
                    </div>
                  </div>
                  <p className="simulation-content">
                    Please read the following candidate information to
                    familiarize yourself with the motivations of the <br></br>
                    candidate’s role. You should note that each issue has a
                    different degree of importance to you, as <br></br>{" "}
                    indicated by the magnitude of the number of points you could
                    gain or lose. You will have 30 minutes <br></br> to reach
                    agreement on all 8 issues. In order for any agreement to be
                    binding, you need to reach an <br></br> agreement with the
                    employer on all eight issues.
                  </p>
                </>
              ) : (
                <>
                <h2>{simulation.toString()}</h2>
                  <Animation
                    CandidateEmotion={CandidateEmotion}
                    RecruiterEmotion={RecruiterEmotion}
                  />
                  <SimulationPrompts level={level} role={role} />
                </>
              )}
            </div>
          ) : (
            <>
              {!renegotiate ? (
                <div className="popup">
                  <div className="modal">
                    {/* <h1 onClick={() => dispatch({ type: "closeModal" })}>
                      <IoIosCloseCircle />
                    </h1> */}
                  </div>
                  <h2>
                    You're have completed the simulation and scored: {score}.
                  </h2>
                  <p>
                    If You not happy with your score you are allowed to
                    renegotiate 2 issues.
                  </p>
                  <br></br>
                  <button className="btn1" onClick={() => setRenegotiate(true)}>
                    Renegotiate Results
                  </button>
                </div>
              ) : (
                <Reflection />
              )}
            </>
          )}
        </div>
      </Orientation>
      {/* Will stay in DOM, but is only visible in portrait */}
      <Orientation orientation="portrait">
        <div className="DivP">
          <p className="pRotate">Please rotate your device</p>
        </div>
      </Orientation>
    </DeviceOrientation>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    role: state.role,
    level: state.level,
    modal: state.newModal,
    image: state.image,
    score: state.score,
    CandidateEmotion: state.CandidateEmotion,
    RecruiterEmotion: state.RecruiterEmotion,
    isComplete: state.isComplete,
  };
};
export default connect(mapStateToProps, {})(Simulation);
