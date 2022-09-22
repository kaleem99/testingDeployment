import React, { useState } from "react";
import App from "../App";
import { store } from "../index";
import { Provider } from "react-redux";
import Introduction from "../components/notebook/notebookPopout/introduction/Introduction";

export default {
  title: "App",
  component: App,
  argTypes: {},
};

const Template = (args) => (
  <Provider store={store}>
    <App {...args} />
  </Provider>
);

export const Primary = Template.bind({});
Primary.args = {
  index: 0,
  sectionSelected: "Introduction",
  role: "Recruiter",
  // onSelect: ownProps.setState,
  // formatTimer: ownProps.formatTimer,
  level: 0,
  score: 0,
};
