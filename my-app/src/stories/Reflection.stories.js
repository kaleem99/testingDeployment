import Reflection2 from "../components/notebook/notebookPopout/reflection/Reflection2";

import React from "react";
import { store } from "../index";
import { Provider } from "react-redux";
import data from "../data/Reflection.json";

import "../components/notebook/notebookPopout/finalContract/FinalContract.scss";
export default {
  title: "Reflection Test your knowledge",
  component: Reflection2,
  argTypes: {},
};

const Template = (args) => (
  <Provider store={store}>
    <Reflection2 {...args} />
  </Provider>
);
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
const level = 9;
const SCQ = {
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
};
export const Primary = Template.bind({});
Primary.args = {
  SCQ,
};
