import TodoTemplate from "./TodoTemplate";
// import TodoDate from "./TodoDate";
import TodoInsert from "./TodoInsert";
import TodoItemZip from "./TodoItemZip";
import TodoComplete from "./TodoComplete";
import styled from "styled-components";
import { useState, useRef, useCallback } from "react";

const TodoHome = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgb(243, 243, 243);
  display: flex;
  justify-content: center;
  padding-top: 6rem;
`;

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "리액트 Hooks 복습하기", checked: true },
    { id: 2, text: "데이터 받아오기", checked: true },
    { id: 3, text: "Redux 라이브러리 공부하기", checked: false },
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <TodoHome>
      <TodoTemplate>
        {/* <TodoDate /> */}
        <TodoInsert onInsert={onInsert} />
        <TodoItemZip todos={todos} onRemove={onRemove} onToggle={onToggle} />
        <TodoComplete />
      </TodoTemplate>
    </TodoHome>
  );
};

export default Todo;
