import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';
import './styles.css';

//import { HelloWorldApp } from './HelloWorldApp';

/*function App() {
    return <h1>Hola Mundo!!!</h1>;
}*/

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {}
        <FirstApp title="Hola, soy Keyla" />
    </React.StrictMode>
);

/*

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp />
        
    </React.StrictMode>
);
*/

/*
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={20} />
    </React.StrictMode>
);
*/
