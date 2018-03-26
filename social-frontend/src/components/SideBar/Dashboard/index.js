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
const styles = {
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    activeTitle: {
        color: 'red',
    },
};

export default DashBoard;