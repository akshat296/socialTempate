import * as React from 'react';
import VirtualKeyboard from '../KeyboardLib';
import jQuery from 'jquery';
export default class ScreenKeyboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { textarea: "This is some sample text area input", inputfield: "Input field" };
        this.onTextareaChanged = this.onTextareaChanged.bind(this);
        this.onInputChanged = this.onInputChanged.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);


    }

    onTextareaChanged(newState) {
        this.setState({ textarea: newState });
    }
    onInputChanged(newState) {

        this.setState({ inputfield: newState });
    }
    handleKeyPress(event) {
        let character

        if (event.key.match(/[a-zA-Z\-]/g)) {
            character = event.key;
        } else {
            character = event.key.charCodeAt(0);
        }
        jQuery('.ui-keyboard-' + character).addClass('ui-keyboard-button-color');
        setTimeout(() => {
            jQuery('*').removeClass('ui-keyboard-button-color');
        }, 100);


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
            <h1>Textarea. {this.state.textarea}</h1>
            <VirtualKeyboard value={this.state.textarea} name='thetextareaname' options={{ type: 'textarea', usePreview: false, layout: 'qwerty', autoAccept: true, alwaysOpen: false, appendLocally: true, updateOnChange: true, color: 'dark' }} onChange={this.onTextareaChanged} onKeyPress={this.handleKeyPress} />
        </div>;
    }
};