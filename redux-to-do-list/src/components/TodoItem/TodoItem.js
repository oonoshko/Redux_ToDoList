import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  removeTodo,
  completeTodo,
  importantTodo,
} from "../../features/toDoSlice";

const TodoItem = ({ id, text, completed, important }) => {
  const dispatch = useDispatch();

  return (
    <div
      key={id}
      className={completed ? "todo-row complete" : "todo-row"}
      style={important ? { background: "orange" } : {}}
    >
      {text}
      <div className="iconsContainer">
        <button
          onClick={() => dispatch(importantTodo(id))}
          className="important-btn"
        >
          !
        </button>
        <BiCheckCircle onClick={() => dispatch(completeTodo(id))} />
        <RiCloseCircleLine
          style={{ marginRight: 5 }}
          onClick={() => dispatch(removeTodo(id))}
        />
      </div>
    </div>
  );
};
export default TodoItem;
