import { useContext, useState } from "react";
import {
  TasksContext,
  TasksDispatchContext,
} from "../../context/TasksProvider";
import { getNextId } from "../../utils/getNextId";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TasksDispatchContext);
  const tasks = useContext(TasksContext);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input placeholder="Add task" value={text} onChange={handleChangeText} />
      <button
        onClick={() => {
          setText("");
          dispatch({
            type: "added",
            id: getNextId(tasks),
            text,
          });
        }}
      >
        Add
      </button>
    </>
  );
}
