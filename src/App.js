import { useState } from "react";

import "./App.scss";
import Todoitemcontainer from "./components/Todoitemcontainer";
import Inputfield from "./components/Inputfield";
import Time from "./components/Time";

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
  function updateToDo(index, content) {
    setDisplayData(displayData.toSpliced(index, 1, content));
  }
  return (
    <div className='App'>
      <Time />
      <Inputfield addToDo={addToDo} />
      {displayData.map((todoData, index) => {
        return (
          <Todoitemcontainer
            content={todoData}
            key={index}
            index={index}
            removeToDo={removeToDo}
            updateToDo={updateToDo}
          />
        );
      })}
    </div>
  );
}

export default App;
