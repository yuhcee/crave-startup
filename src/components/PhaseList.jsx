import Todo from './Todo';
import { FaCheck } from 'react-icons/fa';

const PhaseList = ({ todos, completeTodo, removeTodo }) => {
    return (
        <div className="todo-list">
            {todos.length > 0 ? (
                todos.map(({ title, isCompleted, subItems }, id) => {
                    return (
                        <div key={`${id}-${title}`} data-test-id={`first-level-${title}`}>
                            <div className="title-wrapper">
                                <div className="sub-wrapper">
                                    <span className="nos">{id + 1}</span>
                                    <h2 className="title">{title}</h2>
                                </div>
                                <span className="completed">{isCompleted && <FaCheck />}</span>
                            </div>
                            {subItems.map((subTodo, index) => (
                                <Todo key={index} index={index} subTodo={subTodo} completeTodo={completeTodo} removeTodo={removeTodo} title={title} titleId={id} />
                            ))}
                        </div>
                    );
                })
            ) : (
                <div className='no__phase'> No Phase added yet. Start by adding a new Phase below.</div>
            )}
        </div>
    );
};
export default PhaseList;
