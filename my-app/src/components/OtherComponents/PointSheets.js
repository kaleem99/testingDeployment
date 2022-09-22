import { connect } from "react-redux";
import data from "../../data/notebook.json";
import { NegotiationData } from "../Prompts";
import "./OtherComponents.scss";
function RolePointsSheets({ role }) {
  const information = data.Notebook.Role[role];
  return (
    // <div className="pointsSheet">
      <table className="PointSheetTable">
        <tr>
          {/* {" "} */}
          <th>Negotiations</th>
          <th>Options</th>
          <th>Points</th>
        </tr>

        {NegotiationData.map((info) => (
          <tr>
            <td>{info}</td>
            <td>
              {information[info].map((obj) => (
                <p>{obj.option}</p>
              ))}
            </td>
            <td>
              {" "}
              {information[info].map((obj) => (
                <p>{obj.points}</p>
              ))}
            </td>
          </tr>
          // <tr></tr>
        ))}
      </table>
    // </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    role: state.role,
  };
};

export default connect(mapStateToProps, {})(RolePointsSheets);
