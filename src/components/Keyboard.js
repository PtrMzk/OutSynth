/**
 * Created by Piotr Mikolajczyk on 6/18/2017.
 */
import React, { Component } from 'react';
import synthesizer from '../controller/synthesizer'
import KeyHandler from 'react-key-handler';
import Key from '../components/Key'


class Keyboard extends Component {
    constructor(props) {
        super(props); //super gives us access to "this" keyword
    }

    getInitialState() {
      return {

      }
    };

    render() {
        //console.log("State" + this.state.isPlaying);
        return (
            <div className="synthKey">
                <KeyHandler keyEventName='keydown' keyValue={this.props.keyValue} onKeyHandle={this.keyPressHandler} />
                <KeyHandler keyEventName='keyup' keyValue={this.props.keyValue} onKeyHandle={this.stopButton} />
                <button
                    id="soundButton"
                    className= {this.props.keyType + (this.state.isPlaying ? " " + this.props.keyType + "Active" : "")}
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
    isPlaying: false
};

Synth.propTypes = {keyName: React.PropTypes.string,
    keyValue: React.PropTypes.string,
    isPlaying: React.PropTypes.bool};

export default Keyboard;