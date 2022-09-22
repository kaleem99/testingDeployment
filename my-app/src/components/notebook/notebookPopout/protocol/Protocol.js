import data from "../../../../data/notebook.json";
import React, { useDispatch } from "react-redux";
import { IoRadioButtonOffSharp, IoRadioButtonOnSharp } from "react-icons/io5";
export default function ProtocolSteps({ sectionSelect, steps, level, role }) {
  const dispatch = useDispatch();
  const ProtocolSteps = data.Notebook.Role[role].Information[1];
  const goBack = () => {
    sectionSelect({ section: "Introduction" });
    dispatch({ type: "Introduction" });
  };
  return (
    <div>
      <div className="Protocol">
       <div className="ProtocolStepsHeader"> <h3>Negotiation Steps:</h3></div>
        {ProtocolSteps.map((steps, i) => (
          <div className={"Psteps"}>
            <p className="pText">
              {steps}
              <p className="pIcon">
                {level >= i + 1 ? (
                  <IoRadioButtonOnSharp />
                ) : (
                  <IoRadioButtonOffSharp />
                )}
               {i < 7 ? <hr></hr> : ""}
                
              </p>
            </p>
          </div>
        ))}
      </div>
      <button className="ProtocolButton" onClick={() => goBack()}>
        Go Back
      </button>
    </div>
  );
}
