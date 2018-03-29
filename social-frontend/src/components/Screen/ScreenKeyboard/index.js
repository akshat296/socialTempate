import * as React from 'react';
import VirtualKeyboard from '../KeyboardLib';
import jQuery from 'jquery';
import { connect } from 'react-redux';
import { getWord } from '../../../actions/wordActions';
import { bindActionCreators } from 'redux';
import './index.css';

class ScreenKeyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textarea: "Write Some Text", inputfield: "Input field"
            , word: '', index: 0
        };
        this.onTextareaChanged = this.onTextareaChanged.bind(this);
        this.onInputChanged = this.onInputChanged.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.word = '';
        this.index = 0;
    }

    onTextareaChanged(newState) {
        this.setState({ textarea: newState });
    }
    onInputChanged(newState) {

        this.setState({ inputfield: newState });
    }
    handleKeyPress(event) {
        let character;

        console.log('word=>');
        // Add backspace, shift and tab key
        if (event.key.length === 1) {
            if (event.key.match(/[a-zA-Z-0-9]/g)) {
                character = event.key;
            } else {
                character = event.key.charCodeAt(0);
            }
            jQuery('.ui-keyboard-' + character).addClass('ui-keyboard-button-color');
            setTimeout(() => {
                jQuery('*').removeClass('ui-keyboard-button-color');
            }, 100);
            if (event.key.match(/[a-zA-Z\-,"';:{}.~`?.()0-9]/)) {
                this.word = this.word + event.key;

            }
        }
       
        if (event.key === "Backspace") {

            this.word = this.word.substring(0, this.word.length-1);
           
        }
        if (event.key.charCodeAt(0) === 32) {

            this.setState({ word: this.word, index: this.index });
            this.props.getWord(this.word, this.index);
            this.index++;
            this.word = '';
        }

    }

    render() {
        var display = {
            'bksp': '\u2190',
            'enter': 'return',
            'default': 'ABC',
            'meta1': '.?123',
            'meta2': '#+=',
            'accept': '\u21d3'
        };
        var customLayout = {
            'default': [
                'q w e r t z u i o p {bksp}',
                'a s d f g h j k l {enter}',
                '{s} y x c v b n m @ . {s}',
                '{meta1} {space} _ - {accept}'
            ],
            'shift': [
                'Q W E R T Z U I O P {bksp}',
                'A S D F G H J K L {enter}',
                '{s} Y X C V B N M @ . {s}',
                '{meta1} {space} _ - {accept}'
            ],
            'meta1': [
                '1 2 3 4 5 6 7 8 9 0 {bksp}',
                '` | { } % ^ * / \' {enter}',
                '{meta2} $ & ~ # = + . {meta2}',
                '{default} {space} ! ? {accept}'
            ],
            'meta2': [
                '[ ] { } \u2039 \u203a ^ * " , {bksp}',
                '\\ | / &lt; &gt; $ \u00a3 \u00a5 \u2022 {enter}',
                '{meta1} \u20ac & ~ # = + . {meta1}',
                '{default} {space} ! ? {accept}'
            ]
        };
        return <div>


            <VirtualKeyboard value={this.state.textarea} name='thetextareaname' options={{ type: 'textarea', usePreview: false, layout: 'qwerty', autoAccept: true, alwaysOpen: false, appendLocally: true, updateOnChange: true, color: 'dark' }} onChange={this.onTextareaChanged} onKeyDown={this.handleKeyPress} />
        </div>;
    }
}
function mapStateToProps(state) {

    return {
        word: state.word,
        index: state.index

    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getWord
    }, dispatch);

}


export default connect(mapStateToProps, mapDispatchToProps)(ScreenKeyboard);