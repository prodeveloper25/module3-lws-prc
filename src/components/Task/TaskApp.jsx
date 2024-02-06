import TasksProvider from "../../context/TasksProvider";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Prague itinerary</h1>

      <AddTask />

      <TaskList />
    </TasksProvider>
  );
}
