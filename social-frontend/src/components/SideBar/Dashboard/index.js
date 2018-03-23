import React, { Component } from 'react';



class Scores extends Component {
    render() {
        return (
            <div>
                <input type="text" value="test" placeholder="Login" />
                <input type="password" value="password" placeholder="Password" />
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

export default Scores;