const initialState = [
  { option: "", reason: "Reason...", points: ""},
  { option: "", reason: "", points: "" },
  { option: "", reason: "Reason...", points: "" },
  { option: "", reason: "Reason...", points: "" },
  { option: "", reason: "Reason...", points: "" },
  { option: "", reason: "Reason...", points: "" },
  { option: "", reason: "Reason...", points: "" },
];
const optionsChosen = (state = initialState, action) => {
  switch (action.type) {
    case "AddNewOption":
      return (state = action.newStateArr);
    default:
      return state;
  }
};
export { optionsChosen };
