import React, { useState } from 'react';

const App = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>To-Do Application</h1>
            <input
                type="text"
                placeholder="Add a new task"
                value={inputValue}
                onChange={handleInputChange}
                style={{ padding: '10px', width: '80%', marginRight: '10px' }}
            />
            <button onClick={handleAddTodo} style={{ padding: '10px' }}>
                Add
            </button>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.map((todo, index) => (
                    <li key={index} style={{ margin: '10px 0' }}>
                        {todo}
                        <button 
                            onClick={() => handleDeleteTodo(index)} 
                            style={{ marginLeft: '10px', padding: '5px', backgroundColor: 'red', color: 'white' }}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
