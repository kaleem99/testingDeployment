import { BsFillHexagonFill } from "react-icons/bs";
import "./OtherComponents.scss";
function RoleComponentsSVG({ role }) {
  if (role === "Recruiter") {
    return (
      <div class="parent-div">
        <div class="triangle-left"></div>
        <div class="square"></div>
        <div class="triangle-right"></div>
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
