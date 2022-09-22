import data from "../data/notebook.json";
export const dataReducer = (state = data, action) => {
  switch (action.type) {
    case "CandidateData":
      return state.Notebook.Role.Candidate.Information;
    case "RecruiterData":
      return state.Notebook.Role.Recruiter.Information;
    default:
      return state;
  }
};

