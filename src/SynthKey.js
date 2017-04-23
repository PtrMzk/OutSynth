import React, { Component } from 'react';
import Wad from "web-audio-daw";
import KeyHandler from 'react-key-handler';

class Synth extends Component {
    constructor(props) {
        //console.log(props.length.toString());
        super(props); //super gives us access to "this" keyword
        this.state = {count: 0, isPlaying: false};
        this.handleClick = this.handleClick.bind(this);
        this.stopButton = this.stopButton.bind(this);
        this.keyPressHandler = this.keyPressHandler.bind(this);
    }

    handleClick(){
        if (!this.state.isPlaying)
        {
            this.props.saw.play({
                length: 100,
                volume: 0.8,
                wait: 0,     // Time in seconds between calling play() and actually triggering the note.
                loop: false, // This overrides the value for loop on the constructor, if it was set.
                pitch: this.props.keyPitch,  // A4 is 440 hertz.
                label: this.props.keyLabel,   // A label that identifies this note.
                env: {hold: 9001},
                panning: [1, -1, 10],
                filter: {frequency: 900},
                delay: {delayTime: .8}
            });
            this.setState({isPlaying: true});
        }
        else
        {
            this.stopButton();
        }
    };

    stopButton(){
        if (this.state.isPlaying)
        {
            this.props.saw.stop(this.props.keyName);
            this.setState({isPlaying: false});
        }
        //alert('stopped');
    };

    keyPressHandler(event){

      //  console.log("detected key event");
       // console.log(event.charCode);
      //a  console.log(this.props.targetKeyCode + "Key Code");
        this.handleClick();

        //}
    };

    render() {
        //console.log("State" + this.state.isPlaying);
        return (
            <div className="synthKey">
                <KeyHandler keyEventName='keydown' keyValue={this.props.keyValue} onKeyHandle={this.keyPressHandler} />
                <KeyHandler keyEventName='keyup' keyValue={this.props.keyValue} onKeyHandle={this.stopButton} />

                <button
                    id="soundButton"
                    className= {this.state.isPlaying ? "pianoButtonActive" : "pianoButton"}
                    onMouseDown = {this.handleClick}
                    onMouseUp = {this.stopButton}
                    //onKeyDownCapture = {this.keyPressHandler}
                >
                {this.props.keyName}
                </button>
            </div>
        );//to pass parameters do {} => this.click(value)
    }
}

Synth.defaultProps = {
    parameterName: "Hey man set your defaults",
    saw: new Wad({source: 'sawtooth'}),
    isPlaying: false
};

Synth.propTypes = {keyName: React.PropTypes.string,
keyValue: React.PropTypes.string,
isPlaying: React.PropTypes.bool};



export default Synth;