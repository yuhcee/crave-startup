import { useState } from 'react';

const CreatePhase = ({ addPhase }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task || task.trim() === '') return;
        addPhase(task);
        setTask('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <h5 className="add__phase">Add Phase</h5>
            <label>Add a new phase: </label> <input className="input" type="text" placeholder="Click to create a new task" value={task} onChange={(e) => setTask(e.target.value)} />
        </form>
    );
};

export default CreatePhase;
