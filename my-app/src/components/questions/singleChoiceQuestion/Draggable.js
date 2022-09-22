import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export function Draggable({id, children, i, input}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = {
    // backgroundColor: "navy",
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button ref={setNodeRef} className={`drag${i}`} style={style} {...listeners} {...attributes}>
      {input.Option}
    </button>
  );
}
