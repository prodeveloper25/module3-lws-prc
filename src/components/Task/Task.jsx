import { useContext, useState } from "react";
import { TasksDispatchContext } from "../../context/TasksProvider";

export default function Task({ task }) {
  const dispatch = useContext(TasksDispatchContext);

  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
        />

        {taskContent}

        <button
          onClick={() =>
            dispatch({
              type: "deleted",
              id: task.id,
            })
          }
        >
          Delete
        </button>
      </label>
    </li>
  );
}
