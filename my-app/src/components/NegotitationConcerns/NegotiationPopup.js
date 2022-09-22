import React, { useState } from "react";
export default function NegotiationPopup({
  role,
  level,
  roleData,
  negotiation,
  optionChosen,
  option1,
  negotiationState,
  setNegotiationState,
}) {
  // console.log(roleData.Information[1][level]);
  return (
    <div className="popup">
      {negotiationState ? (
        <div>
          <p>Please Select:</p>
          <h2>{roleData.Information[1][level]}</h2>
          <div className="prompts">
            {roleData[negotiation].map((opt) => {
              return (
                <button
                  className="btn1"
                  onClick={() => {
                    setNegotiationState(false);
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
