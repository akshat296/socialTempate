import React, { Component } from 'react';
import $ from 'jquery';
class NavBar extends Component {


    constructor(props) {
        super();
        this.sidebar = this.sidebar.bind(this);

    }
    sidebar(){
       
        $(document).ready(function () {
           
            $('#sidebarCollapse').on('click', function () {
                $('#sidebar').toggleClass('active');
                $(this).toggleClass('active');
            });
        });
    }
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <nav className="navbar header-top fixed-top navbar-expand-lg  navbar-dark bg-dark">
                    <span className="navbar-toggler-icon leftmenutrigger" style={styles.space} />
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        {/* moving to right side using ml-auto */}
                        <ul className="navbar-nav animate side-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">Register</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </nav>
        );
    }
}
const styles = {
    space: {
        marginLeft: '5px',
        marginRight: '10px',
    }
};

export default (NavBar);