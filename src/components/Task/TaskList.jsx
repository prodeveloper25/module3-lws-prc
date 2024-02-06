import { useContext } from "react";
import { TasksContext } from "../../context/TasksProvider";
import Task from "./Task";

export default function TaskList() {
  const tasks = useContext(TasksContext);

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}
