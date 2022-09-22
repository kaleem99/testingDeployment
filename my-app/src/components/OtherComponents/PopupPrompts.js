import { connect } from "react-redux";

function PopupPrompts({
  loop,
  roleData,
  negotiation,
  percent,
  AcceptOffer,
  randomOffer,
  setPercent,
  level,
  NegotiationData,
  negotiationCompleted,
  candidateAndRecruiterAgree,
  role,
  setState
}) {
  return (
    <div className="prompts2">
      {loop ? (
        <>
          <h2>
            {roleData.question} {roleData[negotiation][percent].option}{" "}
            {roleData[negotiation][percent].reason}
          </h2>
          <div>
            <button className="btn1" onClick={() => AcceptOffer(setState)}>
              Accept
            </button>
            {percent === randomOffer ? (
              <h1>This is your final offer</h1>
            ) : (
              <button
                className="btn1"
                onClick={() =>
                  role === "Candidate"
                    ? setPercent(percent - 1)
                    : setPercent(percent + 1)
                }
              >
                Decline
              </button>
            )}
          </div>
        </>
      ) : level === NegotiationData.length ? (
        negotiationCompleted()
      ) : (
        candidateAndRecruiterAgree()
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    role: state.role,
    level: state.level,
  };
};

export default connect(mapStateToProps, {})(PopupPrompts);
