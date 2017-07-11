/**
 * Created by Piotr Mikolajczyk on 7/10/2017.
 */
import React, {Component} from 'react';
import KeyHandler from 'react-key-handler';


class Header extends Component {
    constructor(props) {
        super(props); //super gives us access to "this" keyword
    }


    render() {
        return (
            <div id="header" className="header"> OutSynth</div>
        );
    }
}

export default Header;