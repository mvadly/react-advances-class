import React, { Component } from 'react';

class Button extends Component {
    spinner() {
        return (
            <svg className="spinner" viewBox="0 0 50 50" style={{ marginRight:"10px" }}>
                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>
        )
    }
    render() {
        return (
            <button type="button" {...this.props}>
                {this.props.loading !== undefined && this.props.loading === true ? this.spinner() : ""}
                <span>{this.props.text}</span>
            </button>
        );
    }
}

export default Button;