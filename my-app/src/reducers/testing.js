export const testingEmotionsReducer = (state = "", action) => {
  switch (action.type) {
    case "CHECK_EMOTIONS":
      return (state = action.data);
    default:
      return state;
  }
};
