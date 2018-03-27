import React, { Component } from 'react';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import './index.css';

class WordGenerator extends Component {
    constructor(props) {
        super();
        this.state = { words: [], sentences: ' ' };
    }

    componentWillMount() {
        this.setState({ words: this.props.words, sentences: this.props.sentences });
    }
    componentWillReceiveProps() {
        this.setState({ words: this.props.words, sentences: this.props.sentences });
        
    }
    render() {
        var element;
        var splitWords = this.state.sentences.split(" ");
        element = splitWords.map((word, index) => {
           
            return (<span key={"word" + index}> {word} </span>);
        });
        console.log("hello ",this.props);
        this.props.words.map((word, index) => {
           
            if (splitWords[index] === word) {
                element[index] = (<span key={"word" + index} className="correct" > {splitWords[index]} </span>);
            }
            else {
                element[index] = (<span key={"word" + index} className="incorrect" > {splitWords[index]} </span>);
            }
        });
        return (

            <div className="sentences">{element}</div>
        );
    }
}



function mapStateToProps(state) {
   

    return {
        words: state.word

    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(WordGenerator);