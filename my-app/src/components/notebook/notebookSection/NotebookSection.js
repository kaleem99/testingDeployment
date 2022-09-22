import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import { Collapse } from "react-collapse";
//import { notebookPopout } from 'actions';
import NotebookPopout from "../notebookPopout/NotebookPopout";

// Styles
import colors from "../../../styles/_colors.scss";
import "./NotebookSection.scss";

// Icons
import IconStar from "../../icons/star-solid";

function NotebookSection({ text, onSelect, setSection, section }) {
  const dispatch = useDispatch();
  const sectionClicked = () => {
    dispatch({type: text})
  };

  // onSelect = (section) => {
  //   return this.props.onSelect(section);
  // };

  // render() {
  // console.log(this.props.focused ? "active" : "")
  return (
    <div className="notebook-section card">
      <div className={"card-header" + (section === text ? " active" : "")}>
        <h4 className="incomplete" aria-label={text + "heading"}>
          <button
            // tabIndex={0}
            aria-label={
              text + " menu button. Select to enter the " + text + " menu pane."
            }
            className="btn btn-link"
            onClick={() => sectionClicked()}
          >
            {text}
          </button>
        </h4>
      </div>

      <div className={"collapse-wrapper " + text}></div>
    </div>
  );
  // }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setSection: () => {
//       dispatch({ type: "Select Role" });
//     },
//   };
// };
const mapStateToProps = (state, ownProps) => {
  return {
    text: ownProps.text,
    focused: ownProps.focused,
    sliderOpen: state.notebook.sliderOpen,
    section: state.sectionSelected,
  };
};

export default connect(mapStateToProps, {})(NotebookSection);

