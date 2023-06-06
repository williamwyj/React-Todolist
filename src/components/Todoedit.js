import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Todoedit.scss";

export default function Todoedit(props) {
  function handleEditSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    props.updateToDo(props.index, formJson.newTodo);
    props.updateEditState({ edit: false });
  }
  return (
    <div
      className={`module-toDo_item module-toDo_edit ${props.backgroundColor}`}
    >
      <form onSubmit={handleEditSubmit}>
        <label>
          <input name='newTodo' defaultValue='Enter your To do' />
        </label>
        {/* <button type='submit'>Submit</button> */}
        <button type='submit' className='submit_button'>
          <FontAwesomeIcon
            icon={icon({ name: "square-check", style: "regular" })}
            className='click_icon'
          />
        </button>
        <FontAwesomeIcon
          icon={icon({ name: "rectangle-xmark", style: "regular" })}
          className='click_icon'
          onClick={(e) => {
            props.updateEditState({ edit: false });
          }}
        />
      </form>
    </div>
  );
}
