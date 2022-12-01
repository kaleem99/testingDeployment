import React, {useState} from "react";
import {store} from "../index"
import { Provider } from "react-redux";
import Role from "../components/notebook/notebookPopout/role/Role";
export default {
    title: "Select Role",
    component: Role,
    argTypes: {},
}

const Template = (args) => (
    <Provider store={store}>
        <Role {...args} />
    </Provider>
)
 
export  const Primary = Template.bind({});
Primary.args = {
    // formatTimer={formatTimer}
    // setSimulation={setSimulation}
    simulation:false,
    role:"Candidate",
    // setRole={setRole}
    // setSeconds={setSeconds}
    // setMinutes={setMinutes}
}