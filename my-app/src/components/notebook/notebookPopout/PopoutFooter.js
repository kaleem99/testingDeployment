import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { connect } from "react-redux";

function PopoutFooter({
  sectionSelected,
  previousSection,
  buttonConditions,
  SCQ,
  buttonfunctionality,
  sections,
}) {
  return (
    <div className="popout-footer">
      {/* <div className="sectionsButtons"> */}
      {sectionSelected !== "Introduction" ? (
        <button
          tabIndex={0}
          onClick={() => previousSection()}
          className="popout-btn"
        >
          <div>
            <IoIosArrowDropleftCircle />
          </div>{" "}
          <div>Previous Section</div>
        </button>
      ) : (
        ""
      )}
      {sectionSelected === "Test Your Knowledge" &&
      SCQ.AllQuestionAnswered < SCQ.reflectionLevels.length ? (
        <button className="popout-btn" style={{ backgroundColor: "#E9E7E7" }}>
          {" "}
          <div>{buttonConditions()}</div>{" "}
          <div>
            <IoIosArrowDroprightCircle />{" "}
          </div>
        </button>
      ) : (
        <button
          tabIndex={0}
          onClick={buttonfunctionality()}
          className="popout-btn"
          aria-label={
            sections.indexOf(sectionSelected) === sections.length - 1
              ? "End simulation button. Select to end the simulation."
              : "Next button. Select to advance to the next section."
          }
        >
          <div>{buttonConditions()}</div>{" "}
          <div>
            <IoIosArrowDroprightCircle />{" "}
          </div>
        </button>
      )}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    SCQ: state.SCQ,
    sectionSelected: state.sectionSelected,
  };
};

export default connect(mapStateToProps, {})(PopoutFooter);
