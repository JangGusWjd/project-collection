// todo-list의 타이틀 보여줌.
// todo-list 전체 container 가운제 정렬에 필요

import "./todo-styles/TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      {/* <div className="todo-title">Todo List</div> */}
      <div className="todo-content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
