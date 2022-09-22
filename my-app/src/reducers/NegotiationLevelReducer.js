const Level = 0;
const negotiationReducer = (state = Level, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "level":
      return (state = 0);
    case "IncrementLevel":
      return state + action.Level;
    default:
      return state;
  }
};
export { negotiationReducer };
