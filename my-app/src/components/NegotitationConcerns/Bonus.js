import React, { useState } from "react";
export default function BonusNegotiation({
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
          <h2>Bonus Option</h2>

          <div className="prompts">
            {roleData[negotiation].map((opt) => {
              return (
                <button
                  className="btn1"
                  onClick={() => {
                    setState(false);
                    console.log(opt, opt.option);
                    return optionChosen(opt.option);
                  }}
                  tabIndex="0"
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
