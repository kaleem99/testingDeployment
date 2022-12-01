import React, { Component, useState } from "react";
import { connect } from "react-redux";
import MultipleChoiceQuestion from "../../../../components/questions/multipleChoiceQuestion/MultipleChoiceQuestion";
import SingleChoiceQuestion from "../../../../components/questions/singleChoiceQuestion/SingleChoiceQuestion";
//import DragAndDropQuestion from 'components/notebook/notebookPopout/reflection/multipleChoiceQuestion/DragAndDropQuestion';
import ProgressBar from "@ramonak/react-progress-bar";
import { useDispatch } from "react-redux";
import ReflectionData from "../../../../data/Reflection.json";
import "./Reflection.scss";
import TestYourKnowldgeComponents from "./TestYourKnowledgeComponents";
import { IoIosCloseCircle } from "react-icons/io";

import { IoMdArrowRoundForward } from "react-icons/io";
import data from "../../../../data/Reflection.json";
// import {
//   createMCQ,
//   createSCQ,
//   //createDND,
// } from "../../../../actions";

// import colors from 'styles/_colors.scss';
const tableData = [
  "Salary",
  "Pension",
  "Medical Aid",
  "Petrol",
  "FlexTime",
  "Annual Leave",
];
function Reflection({ SCQ, popupQuestion, newModal }) {
  const dispatch = useDispatch();
  const arrObject = Object.entries(SCQ.levelAmount);
  const progressLevel = SCQ.QuestionLevel;
  const questionsArr =
    data.Content.Reflection.components[0].levels[
      SCQ.reflectionLevels[SCQ.stateLevel]
    ];
  const NextLevel = () => {
    if (SCQ.gotCorrectAnswer) {
      dispatch({
        type: "INCREMENTREFLECTIONLEVEL",
        contentLevel: questionsArr.label,
      });
      if (SCQ.stateLevel < SCQ.reflectionLevels.length - 1) {
        // setTimeout(() => {
        dispatch({ type: "SETSTATELEVEL" });
        dispatch({ type: "CLEARINPUTS" });
        // }, 1000);
      }

      dispatch({ type: "CLEARCORRECTANSWER" });
    }
  };
  return (
    <div>
      {newModal && (
        <div className="test123">
          {" "}
          <div className="ModalArea"></div>
          <div className="popupText" aria-haspopup={true}>
            <div>
              <p tabIndex={0}>{popupQuestion}</p>
            </div>
            <p
              tabIndex={0}
              className="closeIcon"
              onClick={() => dispatch({ type: "closeModal" })}
            >
              <IoIosCloseCircle />
            </p>
          </div>
        </div>
      )}
      <p className="header-text" tabIndex={0}>
        Let’s look at what you learned from this simulation. Please click on
        your answer to each of the following<br></br> questions to save them in
        your notebook.
      </p>
      {/* <br></br> */}
      <div className="reflection-test-your-knowledge-header">
        <div className="progress-bar">
          {/* <div className="progress"></div>
          <div></div>
          <div></div>
          <div></div> */}
          {arrObject.map((data, index) => {
            return (
              <div className={progressLevel > index ? "progress" : ""}></div>
            );
          })}
        </div>
        <div className="question-header-and-next">
          <div>
            <h2
              tabIndex={0}
              style={{
                margin: "32px 0 8px",
                textAlign: "left",
                fontSize: "32px",
                width: "200px",
              }}
            >
              Question {progressLevel < 10 ? progressLevel + 1 : progressLevel}{" "}
            </h2>
          </div>
          <div>
            {" "}
            <h2
              tabIndex={0}
              style={
                SCQ.gotCorrectAnswer
                  ? { color: "#3d75d5", width: "100px", textAlign: "right" }
                  : { color: "lightgray", width: "100px", textAlign: "right" }
              }
              onClick={() => NextLevel()}
            >
              <IoMdArrowRoundForward />
            </h2>
          </div>
        </div>
        {SCQ.QuestionLevel !== 4 && (
          <p tabIndex={0} className="header-text">
            {questionsArr.label}
          </p>
        )}
      </div>
      <TestYourKnowldgeComponents
        questionsArr={questionsArr}
        tableData={tableData}
        level={SCQ.QuestionLevel}
      />
      {SCQ.QuestionLevel === 4 && (
        <p tabIndex={0} className="header-text">
          {questionsArr.label}
        </p>
      )}

      <SingleChoiceQuestion questionsArr={questionsArr} />
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    SCQ: ownProps.SCQ || state.SCQ,
    popupQuestion: state.popupQuestion,
    newModal: state.newModal,
  };
};
export default connect(mapStateToProps, {})(Reflection);
