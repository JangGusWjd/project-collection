import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoNonComplete = styled.div`
  width: 100%;
  height: 100%;
`;

const TodoCenterTitle = styled.h2`
  font-size: 1rem;
  font-weight: 700;
`;

const ListZip = styled.div`
  width: 100%;
  height: 80%;
  background: #5b78ac;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoItemZip = ({ todos, onRemove, onToggle }) => {
  return (
    <TodoNonComplete>
      <TodoCenterTitle>해야할 일</TodoCenterTitle>
      <ListZip>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ListZip>
    </TodoNonComplete>
  );
};

export default TodoItemZip;
