import React, {useState} from "react";
import Scene from "../components/Scene";
import {store} from "../index"
import { Provider } from "react-redux";

export default {
    title: "Scene",
    component: Scene,
    argTypes: {},
}

const Template = (args) => (
    <Provider store={store}>
        <Scene {...args} />
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