import table1 from "../components/notebook/notebookPopout/simulation/img/preview.jpeg";
import table2 from "../components/notebook/notebookPopout/simulation/img/preview2.jpeg";

export const tableImageReducer = (state = false, action) => {
  switch (action.type) {
    case "SimulationComplete":
      return (state = true);
    // case "SimulationStarted":
    //   return (state = table2);
    default:
      return (state);
  }
};
