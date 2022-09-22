import React, { useState } from "react";
export default function InsuranceCoverage({
  roleData,
  negotiation,
  optionChosen,
  option1,
}) {
  const [state, setState] = useState(true);
  return (
    <div className="popup">
      {state ? (
        <div>
          <p>Please Select:</p>
          <h2>Insurance coverage Option</h2>
          <div className="prompts">
            {roleData[negotiation].map((opt) => {
              return (
                <button
                  className="btn1"
                  onClick={() => {
                    setState(false);
                    return optionChosen(opt.option);
                  }}
                >
                  {opt.option}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        option1()
      )}
    </div>
  );
}
