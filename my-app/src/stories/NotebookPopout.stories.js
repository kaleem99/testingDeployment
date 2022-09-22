import React, { useState } from "react";
import NotebookPopout from "../components/notebook/notebookPopout/NotebookPopout";
import { store } from "../index";
import { Provider } from "react-redux";
import Introduction from "../components/notebook/notebookPopout/introduction/Introduction";

export default {
  title: "NotebookPopout",
  component: NotebookPopout,
  argTypes: {},
};

const Template = (args) => (
  <Provider store={store}>
    <NotebookPopout {...args} />
  </Provider>
);

export const Primary = Template.bind({});
Primary.args = {
  index: 0,
  sectionSelected: "Introduction",
  // setSimulation: ownProps.setSimulation,
  role: "Recruiter",
  // onSelect: ownProps.setState,
  // formatTimer: ownProps.formatTimer,
  level: 0,
  score: 0,
};
