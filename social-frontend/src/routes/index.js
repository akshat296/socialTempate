import React, { Component } from 'react';
import './App.css';
import { 
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import Home from './components/pages/home';
import Register from './components/pages/register';
import Login from './components/pages/login';

class App extends Component {

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