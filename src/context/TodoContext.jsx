import { useState, useEffect, createContext } from 'react';
import { TodoConfig } from '../utils';

const STOREKEYS = {
    TODO: 'todos',
};

export const TodoContext = createContext(TodoConfig);

function TodoProvider({ children }) {
    const [todos, setTodos] = useState(TodoConfig);
    const [todosTitles, setTodosTitles] = useState([]);
    const [isAllCompleted, setIsAllCompleted] = useState(false);

    useEffect(() => {
        const todos = getLocalStorage(STOREKEYS.TODO);
        if (todos.length > 0) {
            setTodos(todos);
        }
    }, []);

    useEffect(() => {
        setLocalStorage(STOREKEYS.TODO, todos);
    }, [todos]);

    useEffect(() => {
        setTodosTitles(todos.map((newTodos) => newTodos.title));
    }, [todos]);

    const addPhase = (title) => {
        const newTodos = [...todos, { title, isCompleted: false, subItems: [] }];
        setTodos(newTodos);
    };

    const addTodo = (title, text) => {
        const newTodos = todos.map((todo) => {
            if (todo.title === title) {
                return { ...todo, subItems: [...todo.subItems, { text, isCompleted: false }] };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const completeTodo = (subTodo, title, titleId) => {
        titleId = titleId === 0 ? -1 : titleId - 1;
        if (titleId === -1) {
            const newTodos = todos.map((todo) => {
                if (todo.title === title) {
                    return todo.subItems.forEach((item) => {
                        if (item.text === subTodo.text) {
                            item.isCompleted = !item.isCompleted;
                        }
                    });
                }
                return todo;
            });
            setTodos(newTodos);
        } else {
            if (todos[titleId].isCompleted) {
                const newTodos = todos.map((todo) => {
                    if (todo.title === title) {
                        return todo.subItems.forEach((item) => {
                            if (item.text === subTodo.text) {
                                item.isCompleted = !item.isCompleted;
                            }
                        });
                    }
                    return todo;
                });
                setTodos(newTodos);
            }
        }
        checkList();
        // check if all completed
        checkAllCompleted();
    };

    const checkList = () => {
        const checkTodos = todos.map((todo) => {
            const isCompleted = todo.subItems.every((data) => data.isCompleted);
            todo.isCompleted = isCompleted;
            return todo;
        });
        setTodos(checkTodos);
    };

    const checkAllCompleted = () => {
        const allIsCompleted = todos.every((data) => data.isCompleted);
        setIsAllCompleted(allIsCompleted);
    };

    const removeTodo = (subTodo, title) => {
        const newTodos = todos.map((todo) => {
            if (todo.title === title) {
                todo.subItems = todo.subItems.filter((data) => data.text !== subTodo.text);
            }

            return todo;
        });
        setTodos(newTodos);
    };

    return <TodoContext.Provider value={{ todos, todosTitles, isAllCompleted, addPhase, addTodo, completeTodo, removeTodo }}>{children}</TodoContext.Provider>;
}

export default TodoProvider;

const getLocalStorage = (storeKey) => {
    if (typeof window !== 'undefined') {
        const getData = window.localStorage.getItem(`bycking_${storeKey}`) ? JSON.parse(window.localStorage.getItem(`bycking_${storeKey}`)) : [];
        return getData;
    }
    return [];
};

const setLocalStorage = (storeKey, valueToStore) => {
    if (!storeKey) return;
    if (typeof window !== 'undefined') {
        window.localStorage.setItem(`bycking_${storeKey}`, JSON.stringify(valueToStore));
        return;
    }
    return;
};
