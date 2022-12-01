const initialState = {
  NoteBookSectionButton: false,
};
const contentInfoAccessibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Notebook_Section_Focus_Button":
      return { ...state, ...{ NoteBookSectionButton: true } };
    case "False_Notebook_Section_Focus_Button":
      return { ...state, ...{ NoteBookSectionButton: false } };
    default:
      return state;
  }
};

export default contentInfoAccessibilityReducer;
