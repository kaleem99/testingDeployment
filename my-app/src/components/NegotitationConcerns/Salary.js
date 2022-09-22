import React, { useState } from "react";
export default function SalaryOption({
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
        <div>
      <p>
            Please Select:
          </p>
          <h2>Salary Option</h2>
          
          <div className="prompts">
            {/* <h2>{roleData.Protocol[role].steps[level][level + 1]}</h2> */}
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
