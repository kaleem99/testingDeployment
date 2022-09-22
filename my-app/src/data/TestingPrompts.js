import { render } from "@testing-library/react";
import React, { useState } from "react";
import { connect } from "react-redux";
import data from "./notebook.json";
import BonusNegotiation from "../components/NegotitationConcerns/Bonus";
import JobAssignment from "../components/NegotitationConcerns/JobAssignment";
import VacationTime from "../components/NegotitationConcerns/Vacation";
const NegotiationData = ["BonusOption", "JobAssignment", "VacationTime"];
function TestingPrompts({ role, setRole }) {
  const [state, setState] = useState(false);
  const [option, setOption] = useState();
  const [loop, setLoop] = useState(true);
  const roleData = data.Notebook.Role[role];
  let [level, setLevel] = useState(0);
  let [negotiation, setNegotiation] = useState(NegotiationData[level]);
  const [percent, setPercent] = useState(roleData[negotiation].length - 1);

  const popupPrompt = () => {
    return (
      <div className="prompts">
        {loop ? (
          <>
            <h2>
              {roleData.question} {roleData[negotiation][percent].option}{" "}
              {roleData[negotiation][percent].reason}
            </h2>
            <button className="btn1" onClick={() => AcceptOffer()}>
              Accept
            </button>
            <button className="btn1" onClick={() => setPercent(percent - 1)}>
              Decline
            </button>
          </>
        ) : level === 3 ? (
          <>
            <h1>Negotiation Completed</h1>
          </>
        ) : (
          <>
            {" "}
            <h2>Your Scored: {roleData[negotiation][percent].points} points</h2>
            <button onClick={() => nextNegotiation()}>Next Negotiation</button>
          </>
        )}
      </div>
    );
  };
  const nextNegotiation = () => {
    setNegotiation(NegotiationData[level]);
    setLoop(true);
    setPercent(roleData[negotiation].length - 1);
    console.log(roleData[negotiation].length - 1);
  };
  const AcceptOffer = () => {
    //   alert()
    setLevel(level + 1);
    setLoop(false);
  };
  const option1 = () => {
    return popupPrompt();
  };
  const optionChosen = (bonusOption) => {
    setState(true);
    setOption(
      roleData[negotiation]
        .map((opt) => opt.option === bonusOption)
        .indexOf(true) + 1
    );
    alert("You have requested " + bonusOption);
    console.log(roleData[negotiation], percent);
    switch (bonusOption) {
      case "10%":
        setPercent(percent - 1);
        return option1();
      case "A":
        setPercent(percent - 1);
        return option1();
      case "25 Days":
        setPercent(percent - 1);
        return option1();
      default:
        setPercent(roleData[negotiation].length - 1);
        return option1();
    }
  };
  const renderSectionalList = () => {
    return (
      <div>
        <h2>Bonus Option</h2>
        <p>Role You have chosen: {role}</p>
        {state === false ? (
          <div className="prompts">
            <h2>{roleData.question1}</h2>
            {roleData[negotiation].map((opt) => {
              return (
                <button
                  className="btn1"
                  onClick={() => optionChosen(opt.option)}
                >
                  {opt.option}
                </button>
              );
            })}
          </div>
        ) : (
          /* eval(`option${option}()`*/ option1()
        )}
      </div>
    );
  };
  switch (negotiation) {
    case "BonusOption":
      return (
        <BonusNegotiation
          role={role}
          negotiation={negotiation}
          level={level}
          roleData={roleData}
          optionChosen={optionChosen}
          option1={option1}
        />
      );
    case "JobAssignment":
      return (
        <JobAssignment
          role={role}
          negotiation={negotiation}
          level={level}
          roleData={roleData}
          optionChosen={optionChosen}
          option1={option1}
          //   setLoop={setLoop}
        />
      );
    case "VacationTime":
      return (
        <VacationTime
          role={role}
          negotiation={negotiation}
          level={level}
          roleData={roleData}
          optionChosen={optionChosen}
          option1={option1}
        />
      );
    default:
      return <div>Hello</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    role: ownProps.role,
  };
};

export default connect(mapStateToProps, {})(TestingPrompts);
