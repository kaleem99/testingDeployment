import React from "react";
import FinalContract from "../components/notebook/notebookPopout/finalContract/FinalContract";
import {store} from "../index"
import { Provider } from "react-redux";
import "../components/notebook/notebookPopout/finalContract/FinalContract.scss"
export default {
    title: "FinalContract",
    component: FinalContract,
    argTypes: {},
}

const Template = (args) => (
    <Provider store={store}>
        <FinalContract {...args} />
    </Provider>
)
const initialState = [
    { option: "6%", reason: "Reason...", points: 2000},
    { option: "Manager", reason: "", points: 0 },
    { option: "20 Days", reason: "Reason...", points: 1200 },
    { option: "July 1", reason: "Reason...", points: 3200 },
    { option: "100%", reason: "Reason...", points: -6000 },
    { option: "$82,000", reason: "Reason...", points: 900 },
    { option: "Atlanta", reason: "Reason...", points: 1500 },
  ];
export  const Primary = Template.bind({});
Primary.args = {
    
    role: "Candidate",
    score: 2800,
    options: initialState
}