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
    <div className={`module-toDo_item ${props.backgroundColor}`}>
      <form onSubmit={handleEditSubmit}>
        <label>
          <input name='newTodo' defaultValue='Enter your To do' />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
