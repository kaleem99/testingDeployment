import React, {useState} from "react";
import {store} from "../index"
import { Provider } from "react-redux";
import SimulationPrompts from "../components/Prompts";
export default {
    title: "SimulationPrompts",
    component: SimulationPrompts,
    argTypes: {},
}

const Template = (args) => (
    <Provider store={store}>
        <SimulationPrompts {...args} />
    </Provider>
)
 
export  const Primary = Template.bind({});
Primary.args = {
    // formatTimer={formatTimer}
    // setSimulation={setSimulation}
    simulation:true,
    level: 0,
    role: "Candidate",
    NewOptionChosen: ""
    // setRole={setRole}
    // setSeconds={setSeconds}
    // setMinutes={setMinutes}
}