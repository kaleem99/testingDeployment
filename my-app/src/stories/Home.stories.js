import React, {useState} from "react";
import HomePage from "../components/HomePage";
import {store} from "../index"
import { Provider } from "react-redux";

export default {
    title: "HomePage",
    component: HomePage,
    argTypes: {},
}

const Template = (args) => (
    <Provider store={store}>
        <HomePage {...args} />
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