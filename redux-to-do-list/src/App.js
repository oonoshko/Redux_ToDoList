import "./App.css";
import { TodoForm } from "./components";

function App() {
  return (
    <div className="todo-app">
      <h1>What's your plan for today</h1>
      <TodoForm />
    </div>
  );
}

export default App;
