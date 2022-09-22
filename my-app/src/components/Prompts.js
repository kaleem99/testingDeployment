import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import data from "../data/notebook.json";
import { incrementLevel } from "../actions";
import PopupPrompts from "./OtherComponents/PopupPrompts";
import RenderNegotiations from "./OtherComponents/RenderNegotiations";
export const NegotiationData = [
  "JobAssignment",
  "VacationTime",
  "StartingDate",
  "MovingExpenseCoverage",
  "InsuranceCoverage",
  "Salary",
  "AnnualBonusOption",
  "Location",
];
const arr = [];
function SimulationPrompts({ role, setRole, level, NewOptionChosen, score }) {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const [randomOffer, setRandomOffer] = useState(0);
  const [option, setOption] = useState();
  const [loop, setLoop] = useState(true);
  const [result, setResult] = useState(0);
  const [message, setMessage] = useState(false);
  const [negotiationState, setNegotiationState] = useState(true);

  const roleData = data.Notebook.Role[role];

  let [negotiation, setNegotiation] = useState(NegotiationData[level]);

  const [percent, setPercent] = useState(roleData[negotiation].length - 1);

  const randomCounterOffer = () => {
    const numbersArr = [0, 1, 2, 3, 4];
    let numbersArrLength = numbersArr.slice(0, 3);
    if (role === "Recruiter") {
      numbersArrLength = numbersArr.slice(2, 5);
    }
    const random = Math.floor(Math.random() * numbersArrLength.length);
    return numbersArrLength[random];
  };
  const formatNumber = () => {
    const givenNumber = roleData[negotiation][percent].points;
    const numFormat = new Intl.NumberFormat("en-US");
    return numFormat.format(givenNumber);
  };
  const negotiationCompleted = () => {
    dispatch({ type: "ADD", score: result });
    dispatch({ type: "AddNewOption", newStateArr: arr });
    setTimeout(() => {
      dispatch({ type: "SimulationStartedFalse" });
      dispatch({ type: "level" });
      dispatch({ type: "SimulationComplete" });
      dispatch({ type: "openModal" });
    }, 3000);
    return (
      <>
        <h1>Negotiation Completed: {score}</h1>
      </>
    );
  };
  const candidateAndRecruiterAgree = () => {
    checkEmotions();
    return (
      <>
        {" "}
        <p>{message ? "Recruiter agrees with your offer. " : ""}You Scored</p>
        <h1>{formatNumber()} points</h1>
        <button className="btn1" onClick={() => nextNegotiation()}>
          Next Negotiation
        </button>
      </>
    );
  };
  const checkEmotions = () => {
    let indexOfOptionGotten = roleData[negotiation].indexOf(
      roleData[negotiation][percent]
    );
    let indexOfOptionChosen = roleData[negotiation]
      .map((val) => val.option === NewOptionChosen)
      .indexOf(true);

    if (
      NewOptionChosen === roleData[negotiation][percent].option &&
      indexOfOptionChosen === 0
    ) {
      dispatch({ type: "HAPPYCANDIDATE" });
      dispatch({ type: "ANGRYRECRUITER" });
      return 0;
    }
    if (NewOptionChosen === roleData[negotiation][percent].option) {
      dispatch({ type: "HAPPYCANDIDATE" });
      dispatch({ type: "HAPPYRECRUITER" });
      setMessage(true);
    }
    if (indexOfOptionChosen < indexOfOptionGotten) {
      dispatch({ type: "ANGRYCANDIDATE" });
      dispatch({ type: "HAPPYRECRUITER" });
      return 0;
    }
    if (indexOfOptionChosen > indexOfOptionGotten) {
      dispatch({ type: "HAPPYCANDIDATE" });
      dispatch({ type: "ANGRYRECRUITER" });
      return 0;
    }
  };
  const nextNegotiation = () => {
    setNegotiation(NegotiationData[level]);
    setLoop(true);
    setPercent(roleData[negotiation].length - 1);
    setMessage(false);
    setNegotiationState(true);
  };
  const AcceptOffer = (opt) => {
    arr.push(roleData[negotiation][percent]);
    setResult(result + roleData[negotiation][percent].points);
    dispatch(incrementLevel());
    setLoop(false);
  };
  const option1 = () => {
    return (
      <PopupPrompts
        loop={loop}
        roleData={roleData}
        negotiation={negotiation}
        percent={percent}
        AcceptOffer={AcceptOffer}
        randomOffer={randomOffer}
        setPercent={setPercent}
        NegotiationData={NegotiationData}
        negotiationCompleted={negotiationCompleted}
        candidateAndRecruiterAgree={candidateAndRecruiterAgree}
      />
    );
  };
  const optionChosen = (bonusOption) => {
    dispatch({ type: "SETNEWOPTION", newOption: bonusOption });
    setRandomOffer(randomCounterOffer());
    setState(true);
    setOption(
      roleData[negotiation]
        .map((opt) => opt.option === bonusOption)
        .indexOf(true) + 1
    );
    alert("You have requested " + bonusOption);
    if (role === "Candidate") {
      switch (bonusOption) {
        case "2%":
        case "Entry Level":
        case "5 Days":
        case "August 1":
        case "60%":
        case "$82,000":
        case "Long-Term Care Insurance":
        case "New York":
          return AcceptOffer(bonusOption);
        case "10%":
        case "Manager":
        case "25 Days":
        case "June 1":
        case "100%":
        case "Umbrella Insurance":
        case "$90,000":
        case "San Francisco":
          setPercent(percent - 1);
          return option1();
        default:
          setPercent(roleData[negotiation].length - 1);
          return option1();
      }
    } else {
      setPercent(0);
      return option1();
    }
  };
  return (
    <RenderNegotiations
      negotiation={negotiation}
      roleData={roleData}
      optionChosen={optionChosen}
      option1={option1}
      negotiationState={negotiationState}
      setNegotiationState={setNegotiationState}
      level={level}
    />
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    role: ownProps.role,
    level: ownProps.level,
    // simulation: ownProps.simulation
    NewOptionChosen: state.NewOptionChosen,
    score: state.score
  };
};

export default connect(mapStateToProps, {})(SimulationPrompts);
