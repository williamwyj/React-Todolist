import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Todoitemcontainer.scss";

import Todoedit from "./Todoedit";
import Tododisplay from "./Tododisplay";

export default function Todoitemcontainer(props) {
  const toDoColors = [
    "background-lightblue",
    "background-lightred",
    "background-lightgreen",
  ];
  let backgroundColor = toDoColors[props.index % 3];

  const [editState, setEditState] = useState({ edit: false });
  function updateEditState(edit) {
    return setEditState(edit);
  }
  return (
    <>
      {editState.edit ? (
        <Todoedit
          backgroundColor={backgroundColor}
          updateEditState={updateEditState}
          updateToDo={props.updateToDo}
          index={props.index}
        />
      ) : (
        <Tododisplay
          backgroundColor={backgroundColor}
          content={props.content}
          key={props.index}
          index={props.index}
          removeToDo={props.removeToDo}
          updateEditState={updateEditState}
        />
      )}
    </>
  );
}
