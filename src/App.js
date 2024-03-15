import React from "react";
import "./App.css";
import AddTask from "./Components/Components2/AddTask/AddTask";
import TaskList  from "./Components/Components2/TaskList/TaskList";

const App = () => {

  return (
    <div>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
