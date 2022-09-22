const roleReducer = (state = false, action) => {
  switch (action.type) {
    case "Recruiter":
      return (state = action.type);
    case "Candidate":
      return (state = action.type);
    default:
      return state;
  }
};
export { roleReducer };
