import { useSelector, useDispatch, connect } from "react-redux";
import React from "react";
import { useState } from "react";
import data from "../../../../data/notebook.json";
import "./Role.scss";
import ReactToPdf from "react-to-pdf";
import employer from "./img/recruiter.png";
import employee from "./img/candidate.png";
import { getEmployer, getEmployee } from "../../../../actions/index";
import PAYOFFTable from "../../../OtherComponents/PayOffTable";

import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { BsCircleFill } from "react-icons/bs";
import BonusNegotiation from "../../../NegotitationConcerns/Bonus";
import candidateImage from "./img/candidate.png";
import recruiterImage from "./img/recruiter.png";
import RolePointsSheets from "../../../OtherComponents/PointSheets";
const ref1 = React.createRef();
const ref2 = React.createRef();

// const arr = [<IoGiftSharp />];
const options = {
  orientation: "landscape",
  unit: "px",
  format: [1000, 1000],
};
const roleCard = (role, setState, state) => {
  return (
    <div className="roleCard">
      <div>
        <img
          alt=""
          src={
            role === "Candidate"
              ? candidateImage
              : role === "Recruiter"
              ? recruiterImage
              : ""
          }
        ></img>
        <p className="checkMark">
          <IoCheckmarkCircleSharp />
        </p>
      </div>
      <div>
        <h2>You have selected {role} role type.</h2>
        <p>
          Click the buttons below for important information that you can refer
          back to during the negotiation process
        </p>
        <ReactToPdf
          targetRef={ref1}
          filename="Instructions.pdf"
          options={options}
          x={200}
          y={0.5}
          scale={1}
        >
          {({ toPdf }) => (
            <button
              // className={state === "Information" ? "btnActive" : ""}
              // onDoubleClick={toPdf}
              onClick={toPdf}
            >
              Download Instructions
            </button>
          )}
        </ReactToPdf>
        <ReactToPdf
          targetRef={ref2}
          filename="PointSheet.pdf"
          options={options}
          x={200}
          y={0.5}
          scale={1}
        >
          {({ toPdf }) => (
            <button
              // className={state === "PointSheet" ? "btnActive" : ""}
              onDoubleClick={toPdf}
              onClick={toPdf}
            >
              Download Point sheet
            </button>
          )}
        </ReactToPdf>
      </div>
    </div>
  );
};
const roleInformation = (state, role, setState) => {
  // switch (state) {
  //   case "Information":
  //     return (
  //       <div>
  //         {roleCard(role, setState, state)}
  //         <div ref={ref1}>{PDFDownload(role)}</div>
  //       </div>
  //     );
  //   case "PointSheet":
  //     return (
  //       <div>
  //         {roleCard(role, setState, state)}
  //         <br></br>
  //         <div ref={ref2}>
  //           <RolePointsSheets />
  //         </div>
  //       </div>
  //     );
  //   default:
  //     return <div></div>;
  // }
  return (
    <div>
      {roleCard(role, setState, state)}
      <div ref={ref1}>{PDFDownload(role)}</div>
      <div style={{ "padding-left": "10px", width: "100%" }} ref={ref2}>
        <h1 style={{ "text-align": "left" }}>{role} point sheet</h1>
        <RolePointsSheets />
      </div>
    </div>
  );
};
export const PDFDownload = (role) => {
  const negotiationNames = data.Notebook.Role[role].Information[1];
  const tableData = data.Notebook.Role[role];
  return (
    <div>
      <div className="pdfApp">
        <div className="InformationData">
          <p>
            This is a negotiation between a job recruiter and a job candidate.
            <br></br>
            You will play the role of the <b>Job Candidate</b> There are eight
            issues of concern in this negotiation:
          </p>
          <>
            {negotiationNames.map((name) => (
              <p className="Psemi-bold" tabIndex={0}>
                <BsCircleFill className="PIcon" /> {name}
              </p>
            ))}
            <p>
              {" "}
              Your goal, as the {role}, is to reach an agreement with the
              employer on all eight issues that is best for you. THE MORE POINTS
              YOU EARN, THE BETTER. You may determine what agreement is best for
              you by referring to the <b>{role} Point Sheet</b>” on the next
              page."
            </p>
            <p>
              The 8 issues are listed separately. There are five different
              alternatives for each of the issues. For example, the salary can
              range from $82,000 to $90,000. Please note the number of points
              you will receive for each type of agreement. As a negotiator, you
              may settle upon any of the five alternatives for each of the
              issues. Thus, there are a very largenumber of feasible
              settlements.
            </p>
            <p>
              {" "}
              You should note that each issue has a different degree of
              importance to you, as indicated by the magnitude of the number of
              points you could gain or lose. You will have <b>30 minutes</b> to
              reach agreement on all <b>8 issues</b>. In order for any agreement
              to be binding, you need to reach an agreement with the candidate
              on all eight issues.
            </p>
            <p>
              <b>
                IMPORTANT INSTRUCTIONS:<br></br>
              </b>{" "}
              Do not, at anytime, tell the other person how many points you are
              getting. Also, do not let the other negotiator see your “{role}
              Point Sheet.” This information is strictly for you.
            </p>
            <p>
              Please become very familiar with your “{role} Point Sheet.” Feel
              free to make notes or write on it. The highest number of points
              you can obtain from this negotiation is plus 13,200 and the lowest
              number is minus 8,400. These point totals were calculated by
              adding up the highest number of points you could receive for each
              of the 8 issues and the lowest number. (See below)
            </p>
          </>
          <PAYOFFTable tableData={tableData} />
        </div>
      </div>
    </div>
  );
};
function SelectRole() {
  // const role = useSelector((state) => state.count);
  const [state, setState] = useState("Information");
  const role = useSelector((state) => state.role);
  const dispatch = useDispatch();
  const Candidate = () => {
    dispatch(getEmployee());
    dispatch({ type: "CandidateData" });
  };
  const Recruiter = () => {
    dispatch(getEmployer());
    dispatch({ type: "RecruiterData" });
  };

  return (
    <div className="RolePage">
      {role === false ? (
        <div className="Intro" tabIndex="0">
          <p tabIndex={0} style={{ textAlign: "left" }}>
            {" "}
            Click on one of the buttons below to choose whether you will be
            negotiating as the candidate or recruiter in this simulation. Feel
            free to select the role that matches your current motivations,
            personal context, or interests. Note that you are able to take part
            in this simulation again if you wish to negotiate from the other
            position as well.
          </p>
          <div className="role">
            <div className="grid-container">
              <div>
                {" "}
                <button
                  className="grid-item"
                  tabIndex={0}
                  onClick={() => Candidate()}
                >
                  <img src={employee} />
                </button>
                <p>Candidate</p>
              </div>
              <div>
                {" "}
                <button
                  className="grid-item"
                  tabIndex={0}
                  onClick={() => Recruiter()}
                >
                  <img src={employer} />
                </button>
                <p>Recruiter</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        roleInformation(state, role, setState)
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    dataRole: state.dataRole,
    role: state.role,
  };
};

export default connect(mapStateToProps, {})(SelectRole);
