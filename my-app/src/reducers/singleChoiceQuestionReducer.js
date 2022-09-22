// import { findIndex, cloneDeep } from "lodash";
// import sendxAPI from "../xAPI";
import data from "../data/Reflection.json";
const reflection = [
  "l1",
  "l2",
  "l3",
  "l4",
  "l5",
  "l6",
  "l7",
  "l8",
  "l9",
  "l10",
];
const level = 0;

const initialState = {
  input1: "",
  input2: "",
  input3: "",
  input4: "",
  QuestionLevel: level,
  levelAmount: data.Content.Reflection.components[0].levels,
  QuestionContent:
    data.Content.Reflection.components[0].levels[reflection[0]].label,
  stateLevel: level,
  gotCorrectAnswer: false,
  reflectionLevels: reflection,
  AllQuestionAnswered: 0,
  dragAndDropAnswers: 0,
};

export default function SCQReducer(state = initialState, action) {
  switch (action.type) {
    case "OptionA":
      state.input1 = action.bool;
      return { ...state, ...{ input1: state.input1 } };
    case "OptionB":
      state.input2 = action.bool;
      return { ...state, ...{ input2: state.input2 } };
    case "OptionC":
      state.input3 = action.bool;
      return { ...state, ...{ input3: state.input3 } };
    case "OptionD":
      state.input4 = action.bool;
      return { ...state, ...{ input4: state.input4 } };
    case "INCREMENTREFLECTIONLEVEL":
      state.QuestionLevel += 1;
      state.QuestionContent = action.contentLevel;
      return {
        ...state,
        ...{
          QuestionLevel: state.QuestionLevel,
          QuestionContent: state.QuestionContent,
        },
      };
    case "CLEARINPUTS":
      state.input1 = "";
      state.input2 = "";
      state.input3 = "";
      state.input4 = "";
      return {
        ...state,
        ...{
          input1: state.input1,
          input2: state.input2,
          input3: state.input3,
          input4: state.input4,
        },
      };
    case "SETSTATELEVEL":
      state.stateLevel += 1;
      return {
        ...state,
        ...{ stateLevel: state.stateLevel },
      };
    case "CORRECTANSWER":
      state.gotCorrectAnswer = true;
      state.AllQuestionAnswered += 1;
      return {
        ...state,
        ...{
          gotCorrectAnswer: state.gotCorrectAnswer,
          AllQuestionAnswered: state.AllQuestionAnswered,
        },
      };
    case "CLEARCORRECTANSWER":
      state.gotCorrectAnswer = false;
      return { ...state, ...{ gotCorrectAnswer: state.gotCorrectAnswer } };
    case "INCREMENETDRAGANDDROP":
      state.dragAndDropAnswers += 1;
      return { ...state, ...{ dragAndDropAnswers: state.dragAndDropAnswers } };
    case "RESETDRAGANDDROP":
      state.dragAndDropAnswers = 0;
      return { ...state, ...{ dragAndDropAnswers: state.dragAndDropAnswers } };
    default:
      return state;
  }
}
