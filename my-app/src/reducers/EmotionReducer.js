import happy from "../data/JSON-Examples/example 3/happy.json";
import neutral from "../data/JSON-Examples/example 3/neutral.json";
import angry from "../data/JSON-Examples/example 3/angry.json";

const initialState = neutral;
export const CandidateEmotionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HAPPYCANDIDATE":
      return (state = happy);
    case "NEUTRALCANDIDATE":
      return (state = neutral);
    case "ANGRYCANDIDATE":
      return (state = angry);
    default:
      return state;
  }
};
export const RecruiterEmotionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HAPPYRECRUITER":
      return (state = happy);
    case "NEUTRALRECRUITER":
      return (state = neutral);
    case "ANGRYRECRUITER":
      return (state = angry);
    default:
      return state;
  }
};
