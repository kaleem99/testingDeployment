import React, { useState } from "react";
export default function VacationTime({
  role,
  level,
  roleData,
  negotiation,
  optionChosen,
  option1,
}) {
  const [state, setState] = useState(true);
  return (
    <div className="popup">
      {state ? (
        <div key={0}>
          <p>Please Select:</p>
          <h2>Vacation time Option</h2>
          <div key={1} className="prompts">
            {/* <h2>{roleData.Protocol[role].steps[level][level + 1]}</h2> */}
            {roleData[negotiation].map((opt, i) => {
              return (
                <button
                  key={i}
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
