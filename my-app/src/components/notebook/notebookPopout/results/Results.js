import { connect } from "react-redux";
import React from "react";
import { Chart } from "react-google-charts";
import "./Results.scss";
import DeviceOrientation, { Orientation } from 'react-screen-orientation'

function UserResults({ score }) {
  const data = [
    ["City", "2022 score"],
    ["Negotiation Result", !score ? 0 : score],
    // ["Los Angeles, CA", 3792, 3694],
    // ["Chicago, IL", 2695, 2896],
    // ["Houston, TX", 2099, 1953],
    // ["Philadelphia, PA", 1526, 1517],
  ];
  
  const options = {
    title: "Your Negotiation Results",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Total points",
      minValue: -8400,
      maxValue: 13200,
    },
    vAxis: {
      title: "Score Result",
    },
  };
  return (
    
    // <div className="result">
    //   <div className="container">
    //     <h2>
    //       Your Results Are:{" "}
    //       {score === 0 ? "complete simulation to show the score" : score}
    //     </h2>
    //     <Chart
    //       chartType="BarChart"
    //       className="graph"
    //       data={data}
    //       options={options}
    //     />
    //   </div>
    // </div>
    <DeviceOrientation lockOrientation={'landscape'}>
    {/* Will only be in DOM in landscape */}
    <Orientation orientation='landscape' alwaysRender={false}>
     <div className="result">
       {/* <div className="container"> */}
         <h2 className="resultsText">
           Your Results Are:{" "}
           {!score ? "complete simulation to show the score" : score}
         </h2>
        <Chart
          chartType="BarChart"
          className="graph"
          data={data}
          options={options}
        />
      {/* </div> */}
    </div>
    </Orientation>
    {/* Will stay in DOM, but is only visible in portrait */}
    <Orientation orientation='portrait'>
      <div className="DivP">
        <p>Please rotate your device</p>
      </div>
    </Orientation>
  </DeviceOrientation>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { score: state.score };
};

export default connect(mapStateToProps, {})(UserResults);
