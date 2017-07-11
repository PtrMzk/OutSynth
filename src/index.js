import React from 'react';
import ReactDOM from 'react-dom';
import Keyboard from './components/Keyboard'
import Header from './components/Header';
import './css/index.css';

ReactDOM.render(
    <div id="contentWrapper">
        <div id="headerWrapper">
            <Header/>
        </div>
        <div id="keyboard">
            <Keyboard/>
        </div>
    </div>,
    document.getElementById('content')
);
