import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Synth from './SynthKey';
import './index.css';
import Wad from "web-audio-daw";

//var sawTone = new Wad({source : 'sawtooth'});
var sawTone = new Wad({
    source : 'square',
    env : {
        attack : .01,
        decay : .005,
        sustain : .2,
        hold : .015,
        release : .3
    },
    filter : {
        type : 'lowpass',
        frequency : 1200,
        q : 8.5,
        env : {
            attack : .2,
            frequency : 600
        }
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

ReactDOM.render(
    <div id="keyboard">
        <Synth saw= {sawTone} keyName= "A" keyLabel="A" keyPitch="A2" keyValue = 'a'/>
        <Synth saw= {sawTone} keyName= "B" keyLabel="B" keyPitch="B2" keyValue = 's'/>
        <Synth saw= {sawTone} keyName= "C" keyLabel="C" keyPitch="C3" keyValue = 'd'/>
        <Synth saw= {sawTone} keyName= "D" keyLabel="D" keyPitch="D3" keyValue = 'f'/>
        <Synth saw= {sawTone} keyName= "E" keyLabel="E" keyPitch="E3" keyValue = 'g'/>
        <Synth saw= {sawTone} keyName= "F" keyLabel="F" keyPitch="F3" keyValue = 'h'/>
        <Synth saw= {sawTone} keyName= "G" keyLabel="G" keyPitch="G3" keyValue = 'j'/>
    </div>,
    document.getElementById('content')

);

//sawPlay();
