import React, { Component } from 'react';
import TextBox from '../components/TextBox';
import SideBar from '../components/SideBar';

class Home extends Component {
    render() {
        return (
            <div>
                <SideBar />
                <h1>hello world!</h1>
            </div>
        );
    }
}

export default Home;