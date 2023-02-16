import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import { MdRemoveCircleOutline } from "react-icons/md";
import { SlPencil } from "react-icons/sl";
import "./todo-styles/TodoItem.scss";
// import cn from 'classnames';

const TodoItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="todo-item">
      <div className="todo-item-check" onClick={() => onToggle(id)}>
        {checked ? <GrCheckboxSelected /> : <GrCheckbox />}
        {/* <GrCheckbox /> */}
      </div>
      <div className="todo-item-info">{text}</div>
      <div className="todo-item-remove">
        <SlPencil />
        <MdRemoveCircleOutline onClick={() => onRemove(id)} />
      </div>
    </div>
  );
};

export default TodoItem;
