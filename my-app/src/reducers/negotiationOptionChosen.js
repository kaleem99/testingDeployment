export const NegotiationOption = (state = "", action) => {
    switch(action.type){
        case "SETNEWOPTION":
            return state = action.newOption;
        default:
            return state
    }
}