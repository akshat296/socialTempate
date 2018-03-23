import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        return (
            <div>
                <input type="text"  value="test" placeholder="Login" />
                <input type="password" value="password" placeholder="Password" />
            </div>
        );
    }
}


export default (Login);