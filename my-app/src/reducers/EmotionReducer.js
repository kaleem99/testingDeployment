// Candidate Emotions
import happyC from "../data/JSON-Examples/Candidate/CandidateHappy/CandidateHappy.json";
import neutralC from "../data/JSON-Examples/Candidate/CandidateNeutral/CandidateNeutral.json";
import angryC from "../data/JSON-Examples/Candidate/CandidateFrustrated/CandidateFrustrated.json";
import disappointedC from "../data/JSON-Examples/Candidate/CandidateDisappointed/CandidateDisappointed.json";
import SadC from "../data/JSON-Examples/Candidate/CandidateSad/CandidateSad.json";

// Recruiter Emotions
import happyR from "../data/JSON-Examples/Recruiter/Recruiter Happy/Recruiter Happy.json";
import neutralR from "../data/JSON-Examples/Recruiter/Recruiter Neutral/Recruiter Neutral.json";
import angryR from "../data/JSON-Examples/Recruiter/Recruiter Frustrated/Recruiter Frustrated.json";
import disappointedR from "../data/JSON-Examples/Recruiter/Recruiter Disappointed/Recruiter Disappointed.json";
import sadR from "../data/JSON-Examples/Recruiter/Recruiter Sad/Recruiter Sad.json";
const initialStateC = neutralC;
export const CandidateEmotionReducer = (state = initialStateC, action) => {
  switch (action.type) {
    case "HAPPY_CANDIDATE":
      return (state = happyC);
    case "NEUTRAL_CANDIDATE":
      return (state = neutralC);
    case "ANGRY_CANDIDATE":
      return (state = angryC);
    case "DISAPPOINTED_CANDIDATE":
      return (state = disappointedC);
    case "SAD_CANDIDATE":
      return (state = SadC);
    default:
      return state;
  }
};
const initialStateR = neutralR;
export const RecruiterEmotionReducer = (state = initialStateR, action) => {
  switch (action.type) {
    case "HAPPY_RECRUITER":
      return (state = happyR);
    case "NEUTRAL_RECRUITER":
      return (state = neutralR);
    case "ANGRY_RECRUITER":
      return (state = angryR);
    case "DISAPPOINTED_RECRUITER":
      return (state = disappointedR);
    case "SAD_RECRUITER":
      return (state = sadR);
    default:
      return state;
  }
};
