import React, { Component } from 'react';



class Scores extends Component {
    constructor() {
        super();
        this.state = {
            player1 :{
                name: 'Player 1',
                score: 'XX'
            },
            player2 :{
                name: 'Player 2',
                score: 'XX'
            },
            player3 :{
                name: 'Player 3',
                score: 'XX'
            },
            player4 :{
                name: 'Player 4',
                score: 'XX'
            }
        };
    }
    render() {
        let { player1, player2, player3, player4 } = this.state;
        return (
            <div>
                <h3> Scores </h3>
                <h5> {player1.name} : {player1.score} </h5>
                <h5> {player2.name} : {player2.score} </h5>
                <h5> {player3.name} : {player3.score} </h5>
                <h5> {player4.name} : {player4.score} </h5>
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