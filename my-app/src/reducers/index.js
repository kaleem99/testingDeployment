import { combineReducers } from "redux";

import modalReducer from "./modalReducer";
import moveMenuReducer from "./moveMenuReducer";
import notebookReducer from "./notebookReducer";
import sceneReducer from "./sceneReducer";
import protocolTableReducer from "./protocolTableReducer";
import { negotiationReducer } from "./NegotiationLevelReducer";
import { roleReducer } from "./RoleReducer";
import { timerReducer } from "./TimerReducer";
import { dataReducer } from "./DataReducer";
import { scoreReducer } from "./scoreReducer";
import { optionsChosen } from "./OptionsChosen";
import { renegotiateReducer } from "./Renegotiation";
import { newModalReducer } from "./newModal";
import { sectionSelected } from "./sectionSelectedReducer";
import { tableImageReducer } from "./tableImage";
import { openCloseReducer } from "./openCloseReducer";
import { homeReducer } from "./HomeReducer";
import { getTime } from "./getTimeReducer";
import { simulationReducer } from "./SimulationReducer";
import { PopupReducer } from "./PopupReducer";
import {
  CandidateEmotionReducer,
  RecruiterEmotionReducer,
} from "./EmotionReducer";
import { NegotiationOption } from "./negotiationOptionChosen";
import MCQ from "./multipleChoiceQuestionReducer";
// import SCQ from "./singleChoiceQuestionReducer";
import SCQReducer from "./singleChoiceQuestionReducer";
export default combineReducers({
  role: roleReducer,
  modal: modalReducer,
  moveMenu: moveMenuReducer,
  notebook: notebookReducer,
  scene: sceneReducer,
  protocolTable: protocolTableReducer,
  level: negotiationReducer,
  // seconds: setSecReducer,
  // minutes: setMinReducer,
  dataRole: dataReducer,
  score: scoreReducer,
  MCQ: MCQ,
  SCQ: SCQReducer,
  option: optionsChosen,
  renegotiateAmount: renegotiateReducer,
  newModal: newModalReducer,
  sectionSelected: sectionSelected,
  isComplete: tableImageReducer,
  start: homeReducer,
  navigation: openCloseReducer,
  CandidateEmotion: CandidateEmotionReducer,
  RecruiterEmotion: RecruiterEmotionReducer,
  NewOptionChosen: NegotiationOption,
  getTime: getTime,
  popupQuestion: PopupReducer,
  simulationNegotiation: simulationReducer,
});
