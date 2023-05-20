import { useState } from "react";

import "./App.scss";
import Todoitem from "./components/Todoitem";
import Inputfield from "./components/Inputfield";

function App() {
  // let displayData = ["task 1", "task 2"];
  const [displayData, setDisplayData] = useState([]);
  function addToDo(newTodo) {
    return setDisplayData([...displayData, newTodo]);
  }
  return (
    <div className='App'>
      <Inputfield addToDo={addToDo} />
      {displayData.map((todoData) => {
        return <Todoitem content={todoData} />;
      })}
    </div>
  );
}

export default App;
