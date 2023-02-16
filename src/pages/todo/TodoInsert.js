// todo 입력받기
import { useState, useCallback } from "react";
import "./todo-styles/TodoInsert.scss";
import Time from "./Time";

const TodoInsert = ({ onInsert }) => {
  const [todoValue, setTodoValue] = useState("");
  const onChange = useCallback((e) => {
    setTodoValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(todoValue);
      setTodoValue("");
      e.preventDefault();
    },
    [onInsert, todoValue]
  );

  return (
    <div className="todo-insert-zip">
      <div className="todo-title">
        <h1>Todo List</h1>
        <Time />
      </div>
      <form className="todo-insert" onSubmit={onSubmit}>
        <input
          type="text"
          value={todoValue}
          onChange={onChange}
          placeholder="Please write your todo"
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default TodoInsert;
