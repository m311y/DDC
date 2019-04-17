import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './Slideshow';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Main />, 
    document.getElementById('root')
);
registerServiceWorker();
