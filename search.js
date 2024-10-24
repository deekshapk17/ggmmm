import React, { useState } from 'react';

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    // Sample data for filtering
    const items = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Fig',
        'Grape',
        'Kiwi',
    ];

    // Filtered items based on the search term
    const filteredItems = items.filter(item => 
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            <h1>Search Filter Example</h1>
            <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
            />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
