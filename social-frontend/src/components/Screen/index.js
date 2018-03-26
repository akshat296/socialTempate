import React, { Component } from 'react';
import Keyboard from './ScreenKeyboard';


class Screen extends Component {
    render() {
        return (
            <div className="wrapper">
                <Keyboard />
               
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

export default Screen;