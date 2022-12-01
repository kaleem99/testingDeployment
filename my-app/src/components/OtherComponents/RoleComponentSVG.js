import { BsFillHexagonFill } from "react-icons/bs";
import "./OtherComponents.scss";
function RoleComponentsSVG({ role }) {
  if (role === "Recruiter") {
    return (
      <div className="parent-div">
        <div className="triangle-left"></div>
        <div className="square"></div>
        <div className="triangle-right"></div>
      </div>
    );
  } else if (role === "Candidate") {
    return (
      <div className="hexagon">
        <BsFillHexagonFill className="hexagonIconC" />
      </div>
    );
  }
  return <div></div>
}

export default RoleComponentsSVG;
