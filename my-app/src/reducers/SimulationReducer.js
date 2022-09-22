const simulationReducer = (state = false, action) => {
  switch (action.type) {
    case "SimulationStartedTrue":
      return (state = true);
    case "SimulationStartedFalse":
      return (state = false);
    default:
      return state;
  }
};
export { simulationReducer };
