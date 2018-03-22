import React, { Component } from 'react';

class TextBox extends Component {
    render() {
        return (
            <input type="text" style={styles.container} value="test" placeholder="test" />
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

export default TextBox;