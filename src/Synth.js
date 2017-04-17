import React, { Component } from 'react';
import Wad from "web-audio-daw";


class Synth extends Component {
    constructor(props) {
        //console.log(props.length.toString());
        super(props);
        //Synth.context = this;
        this.handleClick = this.handleClick.bind(this);
        this.stopButton = this.stopButton.bind(this);

    }

    handleClick(){

        this.props.saw.play({
            length: 1,
            volume: 0.8,
            wait: 0,     // Time in seconds between calling play() and actually triggering the note.
            loop: false, // This overrides the value for loop on the constructor, if it was set.
            pitch: 'A4',  // A4 is 440 hertz.
            label: 'A',   // A label that identifies this note.
            env: {hold: 9001},
            panning: [1, -1, 10],
            filter: {frequency: 900},
            delay: {delayTime: .8}
        });
    };

    stopButton(){
        this.props.saw.stop();
        //alert('stopped');
    };


    render() {

        return (
            <div className="Synth">
                <button id="soundButton" onClick = {this.handleClick}>Start Tone</button>
                <button id="stopButton" onClick = {this.stopButton}>End Tone</button>
            </div>
        );
    }
}


export default Synth;