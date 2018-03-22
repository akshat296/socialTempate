import React, { Component } from 'react';
import TextBox from '../components/TextBox';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar'

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <SideBar />
            </div>
        );
    }
}

export default Home;