import { connect } from "react-redux";
import "./FinalContract.scss";
import data from "../../../../data/notebook.json";
import { NegotiationData } from "../../../Prompts";
const NegotiationLastOptionsData = [
  "percent",
  "department",
  "days",
  "date",
  "percentage",
  "plan",
  "thousands of dollars",
  "place",
];
function FinalContractResults({ options, score, role }) {
  if (!score) {
    return (
      <h1>Your contract will be generated once you complete the Simulation</h1>
    );
  }
  const roleData = data.Notebook.Role[role];
  return (
    <div className="contractDiv">
      <h2 className="finalContractHeader">Final Contract</h2>
      <p className="thick">
        We reached a settlement and the settlement was as follows:
      </p>

      <div className="contract-container">
        {options.map((obj, i) => (
          <>
            <div tabIndex={0} className="contract-item">
              <div>{NegotiationData[i]}</div>
              <div>
                {obj.option ? obj.option : "0"}
                <hr></hr>
              </div>
              <div>
                {obj.points ? obj.points : "0"}
                <hr></hr>
              </div>
            </div>
          </>
        ))}
      </div>
      <p className="thick" style={{ fontSize: "20px" }}>
        Signature of negotiators:
      </p>

      <div className="signatureFooter">
        {/* <p><b>Recruiter: </b> ____________________________</p>
        <p><b>ID#: </b> _________________________</p>
        <p><b>Candidate: </b> ____________________________</p>
        <p><b>ID#: </b> _________________________</p> */}
        <div>
          <label for="fname">Recruiter: </label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Placeholder for name"
          />
          {/* <br></br> */}
        </div>
        <div>
          <label for="fname">ID#: </label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="ID placeholder"
          />
          {/* <br></br> */}
        </div>
        <div>
          <label for="fname">Candidate: </label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Placeholder for name"
          />
          {/* <br></br> */}
        </div>
        <div>
          <label for="fname">ID#: </label>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="ID placeholder"
          />
          {/* <br></br> */}
        </div>
      </div>
      <br></br>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    options: state.option,
    score: state.score || ownProps.score,
  };
};
export default connect(mapStateToProps, {})(FinalContractResults);
