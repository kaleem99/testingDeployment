import React, { Component, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { setSCQResponse, validateSCQ } from "../../../actions";
import "./SingleChoiceQuestion.scss";
import img from "../../notebook/notebookPopout/reflection/img/gel-5.10.svg";
import data from "../../../data/Reflection.json";
import QuestionOneDragAndDrop from "./QuestionOneDragAndDrop";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

function SingleChoiceQuestion({ SCQ, questionsArr }) {
  const dispatch = useDispatch();
  const onHandleClick = (input, index) => {
    if (index === 1) {
      dispatch({ type: "OptionA", bool: input.correct });
    }
    if (index === 2) {
      dispatch({ type: "OptionB", bool: input.correct });
    }
    if (index === 3) {
      dispatch({ type: "OptionC", bool: input.correct });
    }
    if (index === 4) {
      dispatch({ type: "OptionD", bool: input.correct });
    }
    dispatch({ type: "NEW-POPUP-QUESTION", NEW_QUESTION: input.label });
    dispatch({ type: "openModal" });
    if (input.correct) {
      dispatch({ type: "CORRECTANSWER" });
    }
  };
  return (
    <div className="singleChoiceQuestion">
      {SCQ.QuestionLevel > 0 ? (
        questionsArr.choices.map((input, index) => (
          <div
            className={
              eval(`SCQ.input${index + 1}`) === ""
                ? "input" + index
                : eval(`SCQ.input${index + 1}`)
                ? "inputChecked"
                : "inputNotChecked"
            }
            onClick={() =>
              SCQ.QuestionLevel < 10 ? onHandleClick(input, index + 1) : ""
            }
          >
            {eval(`SCQ.input${index + 1}`) === "" ? (
              <button className="checkmark">{input.Option}</button>
            ) : !eval(`SCQ.input${index + 1}`) ? (
              <IoIosCloseCircle className="closeMarkIcon" />
            ) : (
              <IoIosCheckmarkCircle className="checkMarkIcon" />
            )}
            {/* <p className="input-text">{input.label}</p> */}
          </div>
        ))
      ) : (
        <QuestionOneDragAndDrop SCQ={SCQ} />
      )}
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    SCQ: state.SCQ,
    questionsArr: ownProps.questionsArr,
  };
};
export default connect(mapStateToProps, {})(SingleChoiceQuestion);
