import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable({ id, children, i, input }) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style2 = {
    // opacity: isOver ? 1 : 0.5,
    // width: "100px",
    // height: "100px",
    // backgroundColor: "red",
    textAlign: "center"
  };

  const style1 = {
    // opacity: isOver ? 1 : 0.5,
    // width: "100px",
    // height: "100px",
    // backgroundColor: "red",
    textAlign: "left"
  };

  return (
    <div ref={setNodeRef} className={`input${i}`} style={style2}>
      {children}
      <div style={style1}>{input.label}</div>
    </div>
  );
}
