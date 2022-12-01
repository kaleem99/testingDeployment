import { connect, useDispatch } from "react-redux";
import "./Reflection.scss";
import { NegotiationData } from "../../../Prompts";
import { useState } from "react";
import data from "../../../../data/notebook.json";
let arr = [];
function Reflection({ options, role = "Candidate", renegotiateAmount, score }) {
  const dispatch = useDispatch();
  const levelNum = role === "Candidate" ? 4 : 0;
  const [index, setIndex] = useState(0);
  const [renegState, setRenegState] = useState(false);
  const [level, setLevel] = useState(levelNum);
  const [option, setOption] = useState(0);
  const roleData = data.Notebook.Role[role];
  const negotiationNames =
    data.Notebook.Role[role ? role : "Candidate"].Information[1];
  const tableDataAndInformation = () => {
    return (
      <div className="reflectionDiv">
        <p>
          Lets take a look at your results based on your negotiation, you only
          allowed to renegotiate two issues. Your results will be displayed once
          you complete the simulation.
          {score}
        </p>
        <table className="reflectionTable">
          <tr>
            <th>
              Negotiation
            </th>
            <th>
              Option Chosen
            </th>
            <th>
              Score
            </th>
          </tr>
          {options.map((obj, i) => (
            <tr>
              <td tabIndex={0}>
                <div>
                  {negotiationNames[i]}{" "}
                  <button onClick={() => changeState(i)}>Renegotiate</button>
                </div>
              </td>
              <td tabIndex={0}>{obj.option}</td>
              <td tabIndex={0}>{obj.points}</td>
            </tr>
          ))}
        </table>

        {/* <div className="reflection-container">
          <div className="reflection-item1">Renegotiate</div>
          <div className="reflection-item1">Negotiation</div>
          <div className="reflection-item1">Option Chosen</div>
          <div className="reflection-item1">Score</div>

          {options.map((obj, i) => (
            <>
              <div className="reflection-item">
                <button onClick={() => changeState(i)}>
                  Negotiation {i + 1}
                </button>
              </div>
              <div tabIndex={0} className="reflection-item">
                {NegotiationData[i]}
                <hr></hr>

              </div>
              
              <div tabIndex={0} className="reflection-item">
                {obj.option}
                <hr></hr>
              </div>
              <div tabIndex={0} className="reflection-item">
                {obj.points}
                <hr></hr>
              </div>
              
            </> */}
        {/* ))} */}
        {/* {options.map((obj, i) => (
            <div className="reflection-item">{NegotiationData[i]}</div>

          ))} */}
        {/* {options.map((obj, i) => (
            <div className="reflection-item">{obj.option}</div>
          ))}
          {options.map((obj, i) => (
            <div className="reflection-item">{obj.points}</div>
          ))} */}
      </div>
      // </div>
    );
  };
  const renegotiation = (index, roleData, state, setState) => {
    return !renegState ? (
      <div className="popup">
        <h1>{NegotiationData[index]} Renegotiation</h1>
        <div className="prompts">
          {roleData[NegotiationData[index]].map((data) => {
            return (
              <button
                className="btn1"
                onClick={() => {
                  setState(true);
                  // return optionChosen(opt.option);
                }}
              >
                {data.option}
              </button>
            );
          })}
        </div>
      </div>
    ) : (
      <div className="popup">
        {role === "Candidate" ? (
          <h2>
            Recruiter is offering{" "}
            {roleData[NegotiationData[index]][level].option}
          </h2>
        ) : (
          <h2>
            Candidate Wants {roleData[NegotiationData[index]][level].option}
          </h2>
        )}
        <button className="btn1" onClick={() => AcceptOffer()}>
          Accept
        </button>
        {role === "Candidate" && level > 0 ? (
          <button
            className="btn1"
            onClick={() =>
              role === "Candidate" ? setLevel(level - 1) : setLevel(level + 1)
            }
          >
            Decline
          </button>
        ) : role === "Recruiter" && level < 4 ? (
          <button
            className="btn1"
            onClick={() =>
              role === "Candidate" ? setLevel(level - 1) : setLevel(level + 1)
            }
          >
            Decline
          </button>
        ) : (
          ""
        )}
      </div>
    );
  };
  const AcceptOffer = () => {
    arr = [];
    setRenegState(false);
    role === "Candidate" ? setLevel(4) : setLevel(0);
    setOption("");
    options[index] = roleData[NegotiationData[index]][level];
    arr.push(...options);
    const result = options.map((opt) => opt.points);
    dispatch({ type: "AddNewOption", newStateArr: arr });
    dispatch({ type: "ADD", score: result.reduce((a, b) => a + b) });
    dispatch({ type: "RENEGOTIATEONE" });
  };
  const changeState = (i) => {
    console.log(score, role, score > 0);
    if ((role && score === 0) || (!role && score === 0)) {
      alert("Please Select Your Role and complete the Simulation");
      return true;
    }
    if (renegotiateAmount > 0 && role) {
      setOption("Renegotiate");
      setIndex(i);
      return true;
    }

    alert("You have used all your renegotiations");
  };
  switch (option) {
    case "Renegotiate":
      return renegotiation(index, roleData, renegState, setRenegState);
    default:
      return <div>{tableDataAndInformation()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    options: state.option,
    role: state.role,
    renegotiateAmount: state.renegotiateAmount,
    score: state.score,
  };
};

export default connect(mapStateToProps, {})(Reflection);
