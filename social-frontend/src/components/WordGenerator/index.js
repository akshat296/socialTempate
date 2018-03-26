import React, { Component } from 'react';

import './index.css';

class WordGenerator extends Component {
    constructor(props) {
        super();
        this.state = {};
    }
    
  
    
    render() {
        var element;
        element = this.props.sentences.split(" ").map((word,index) => {return  (<span key={"word" + index }> {word} </span>)});
        
        return (
            
            <div className="sentences">{element}</div>
        );
    }
}


export default WordGenerator;