import { FaTrashAlt } from 'react-icons/fa';

const Todo = ({ subTodo, index, completeTodo, removeTodo, title, titleId }) => {
    return (
        <>
            <div className="todo">
                <div className="todo-content">
                    <input
                        type="checkbox"
                        id={index}
                        name={subTodo.text}
                        checked={subTodo.isCompleted}
                        onChange={() => {
                            completeTodo(subTodo, title, titleId);
                        }}
                    />
                    <label htmlFor={subTodo.text}>{subTodo.text}</label>
                </div>
                <button className="button" onClick={() => removeTodo(subTodo, title)}>
                    <FaTrashAlt />
                </button>
            </div>
        </>
    );
};

export default Todo;
