import React, { Component } from 'react';
import ScreenKeyboard from './ScreenKeyboard';
import WordGenerator from '../WordGenerator';

class Screen extends Component {
    render() {
        return (
            <div className="wrapper">
                <WordGenerator sentences="I believe that imagination is stronger than knowledge. That myth is more potent than history. That dreams are more powerful than facts. That hope always triumphs over experience.
                    That laughter is the only cure for grief. And I believe that love is stronger than death."/>
                <ScreenKeyboard />

            </div>
        );
    }
}

export default Screen;