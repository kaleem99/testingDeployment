import React from "react";
import Notebook from "../components/notebook/Notebook";
import {store} from "../index"
import { Provider } from "react-redux";
export default {
    title: "Notebook",
    component: Notebook,
    argTypes: {},
}

const Template = (args) => (
    <Provider store={store}>
        <Notebook {...args} />
    </Provider>
)
 
export  const Primary = Template.bind({});
Primary.args = {
    sectionSelected: "Introduction",
    sliderOpen: "state.notebook.sliderOpen",
    taskPages: 7,
    modalVisible: "state.modal.display",
    simulation: false,
    role: "Candidate",
    level: 0,
}