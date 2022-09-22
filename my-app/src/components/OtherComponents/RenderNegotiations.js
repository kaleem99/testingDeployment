// import BonusNegotiation from "../NegotitationConcerns/Bonus";
// import JobAssignment from "../NegotitationConcerns/JobAssignment";
// import StartDate from "../NegotitationConcerns/StartDate";
// import MovingExpenseCoverage from "../NegotitationConcerns/MovingExpense";
// import LocationOptions from "../NegotitationConcerns/Location";
// import VacationTime from "../NegotitationConcerns/Vacation";
// import SalaryOption from "../NegotitationConcerns/Salary";
// import InsuranceCoverage from "../NegotitationConcerns/InsuranceCoverage";
// import { connect } from "react-redux";
import NegotiationPopup from "../NegotitationConcerns/NegotiationPopup";
export default function RenderNegotiations({
  negotiation,
  roleData,
  optionChosen,
  option1,
  negotiationState,
  setNegotiationState,
  level
}) {
  return (
    <NegotiationPopup
      negotiation={negotiation}
      roleData={roleData}
      optionChosen={optionChosen}
      option1={option1}
      negotiationState={negotiationState}
      setNegotiationState={setNegotiationState}
      level={level}
    />
  );
}

// switch (negotiation) {
//     case "AnnualBonusOption":
//       return (
//         <BonusNegotiation
//           negotiation={negotiation}
//           roleData={roleData}
//           optionChosen={optionChosen}
//           option1={option1}
//         />
//       );
//     case "JobAssignment":
//       return (
//         <JobAssignment
//           negotiation={negotiation}
//           roleData={roleData}
//           optionChosen={optionChosen}
//           option1={option1}
//         />
//       );
//     case "VacationTime":
//       return (
//         <VacationTime
//           negotiation={negotiation}
//           roleData={roleData}
//           optionChosen={optionChosen}
//           option1={option1}
//         />
//       );
//     case "StartingDate":
//       return (
//         <StartDate
//           negotiation={negotiation}
//           roleData={roleData}
//           optionChosen={optionChosen}
//           option1={option1}
//         />
//       );
//     case "MovingExpenseCoverage":
//       return (
//         <MovingExpenseCoverage
//           negotiation={negotiation}
//           roleData={roleData}
//           optionChosen={optionChosen}
//           option1={option1}
//         />
//       );
//     case "InsuranceCoverage":
//       return (
//         <InsuranceCoverage
//           negotiation={negotiation}
//           roleData={roleData}
//           optionChosen={optionChosen}
//           option1={option1}
//         />
//       );
//     case "Salary":
//       return (
//         <SalaryOption
//           negotiation={negotiation}
//           roleData={roleData}
//           optionChosen={optionChosen}
//           option1={option1}
//         />
//       );
//     case "Location":
//       return (
//         <LocationOptions
//           negotiation={negotiation}
//           roleData={roleData}
//           optionChosen={optionChosen}
//           option1={option1}
//         />
//       );
//     default:
//       return <div>{/* <TestingPrompts /> */}</div>;
//   }
