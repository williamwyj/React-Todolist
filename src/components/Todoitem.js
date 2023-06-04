import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./Todoitem.scss";

export default function TodoItem(props) {
  const toDoColors = [
    "background-lightblue",
    "background-lightred",
    "background-lightgreen",
  ];
  let backgroundColor = toDoColors[props.index % 3];
  return (
    <div className={`module-toDo_item ${backgroundColor}`}>
      <FontAwesomeIcon icon={icon({ name: "pen-to-square", style: "solid" })} />
      <div>{props.content}</div>
      <span onClick={(e) => props.removeToDo(props.index)}>
        <FontAwesomeIcon
          icon={icon({ name: "circle-xmark", style: "regular" })}
        />
      </span>
    </div>
  );
}
