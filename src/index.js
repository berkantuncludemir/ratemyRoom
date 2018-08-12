import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//Komponentler
import App from './App';
import Header from './Header'

//import kompnenadı from './Ortabolum'

//
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />,document.getElementById('navbar'));
//ReactDOM.render(<KOMPONENT ADI BURAYA />, document.getElementById('root'));
registerServiceWorker();
