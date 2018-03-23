import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';

class MyRoute extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path = "/" component = {Home} />
                    <Route path = "/register" component = {Register} />
                    <Route path = "/login" component = {Login} />
                </div>
            </Router>
        );
    }
}
export default MyRoute;