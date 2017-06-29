import React, {Component} from 'react';
import KeyHandler from 'react-key-handler';


class Key extends Component {
    constructor(props) {
        super(props); //super gives us access to "this" keyword
        this.state = {count: 0, isPlaying: false};
        this.handleClick = this.handleClick.bind(this);
        this.stopButton = this.stopButton.bind(this);
        this.keyPressHandler = this.keyPressHandler.bind(this);
    }

    handleClick() {
        if (!this.state.isPlaying) {
            this.props.synthesizer.playNote(this.props.keyPitch, this.props.keyLabel);
            this.setState({isPlaying: true});
        }
        else {
            this.stopButton();
        }
    };

    stopButton() {
        if (this.state.isPlaying) {
            this.props.synthesizer.stop();
            this.setState({isPlaying: false});
        }
        //alert('stopped');
    };

    keyPressHandler(event) {

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
                <KeyHandler keyEventName='keydown' keyValue={this.props.keyValue} onKeyHandle={this.keyPressHandler}/>
                <KeyHandler keyEventName='keyup' keyValue={this.props.keyValue} onKeyHandle={this.stopButton}/>
                <button
                    id="soundButton"
                    className={this.props.keyType + (this.state.isPlaying ? " " + this.props.keyType + "Active" : "")}
                    onMouseDown={this.handleClick}
                    onMouseUp={this.stopButton}
                    //onKeyDownCapture = {this.keyPressHandler}
                >
                    {this.props.keyName}
                </button>
            </div>
        );//to pass parameters do {} => this.click(value)
    }
}

Key.defaultProps = {
    parameterName: "Pleaseset your defaults",
    isPlaying: false
};

Key.propTypes = {
    keyName: React.PropTypes.string,
    keyValue: React.PropTypes.string,
    isPlaying: React.PropTypes.bool
};

export default Key;