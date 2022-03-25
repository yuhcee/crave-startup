import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoProvider from './context/TodoContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <TodoProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </TodoProvider>,
    document.getElementById('root')
);
reportWebVitals();
