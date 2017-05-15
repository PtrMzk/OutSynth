import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Synth from './components/Key';
import './css/index.css';
import Wad from "web-audio-daw";
import synthesizer from './controller/synthesizer';

var sawTone = new Wad({source : 'sawtooth'});

//
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

ReactDOM.render(
    <div id="keyboard">
            <div id="container1" className = "keyGroup">
        <Synth keyName= "C" keyLabel="C" keyPitch="C2" keyType = "largeKey" keyValue = 'a'/>
        <Synth keyName= "C#" keyLabel="C#" keyPitch="C#2" keyType = "smallKey" keyValue = 'w'/>
            </div>
            <div id="container2" className = "keyGroup">
            <Synth keyName= "D" keyLabel="D" keyPitch="D2" keyType = "largeKey" keyValue = 's'/>
            <Synth keyName= "D#" keyLabel="D#" keyPitch="D#2" keyType = "smallKey" keyValue = 'e'/>
            </div>
            <div id="container2" className = "keyGroup">
        <Synth keyName= "E" keyLabel="E" keyPitch="E2" keyType = "largeKey" keyValue = 'd'/>
            </div>
            <div id="container2" className = "keyGroup">
        <Synth keyName= "F" keyLabel="F" keyPitch="F2" keyType = "largeKey" keyValue = 'f'/>
                    <Synth keyName= "F#" keyLabel="F#" keyPitch="F#2" keyType = "smallKey" keyValue = 't'/>
            </div>
            <div id="container2" className = "keyGroup">
        <Synth keyName= "G" keyLabel="G" keyPitch="G2" keyType = "largeKey" keyValue = 'g'/>
                    <Synth keyName= "G#" keyLabel="G#" keyPitch="G#2" keyType = "smallKey" keyValue = 'y'/>
            </div>
            <div id="container2" className = "keyGroup">
        <Synth keyName= "A" keyLabel="A" keyPitch="A2" keyType = "largeKey" keyValue = 'h'/>
                    <Synth keyName= "A#" keyLabel="A#" keyPitch="A#2" keyType = "smallKey" keyValue = 'u'/>
            </div>
            <div id="container2" className = "keyGroup">
        <Synth keyName= "B" keyLabel="B" keyPitch="B2" keyType = "largeKey" keyValue = 'j'/>
            </div>

    </div>,
    document.getElementById('content')

);

//sawPlay();
