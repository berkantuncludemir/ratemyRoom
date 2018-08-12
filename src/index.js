import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />,document.getElementById('nav'));
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
