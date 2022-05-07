import React from 'react';
import './App.css';
import {sum} from './03-function/03';

function App() {
    debugger
    const res = sum(sum(1, 2), sum(10, 5))
    return (
        <div className="App">
            React
        </div>
    );
}

export default App;
