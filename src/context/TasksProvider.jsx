import { createContext } from "react";
import { useImmerReducer } from "use-immer";
import taskReducer from "../components/Task/taskReducer";
import { initialTasks } from "../components/Task/tasks";

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);

const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
};

export default TasksProvider;
