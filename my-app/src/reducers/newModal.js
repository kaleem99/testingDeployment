export const newModalReducer = (state = false, action) => {
    switch(action.type){
        case "closeModal":
            return state = false;
        case "openModal":
            return state = true;
        default:
            return state;
    }
}