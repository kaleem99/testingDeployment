import React, { Component } from "react";
import { connect } from "react-redux";
import FocusLock from "react-focus-lock";
import {
  notebookSection,
  notebookPopout,
  // setTotalProtocolPages,
  toggleNotebookExpanded,
} from "../../actions";
import NotebookSection from "./notebookSection/NotebookSection";
import "./Notebook.scss";
import image1 from "./img/close.png";
import logo from "./img/2ULogo.png";
import ProtocolSteps from "./notebookPopout/protocol/Protocol";
export const sections = [
  "Introduction",
  "Select Role",
  "Simulation",
  "Results",
  "Test Your Knowledge",
  "Final Contract",
  "Additional Resources",
];

//This component coordinates all the Notebook logic and data flow
class Notebook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notebookIconHover: false,
      section: "Open",
      tabIndexState: false,
    };
    this.setState = this.setState.bind(this);
  }
  onSectionSelect = (section = { section: "Introduction" }) => {
    // console.log(section.section)
    // this.setState({
    //   section: section.section,
    // });
    this.props.setState(section.section);
    // console.log(section)
    if (section.section !== "Protocol") {
      if (section.section === this.props.sectionSelected) {
        this.props.notebookPopout(!this.props.sliderOpen);
      } else {
        if (
          this.props.sectionSelected === false ||
          this.props.sectionSelected === null
        ) {
          // notebookPopout(!this.props.sliderOpen);
        }
      }
    } else if (section.section === "Protocol") {
      //Setting total pages in prep for rendering Protocol View
      if (this.props.taskPages.length > 0) {
        this.props.setTotalProtocolPages(this.props.taskPages.length);
      }

      this.props.notebookPopout(false);
    }
    // Open the collapse
    this.props.notebookSection(section);

    // If the section is the currently open section
    if (section.section === this.props.sectionSelected) {
      // Close the collapse
      this.props.notebookSection({ section: false });
    }
  };

  //Render list first - then protocol if clicked
  renderSectionList = () => {
    if (!this.props.simulation || this.props.sectionSelected !== "Simulation") {
      return sections.map((text, index) => (
        <div key={index}>
          <NotebookSection
            text={text}
            onSelect={this.onSectionSelect}
            focused={text === this.props.sectionSelected}
            key={text}
            index={index + 1}
            setState={this.setState}
            state={this.state.tabIndexState}
            tabIndex={index}
          />
          {/* <br></br> */}
          {/* <br></br> */}
        </div>
      ));
    } else {
      return (
        <ProtocolSteps
          level={this.props.level}
          role={this.props.role}
          sectionSelect={this.onSectionSelect}
        />
      );
    }
  };

  openSlider = () => {
    notebookPopout(!this.props.sliderOpen);
  };

  toggleExpanded = (e) => {
    //   this.props.toggleNotebookExpanded()
  };

  render() {
    return (
      <>
        <div key={0} id="notebook" tabIndex={0}>
          <div key={1} id="notebook-head" >
            <h6 aria-label="Notebook" id="notebook-title">
              {this.props.simulation ? "Simulation" : "Menu"}
              {/* <img
              src={
                "https://ddfoqzqsu0zvp.cloudfront.net/media/images/2u-logo.original.png"
              }
            ></img> */}
            </h6>
          </div>
          <div
            key={2}
            tabIndex={0}
            className="notebook-body"
            style={{ display: this.props.notebookExpanded ? null : "none" }}
          ></div>
          {this.renderSectionList()}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sectionSelected: state.sectionSelected,
    sliderOpen: state.notebook.sliderOpen,
    taskPages: state.notebook.taskPages,
    modalVisible: state.modal.display,
    simulation: ownProps.simulation,
    role: state.role,
    level: state.level,
    // notebookExpanded: state.scene.notebookExpanded,
  };
};

export default connect(mapStateToProps, {
  notebookSection,
  notebookPopout,
  // setTotalProtocolPages,
  toggleNotebookExpanded,
})(Notebook);
// export default Notebook;
