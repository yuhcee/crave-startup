import { useState } from 'react';

const TodoForm = ({ addTodo, titles }) => {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || value.trim() === '' || !title || title.trim() === '') return;
        addTodo(title, value);
        setValue('');
        setTitle('');
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h5>Create a task</h5>
                <label htmlFor="todos-title-select">Choose a phase:</label>{' '}
                <select name="titles" id="todos-title-select" onChange={(e) => setTitle(e.target.value)}>
                    <option value="">--Please choose a phase--</option>
                    {titles.length > 0 ? titles.map((title, i) => <option key={i}>{title}</option>) : <option>No tasks found -- Create a new task.</option>}
                </select>{' '}
                <input className="input" type="text" placeholder="Click to add a new todo" value={value} onChange={(e) => setValue(e.target.value)} />
            </form>
        </>
    );
};

export default TodoForm;
