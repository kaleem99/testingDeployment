export const PopupReducer = (state = "", action) => {
  switch (action.type) {
    case "NEW-POPUP-QUESTION":
      return (state = action.NEW_QUESTION);
    default:
      return state;
  }
};
