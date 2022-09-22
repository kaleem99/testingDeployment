export const homeReducer = (state = false, action) => {
    switch(action.type){
        case "StartSimulationHomePage":
            return state = true;
        default:
            return state;
    }
}

