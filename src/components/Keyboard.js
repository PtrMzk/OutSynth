/**
 * Created by Piotr Mikolajczyk on 6/18/2017.
 */
import React, { Component } from 'react';
import Synthesizer from "../controller/synthesizer";
import KeyHandler from 'react-key-handler';
import Key from '../components/Key'


class Keyboard extends Component {
    constructor(props) {
        super(props); //super gives us access to "this" keyword
        this.state = {notes: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
            synthesizer: new Synthesizer('sawtooth')};
        this.renderKey = this.renderKey.bind(this);
    }


    renderKey(note, i) {
        console.log('Note is: ' + {note});
        console.log(this.state.synthesizer);

        var isAccidental = (note.indexOf('#') > 0) ? true : false;
        console.log(isAccidental.toString());
        var openingKeyGroupDiv = isAccidental ? '' : "<div className = 'keyGroup'>";
        var closingKeyGroupDiv = (isAccidental || note === 'B' || note === 'E') ? '</div>' : '';
        return (
<div>
            {openingKeyGroupDiv}
            <Key key={i} index={i} synthesizer={this.state.synthesizer} keyName= {note} keyLabel = {note} keyPitch={note + '2'} keyType = {(isAccidental) ? 'smallKey' : 'largeKey'} keyValue = 'a'></Key>
        {closingKeyGroupDiv}
</div>
        );
    }


    render() {
        //console.log("State" + this.state.isPlaying);
        return (
            <div className="keyboard">
                {
                    this.state.notes.map(this.renderKey)
                }
            </div>
        );//to pass parameters do {} => this.click(value)
    }
}

// Synth.defaultProps = {
//     parameterName: "Please set your defaults",
//     isPlaying: false
// };
//
// Synth.propTypes = {keyName: React.PropTypes.string,
//     keyValue: React.PropTypes.string,
//     isPlaying: React.PropTypes.bool};

export default Keyboard;