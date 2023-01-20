import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../features/toDoSlice";
import TodoItem from "../TodoItem/TodoItem";

const TodoForm = () => {
  const toDoListToRender = useSelector((state) => state.toDo.todoList);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
    dispatch(addTodo(input));
  };

  return (
    <>
      <form className="todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="todo-input"
          placeholder="Add your plan"
        />
        <button
          type="submit"
          className="todo-button"
          onClick={handleSubmit}
          disabled={input.trim() === "" ? true : false}
        >
          Add Task
        </button>
      </form>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        {toDoListToRender.length > 0 ? (
          toDoListToRender.map((todo) => <TodoItem key={todo.id} {...todo} />)
        ) : (
          <h3>No plans yet...</h3>
        )}
      </div>
    </>
  );
};
export default TodoForm;
