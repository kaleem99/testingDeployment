const initialState = 2;
const renegotiateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RENEGOTIATEONE":
      return state - 1;
    default:
      return state;
  }
};
export { renegotiateReducer };
