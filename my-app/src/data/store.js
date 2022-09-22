import data from "./notebook.json";
export const RoleReducer = (state={count: 0}, action) => {
    switch(action.type){
        case "Recruiter":
            return {state: state.count+1};
        case "Candidate":
            return {state: state.count+1};
        default:
            return state;
    }
}
