import React from 'react';
import './App.css';


function App() {

    const names: Array<string> = ['Alex', 'Pavel', 'Mark'];
    const namesList = names.map((n, i) => <li key={i}>{n}</li>);


    return (
        <div className="App">
            <h3>React</h3>
            <ul>
                {namesList}
            </ul>
        </div>
    );
}

export default App;
