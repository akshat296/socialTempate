import React, { Component } from 'react';
import { connect } from 'react-redux';



class Register extends Component {
    render() {
        return (
            <div>
                Test Register
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {

    };
}
export default connect(mapStateToProps)(Register);