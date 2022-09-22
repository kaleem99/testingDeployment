import Draggable from "react-draggable";
import { useState } from "react";
import { useDispatch } from "react-redux";
const checkIfTextMatchBoxes = (
  state1,
  state2,
  state3,
  event,
  contentArr,
  setA,
  setB,
  setC,
  setContent,
  setCoordinates,
  dispatch,
  SCQ
) => {
  if (state1 === event.target.innerHTML) {
    alert("correct");
    setA(state1);
    let newArr = contentArr.filter((val) => val !== state1);
    setContent(newArr);
    setCoordinates({
      div1x: 0,
      div1y: 0,
      div2x: 0,
      div2y: 0,
      div3x: 0,
      div3y: 0,
    });
    dispatch({ type: "INCREMENETDRAGANDDROP" });
  } else if (state2 === event.target.innerHTML) {
    alert("correct");
    setB(state2);
    let newArr = contentArr.filter((val) => val !== state2);
    setContent(newArr);
    setCoordinates({
      div1x: 0,
      div1y: 0,
      div2x: 0,
      div2y: 0,
      div3x: 0,
      div3y: 0,
    });
    dispatch({ type: "INCREMENETDRAGANDDROP" });
  } else if (state3 === event.target.innerHTML) {
    alert("correct");
    setC(event.target.innerHTML);
    let newArr = contentArr.filter((val) => val !== state3);
    setContent(newArr);
    setCoordinates({
      div1x: 0,
      div1y: 0,
      div2x: 0,
      div2y: 0,
      div3x: 0,
      div3y: 0,
    });
    dispatch({ type: "INCREMENETDRAGANDDROP" });
    if (SCQ.dragAndDropAnswers) {
      dispatch({ type: "CORRECTANSWER" });
      setTimeout(() => {
        dispatch({ type: "RESETDRAGANDDROP" });
      }, 1000);
    }
  }
};
export default function QuestionOneDragAndDrop({ SCQ }) {
  const dispatch = useDispatch();
  const [contentArr, setContent] = useState([
    "Distributive issue",
    "Compatible issue",
    "Integrative issue",
  ]);
  const [coordinates, setCoordinates] = useState({
    div1x: 0,
    div1y: 0,
    div2x: 0,
    div2y: 0,
    div3x: 0,
    div3y: 0,
  });
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  const [a, setA] = useState("______________");
  const [b, setB] = useState("______________");
  const [c, setC] = useState("______________");

  const handleStop1 = (event, dragElement) => {
    setCoordinates((prevState) => ({
      ...prevState,
      ...{ div1x: dragElement.x, div1y: dragElement.y },
    }));
    checkIfTextMatchBoxes(
      state1,
      state2,
      state3,
      event,
      contentArr,
      setA,
      setB,
      setC,
      setContent,
      setCoordinates,
      dispatch,
      SCQ
    );
  };
  const handleStop2 = (event, dragElement) => {
    setCoordinates((prevState) => ({
      ...prevState,
      ...{ div2x: dragElement.x, div2y: dragElement.y },
    }));
    checkIfTextMatchBoxes(
      state1,
      state2,
      state3,
      event,
      contentArr,
      setA,
      setB,
      setC,
      setContent,
      setCoordinates,
      dispatch,
      SCQ
    );
  };
  const handleStop3 = (event, dragElement) => {
    setCoordinates((prevState) => ({
      ...prevState,
      ...{ div3x: dragElement.x, div3y: dragElement.y },
    }));
    checkIfTextMatchBoxes(
      state1,
      state2,
      state3,
      event,
      contentArr,
      setA,
      setB,
      setC,
      setContent,
      setCoordinates,
      dispatch,
      SCQ
    );
  };
  const mouseOver = (event, i) => {
    if (i === 1) {
      setState1(event.target.id);
    } else if (i === 2) {
      setState2(event.target.id);
    } else if (i === 3) {
      setState3(event.target.id);
    }
    if (contentArr.length === 0) {
      dispatch({ type: "CORRECTANSWER" });
    }
  };
  const componentText = (index) => {
    if (index === 1) {
      return <b>{a}</b>;
    } else if (index === 2) {
      return <b>{b}</b>;
    } else if (index === 3) {
      return <b>{c}</b>;
    }
  };
  return (
    <div className="scene">
      <div className="content">
        <div className="DraggableComponents">
          {contentArr.map((text, i) => (
            <Draggable
              id="Unique_ID"
              key={i}
              onStop={eval(`handleStop${i + 1}`)}
              position={{
                x: eval(`coordinates.div${i + 1}x`),
                y: eval(`coordinates.div${i + 1}y`),
              }}
            >
              <div className="Comp1" tabIndex={`${i + 1}`}>
                <b className="boldDraggables">{text}</b>
              </div>
            </Draggable>
          ))}
        </div>
        <div className="DragInput1">
          <p className="DragText">
            In a salary negotiation, the negotiators found that there were
            certain issues, such as the starting date and salary, that they had
            opposing views on. These fall under the {componentText(1)} category.
          </p>
          <div
            className="Drop"
            onMouseOver={(event) => mouseOver(event, 1)}
            id="Distributive issue"
          >
            {" "}
            <p className="DropHere">Drop Here</p>
          </div>
        </div>
        <div className="DragInput1">
          {" "}
          <p className="DragText">
            The employer had to discuss and find a mutually beneficial solution
            to the issue of the employee’s moving expenses. This issue was a/an{" "}
            {componentText(2)}.
          </p>
          <div
            className="Drop"
            onMouseOver={(event) => mouseOver(event, 2)}
            id="Compatible issue"
          >
            {" "}
            <p className="DropHere">Drop Here</p>
          </div>
        </div>
        <div className="DragInput1">
          <p className="DragText">
            Both the employer and employee agreed that the employee would be
            best suited for the London office, rather than the office in
            Manchester. This issue was a/an {componentText(3)}.
          </p>
          <div
            className="Drop"
            onMouseOver={(event) => mouseOver(event, 3)}
            id="Integrative issue"
          >
            {" "}
            <p className="DropHere">Drop Here</p>
          </div>
        </div>
      </div>
    </div>
  );
}
