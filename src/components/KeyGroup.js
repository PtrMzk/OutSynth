/**
 * Created by Piotr Mikolajczyk on 6/18/2017.
 */
import React, {Component} from 'react';
import Key from '../components/Key'

class KeyGroup extends Component {
    constructor(props) {
        super(props); //super gives us access to "this" keyword
        this.renderKey = this.renderKey.bind(this);
    }

    renderKey(key, i) {
        let isAccidental = (key.indexOf('#') > 0);
        console.log(isAccidental.toString());
        return (
            <Key key={i} index={i} synthesizer={this.props.synthesizer} keyName={key} keyLabel={key}
                 keyPitch={key + '3'} keyType={(isAccidental) ? 'smallKey' : 'largeKey'} keyValue='a'/>
        );
    }

    render() {
        console.log("array:" + (this.props.keyGroup));

        return (
            <div className="keyGroup">
                {
                    this.props.keyGroup.map(this.renderKey)
                }
            </div>
        );//to pass parameters do {} => this.click(value)
    }
}

KeyGroup.defaultProps = {};

KeyGroup.propTypes = {keyGroup: React.PropTypes.array.isRequired};

export default KeyGroup;