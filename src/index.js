import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Synth from './Synth';
import './index.css';
import Wad from "web-audio-daw";

var testSaw = new Wad({source : 'sawtooth'});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

ReactDOM.render(
    <Synth saw= {testSaw} />,
    document.getElementById('content')
);

//sawPlay();
