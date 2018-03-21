import React, { Component } from 'react';
import './App.css';
import { 
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import Home from '../pages/home';
import Register from '../pages/register';
import Login from '../pages/login';

class MyRoute extends Component {

	render() {
		return (
			<Router>
				<div className="parent">
					<Route exact path = "/" component = {Home} />
					<Route path = "/register" component = {Register} />
					<Route path = "/login" component = {Login} />
				</div>
			</Router>
		);
	}
}