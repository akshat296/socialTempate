import React, { Component } from 'react';
import Scores from './scores';
import Menu from './menu';


class DashBoard extends Component {
    render() {
        return (
            <div>
                <Scores />
                <Menu />
            </div>
        );
    }
}

export default DashBoard;