import React, { useState } from "react";
import { store } from "../index";
import Simulation from "../components/notebook/notebookPopout/simulation/Simulation";
import { Provider } from "react-redux";
import table1 from "../components/notebook/notebookPopout/simulation/img/preview.jpeg";
import table2 from "../components/notebook/notebookPopout/simulation/img/preview2.jpeg";
import emotion from "../data/JSON-Examples/example 3/neutral.json";
const formatTimer = () => {
  const minutes = 0;
  const seconds = 0;
  let minResult = 0;
  let secResult = 0;
  if (minutes < 10) {
    minResult = "";
    minResult += "0" + minutes;
  }
  if (seconds < 10) {
    secResult = "";
    secResult += "0" + seconds;
  }
  const result = minResult + " : " + secResult;
  // dispatch({ type: "setTime", time: result });
  return result;
};
export default {
  title: "Simulation",
  component: Simulation,
  argTypes: {},
};

const Template = (args) => (
  <Provider store={store}>
    <Simulation {...args} />
  </Provider>
);

export const Primary = Template.bind({});

Primary.args = {
  role: "Candidate",
  level: 0,
  modal: "closeModal",
  image: table1,
  score: 0,
  CandidateEmotion: emotion,
  RecruiterEmotion: emotion,
  formatTimer: formatTimer,
  simulation: false
};
