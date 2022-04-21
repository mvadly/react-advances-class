import React, { Component } from 'react';
import P from '../../atoms/paragraph'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h2>React Advances Class App</h2>
                <P text={new Date().toString()} />
            </div>
        );
    }
}

export default Header;