import React, { Component } from "react";

// import { default as Gel } from 'components/gel/Feedback510';
import SceneData from "../../../../data/scene.json";

import "./Feedback.scss";

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Feedback: [],
    };
  }

  buildComponent = (data) => {
    // const components = data.components.map((component, index) => (
    // <Gel key={index} id={component.props.id} />
    // ));
    // return (components)
  };

  componentDidMount() {
    this.setState({
      Feedback: this.buildComponent(SceneData["Gel"]),
    });
  }

  render() {
    return (
      <div className="Feedback">
        <div>
          <p tabIndex="0" className="description">
            Et malesuada fames ac turpis egestas sed. In vitae turpis massa sed
            elementum tempus egestas sed. Nec feugiat in fermentum posuere.
            <br></br>
            Porttitor eget dolor morbi non arcu risus quis. Volutpat est velit
            egestas dui id ornare arcu odio ut. Convallis tellus id interdum
            velit laoreet id donec ultrices tincidunt.
          </p>
        </div>
        <div>{this.state.Feedback}</div>
      </div>
    );
  }
}

export default Feedback;
