import React, { Component, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Collapse } from "react-collapse";
//import { notebookPopout } from 'actions';
import NotebookPopout from "../notebookPopout/NotebookPopout";

// Styles
import colors from "../../../styles/_colors.scss";
import "./NotebookSection.scss";

// Icons
import IconStar from "../../icons/star-solid";

function NotebookSection({
  text,
  onSelect,
  setSection,
  section,
  setState,
  state,
  NoteBookSectionButton,
}) {
  const dispatch = useDispatch();
  const sectionClicked = () => {
    dispatch({ type: text });
  };
  const changeFocus = () => {};
  return (
    <div className="notebook-section card">
      <div className={"card-header" + (section === text ? " active" : "")}>
        <h4 className="incomplete" aria-label={text + "heading"}>
          <button
            aria-label={
              text + " menu button. Select to enter the " + text + " menu pane."
            }
            className="btn btn-link"
            onClick={() => sectionClicked()}
            onFocus={() => changeFocus()}
            tabIndex={NoteBookSectionButton === true ? -1 : 0}
          >
            {text}
            {section === text && (
              <button
              style={{"float": "right"}}
                tabIndex={section === text ? 0 : -1}
                onClick={() =>
                  dispatch({ type: "Notebook_Section_Focus_Button" })
                }
              >
                <IconStar />
              </button>
            )}
          </button>
        </h4>
      </div>

      <div className={"collapse-wrapper " + text}></div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    text: ownProps.text,
    focused: ownProps.focused,
    sliderOpen: state.notebook.sliderOpen,
    section: state.sectionSelected,
    NoteBookSectionButton: state.AccessibilityObject.NoteBookSectionButton,
  };
};

export default connect(mapStateToProps, {})(NotebookSection);
