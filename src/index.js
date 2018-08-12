import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import OrtaBolum from './OrtaBolum';
import Header from './Header';

ReactDOM.render(<Header />, document.getElementById('navbar'));
registerServiceWorker();
ReactDOM.render(<OrtaBolum />, document.getElementById('root'));