const initialState = true;
export const openCloseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "open":
      return (state = true);
    case "close":
      return (state = false);
    default:
      return state;
  }
};
