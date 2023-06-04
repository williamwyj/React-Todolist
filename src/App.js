import { useState } from "react";

import "./App.scss";
import Todoitem from "./components/Todoitem";
import Inputfield from "./components/Inputfield";

function App() {
  const [displayData, setDisplayData] = useState([]);

  function addToDo(newTodo) {
    return setDisplayData([...displayData, newTodo]);
  }
  function removeToDo(removeIndex) {
    return setDisplayData(
      displayData.filter((toDo, toDoIndex) => toDoIndex !== removeIndex)
    );
  }
  return (
    <div className='App'>
      <Inputfield addToDo={addToDo} />
      {displayData.map((todoData, index) => {
        return (
          <Todoitem
            content={todoData}
            key={index}
            index={index}
            removeToDo={removeToDo}
          />
        );
      })}
    </div>
  );
}

export default App;
