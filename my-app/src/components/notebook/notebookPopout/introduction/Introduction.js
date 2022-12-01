import React, { Component } from "react";
// import IconHexagon from "../../../icons/hexagon-solid";

import "./Introduction.scss";
import colors from "../../../../styles/_colors.scss";

import Tip1 from "./img/Introduction.jpeg";
import homeImage from "../../img/homeImage.png";
import VideoResources from "../resources/videoResources";
// import HeatBlock from './img/heat-block-takeaway.svg'
import { useState } from "react";
function Introduction() {
  const [state, setState] = useState("");
  const [video, startVideo] = useState("");
  return (
    <div className="Summary">
      <div className="description">
        <p>
          In this negotiation, you are required to negotiate an employment
          contract. There are eight issues under consideration: bonus, job
          assignment, vacation time, starting date, moving expenses, insurance
          coverage, salary, and location.
        </p>
        <p>
          For each issue, there are several different options, and each option
          is worth a certain number of points for the recruiter and a certain
          number of points for the candidate. The aim is for each negotiator to
          maximize the number of “points” in the deal.
        </p>
        <p>
          The possible score range for the agreement and each negotiator is
          −8,400 to +13,200. The goal of this negotiation is to achieve the
          highest possible score for the role you have selected, bearing in mind
          that the motivators for each role are different, so some negotiation
          will be necessary for each of the issues covered.
        </p>
        <div className="IntroImage">
          <img alt="" src={homeImage}></img>
        </div>

        <hr></hr>
        <VideoResources
          state={state}
          setState={setState}
          startVideo={startVideo}
          video={video}
        />
      </div>
    </div>
  );
}

export default Introduction;
