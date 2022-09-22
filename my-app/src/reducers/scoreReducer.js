const initialScore = false;
const scoreReducer = (state = initialScore, action) => {
  switch (action.type) {
    case "ADD":
      return action.score;
    case "SCORETOZERO":
      return (state = 0);
    default:
      return state;
  }
};

export { scoreReducer };
