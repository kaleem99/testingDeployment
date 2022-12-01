import Draggable from "react-draggable";
import { useState } from "react";
import { useDispatch } from "react-redux";
import moveImage from "../move.svg";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import DragAndDropQuestions from "../../../data/Reflection.json";
export default function QuestionOneDragAndDrop({ SCQ }) {
  const dispatch = useDispatch();
  const OptionsArr = ["Compatible", "Integrative", "Distributive"];
  const [state, setState] = useState(SCQ.dragAndDropQuestions);
  const Question1Content =
    DragAndDropQuestions.Content.Reflection.components[1].DragAndDropQuestions;
  // for (let i = state.tasks.length - 1; i > 0; i--) {
  //   const j = Math.floor(Math.random() * (i + 1));
  //   const temp = state.tasks[i];
  //   state.tasks[i] = state.tasks[j];
  //   state.tasks[j] = temp;
  // }

  const onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
  };

  const onDragOver = (ev) => {
    ev.preventDefault();
  };
  const tasks = {
    wip: [],
    Distributive: [],
    Compatible: [],
    Integrative: [],
  };
  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    for (let i = 0; i < state.tasks.length; i++) {
      if (state.tasks[i].category === cat) {
        alert("Already exists");
        return false;
      }
    }
    let tasksData = state.tasks.filter((task) => {
      if (task.name === id) {
        task.category = cat;

        dispatch({ type: "INCREMENETDRAGANDDROP" });
      }
      return task;
    });
    if (SCQ.dragAndDropAnswers === 3) {
      for (let i = 0; i < SCQ.dragAndDropQuestions.tasks.length; i++) {
        let x = SCQ.dragAndDropQuestions.tasks[i];

        if (x.name !== x.category) {
          tasks.Compatible = [];
          tasks.Integrative = [];
          tasks.Distributive = [];
          setTimeout(() => {
            alert("Incorrect Try Again");
            dispatch({ type: "CLEAR_ON_ANSWER_DROP" });
            dispatch({ type: "RESETDRAGANDDROP" });
          }, 500);
          break;
        } else {
          dispatch({ type: "CORRECTANSWER" });
        }
      }
    }
    dispatch({ type: "ON_ANSWER_DROP", tasks: tasksData });
  };
  const dragFocus = (key) => {
    if (SCQ.dragAndDropAnswers !== 3) {
      let x = document.getElementById(key);
      let y = document.getElementById("move" + key);
      y.style.display = "inline";
      x.style.display = "inline";
    }
  };
  const removeFocus = (key) => {
    let x = document.getElementById(key);
    let y = document.getElementById("move" + key);
    y.style.display = "none";
    x.style.display = "none";
  };
  const AccessPopup = (key) => {
    let x = document.getElementById("move-dialog" + key);
    x.style.display = "inline";
  };
  const closePopup = (key) => {
    for (let i = 0; i < OptionsArr.length; i++) {
      document.getElementById("move-dialog" + OptionsArr[i]).style.display =
        "none";
    }
    removeFocus(key);
  };
  const onDropAccess = (id, cat) => {
    for (let i = 0; i < state.tasks.length; i++) {
      if (state.tasks[i].category === id) {
        alert("Already exists");
        return false;
      }
    }
    let tasksData = state.tasks.filter((task) => {
      if (task.name === cat) {
        task.category = id;
        dispatch({ type: "INCREMENETDRAGANDDROP" });
      }
      return task;
    });
    if (SCQ.dragAndDropAnswers === 3) {
      for (let i = 0; i < SCQ.dragAndDropQuestions.tasks.length; i++) {
        let x = SCQ.dragAndDropQuestions.tasks[i];

        if (x.name !== x.category) {
          tasks.Compatible = [];
          tasks.Integrative = [];
          tasks.Distributive = [];
          setTimeout(() => {
            alert("Incorrect Try Again");
            dispatch({ type: "CLEAR_ON_ANSWER_DROP" });
            dispatch({ type: "RESETDRAGANDDROP" });
          }, 500);
          break;
        } else {
          dispatch({ type: "CORRECTANSWER" });
        }
      }
    }
    dispatch({ type: "ON_ANSWER_DROP", tasks: tasksData });
    closePopup(id);
  };
  state.tasks.map((t, i) => {
    return tasks[t.category].push(
      <div>
        <button
          className="btnMove"
          id={t.name}
          onClick={() => AccessPopup(t.name)}
        >
          <img className="move" alt="" id={"move" + t.name} src={moveImage} />
        </button>
        <button
          key={t.name}
          onDragStart={(e) => onDragStart(e, t.name)}
          // onTouchMove={(e) => onDragStart(e, t.name)}
          // onTouchStart={(e) => onDragStart(e, t.name)}
          on
          draggable
          className="draggable"
          tabIndex={0}
          onClick={() => dragFocus(t.name)}
          style={{ backgroundColor: t.bgcolor }}
        >
          <b>{t.name}</b>
        </button>
        <div className={`move-dialog${i}`} id={"move-dialog" + t.name}>
          <div className="move-dialog-head">
            <p tabIndex={0}>Move Menu</p>
            <div className="close" onClick={() => closePopup(t.name)}>
              <button className="PCloseDialog">Close</button>
            </div>
          </div>
          <div className="move-dialog-body">
            <h4 tabIndex={0} className="OptionsDisComInte">
              {t.name}
            </h4>
            <button
              onClick={(e) => onDropAccess("Distributive", t.name)}
              id={t.name}
            >
              Option A
            </button>
            <button
              onClick={(e) => onDropAccess("Compatible", t.name)}
              id={t.name}
            >
              Option B
            </button>
            <button
              onClick={(e) => onDropAccess("Integrative", t.name)}
              id={t.name}
            >
              Option C
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="Questscene">
      <div className="content">
        <div className="DraggableComponents">
          <div
            className="wip"
            onDragOver={(e) => onDragOver(e)}
            onDrop={(e) => {
              onDrop(e, "wip");
            }}
          >
            {tasks.wip}
          </div>
        </div>
        {state.tasks.map((data, i) => {
          return (
            <div className="DragInput1">
              <p tabIndex={0} className="DragText">
                {Question1Content[i]}
              </p>
              <div
                className="Drop"
                onDragOver={(e) => onDragOver(e)}
                onDrop={(e) => onDrop(e, data.name)}
              >
                <span className="task-header">Option {state.Option[i]}</span>
                {tasks[data.name]}
              </div>
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
}
