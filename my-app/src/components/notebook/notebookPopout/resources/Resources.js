import React, { Component } from "react";
import IconHexagon from "../../../icons/hexagon-solid";

import "./Resources.scss";

import { connect } from "react-redux";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlinePictureAsPdf } from "react-icons/md";
import content1 from "../../../../DownloadDocs/CandidateInformation.pdf";
import content2 from "../../../../DownloadDocs/RecruiterInformation.pdf";
import VideoResources from "./videoResources";
import { RiExternalLinkFill } from "react-icons/ri";
import { useState } from "react";
// import PDF from "../../../../DownloadDocs/SimulationResources.pdf";
import { PDFDownload, PDFComponent } from "../role/Role";
import AllDocuments from "../../../OtherComponents/Documents";
import data from "../../../../data/notebook.json";
import ExternalResources from "./externalResources";
const ref = React.createRef();
export const roleInformation = (role) => {
  return (
    <a
      href="."
      className="VideoLinks"
      onClick={() =>
        role === "Candidate"
          ? window.open(content1)
          : role === "Recruiter"
          ? window.open(content2)
          : ""
      }
    >
      {role ? "PDF Link " + role + " Information" : ""}
    </a>
  );
};
function Summary({ role }) {
  const [state, setState] = useState("");
  const [video, startVideo] = useState("");

  const resourcesContent = () => {
    return (
      <div className="Resources">
        {/* <div className="take-away">
          <h2>Documents</h2>

          <div className="ResourceIcons">
            <p className="icons">
              <MdOutlinePictureAsPdf />
            </p>
          </div>
          <div className="tip">
            <h2 tabIndex={0} className="p">
              {roleInformation(role)}
            </h2>
          </div>
        </div> */}

        {/* <div className="take-away">
          <h2>Videos</h2>

          <div className="ResourceIcons">
            <p>
              <MdOutlineVideoLibrary />
            </p>
          </div>
          <div className="tip">
            <a
            >
              {" "}
              <VideoResources
                setState={setState}
                state={state}
                startVideo={startVideo}
                video={video}
              />
            </a>
          </div>
        </div> */}

        <div className="take-away">
          <h2>External Resources</h2>

          <div className="ResourceIcons">
            {/* <img aria-hidden={true} src={tip3} alt={"external resources"} /> */}
            <p>
              <RiExternalLinkFill />
            </p>
          </div>
          <div className="tip">
            {/* <h2 tabIndex={0}>You can view external resources here.</h2> */}
            <h2 className="VideoLinks" onClick={() => setState("Resources")}>
              View External Resources
            </h2>
          </div>
        </div>
      </div>
    );
  };
  switch (state) {
    case "Instructions":
      return <div className="PDF">{AllDocuments(role)}</div>;
    case "Videos":
      return (
        <div className="PDF">
          <VideoResources
            state={state}
            setState={setState}
            startVideo={startVideo}
            video={video}
          />
        </div>
      );
    case "Resources":
      return (
        <div className="Videos">
          <ExternalResources setState={setState} role={role} />
        </div>
      );
    default:
      return <div className="Resources">{resourcesContent()}</div>;
  }
  // }
}

const mapStateToProps = (state, ownProps) => {
  return {
    role: state.role,
  };
};
export default connect(mapStateToProps, {})(Summary);
