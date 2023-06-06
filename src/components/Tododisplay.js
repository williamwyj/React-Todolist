import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Tododisplay.scss";

export default function Tododisplay(props) {
  return (
    <div className={`module-toDo_item ${props.backgroundColor}`}>
      <FontAwesomeIcon
        icon={icon({ name: "pen-to-square", style: "solid" })}
        className='click_icon'
        onClick={(e) => props.updateEditState({ edit: true })}
      />
      <div>{props.content}</div>
      <FontAwesomeIcon
        icon={icon({ name: "circle-xmark", style: "regular" })}
        onClick={(e) => props.removeToDo(props.index)}
        className='click_icon'
      />
    </div>
  );
}
