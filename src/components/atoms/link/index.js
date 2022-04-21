import React, { Component } from 'react';

class Link extends Component {
    render() {
        return (
            <a {...this.props}>{this.props.text}</a>
        );
    }
}

export default Link;