import { useContext } from 'react';

/* components */
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import PhaseList from '../components/PhaseList';
import CreatePhase from '../components/CreatePhase';

/* Context provider */
import { TodoContext } from '../context/TodoContext';
const HomePage = () => {
    const { todos, todosTitles, isAllCompleted, addPhase, addTodo, completeTodo, removeTodo } = useContext(TodoContext);

    return (
        <div className="container">
            <Header isAllCompleted={isAllCompleted} />
            <PhaseList todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
            <hr />
            <CreatePhase addPhase={addPhase} />
            <TodoForm addTodo={addTodo} titles={todosTitles} />
        </div>
    );
};

export default HomePage;
