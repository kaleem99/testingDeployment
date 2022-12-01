import { useState } from "react";
import { useDispatch } from "react-redux";
import "./components/notebook/notebookPopout/simulation/Simulation.scss";
import { connect } from "react-redux";
import SimulationPrompts from "./components/Prompts";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
import candidateImage from "./components/notebook/notebookPopout/role/img/candidate.png";
import recruiterImage from "./components/notebook/notebookPopout/role/img/recruiter.png";
import React from "react";
// import './styles.css';
import Lottie from "react-lottie";
import homeImage from "./components/notebook/img/homeImage.png";
import Reflection from "./components/notebook/notebookPopout/reflection/Reflection";
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
            <div key={1}>
              {!simulation ? (
                <div key={2} className="simulationContent">
                  <div key={3} className="popup1">
                    <div key={4}>
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
                    <div key={5}>
                      {" "}
                      <h3>
                        {role ? "Role you have chosen" : "please select a role"}
                        <p>{role}</p>
                      </h3>
                    </div>
                  </div>
                  <div key={6} className="div-content">
                    <p className="simulation-content">
                      Please read the following candidate information to
                      familiarize yourself with the motivations of the <br></br>
                      candidate’s role. You should note that each issue has a
                      different degree of importance to you, as <br></br>{" "}
                      indicated by the magnitude of the number of points you
                      could gain or lose. You will have 30 minutes <br></br> to
                      reach agreement on all 8 issues. In order for any
                      agreement to be binding, you need to reach an <br></br>{" "}
                      agreement with the employer on all eight issues.
                    </p>
                  </div>
                </div>
              ) : (
                <>
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
                <div key={7} className="popup">
                  <div key={8} className="modal">
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
        <div key={9} className="DivP">
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
