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
      <i className='fa-solid fa-pen-to-square'></i>
      {props.content}
    </div>
  );
}
