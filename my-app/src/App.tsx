import React from 'react';
import './App.css';
import AngleConverter from "./convertionTypes/angle/AngleConverter";

const App: React.FC = () => {
    return (
        <div className="App">
            <p>Simple Converter</p>
            <p>No guarantee of correct conversion</p>
            <p>Although it should world fine</p>
            <AngleConverter />
        </div>
    );
}

export default App;
