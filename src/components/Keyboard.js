/**
 * Created by Piotr Mikolajczyk on 6/18/2017.
 */
import React, {Component} from 'react';
import Synthesizer from "../controller/synthesizer";
import KeyGroup from "../components/KeyGroup"

class Keyboard extends Component {
    constructor(props) {
        super(props); //super gives us access to "this" keyword
        this.state = {
            notes: [['C', 'C#'], ['D', 'D#'], ['E'], ['F', 'F#'], ['G', 'G#'], ['A', 'A#'], ['B']],
            synthesizer: new Synthesizer('sawtooth')
        };
        this.renderKeyGroup = this.renderKeyGroup.bind(this);
        this.changeSynthesizerSource = this.changeSynthesizerSource.bind(this);
    }

    changeSynthesizerSource(event) {
        this.setState(this.state.synthesizer = new Synthesizer(event.target.value));
    }

    renderKeyGroup(keys, i) {
        return (
            <KeyGroup key={i} index={i} keyGroup={keys} synthesizer={this.state.synthesizer}/>
        );
    }


    render() {
        return (
            <div className="keyboardWrapper">
                <div className="keyboardControls">
                    <select className="keyboardSource" onChange={this.changeSynthesizerSource}>
                        <option value="">Select Source...</option>
                        <option value="sawtooth">Sawtooth</option>
                        <option value="sine">Sine</option>
                        <option value="square">Square</option>
                        <option value="triangle">Triangle</option>
                    </select>
                </div>
                <div className="keyboard">
                    {
                        this.state.notes.map(this.renderKeyGroup)
                    }
                </div>
            </div>
        );
    }
}

export default Keyboard;