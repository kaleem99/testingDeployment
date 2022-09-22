import React, { useState } from "react";
import { store } from "../index";
import { Provider } from "react-redux";
import data from "../data/Reflection.json";
import SingleChoiceQuestion from "../components/questions/singleChoiceQuestion/SingleChoiceQuestion";
export default {
  title: "Single Choice Question",
  component: SingleChoiceQuestion,
  argTypes: {},
};
const questionsArr = data.Content.Reflection.components[0].levels["l2"];
const Template = (args) => (
  <Provider store={store}>
    <SingleChoiceQuestion {...args} />
  </Provider>
);

export const Primary = Template.bind({});
Primary.args = {
  // formatTimer={formatTimer}
  // setSimulation={setSimulation}
  level: 0,
  questionsArr,
  // setRole={setRole}
  // setSeconds={setSeconds}
  // setMinutes={setMinutes}
};
