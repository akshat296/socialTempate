import React, { Component } from 'react';
import $ from 'jquery';
import keyboard from 'react-virtual-keyboard';
import './index.css';
class NavBar extends Component {
    constructor(props) {
        super();
        this.state = {
            responsiveHeight: ' contract',
            
        };

    }
    responsive() {
        let x = document.getElementById('navlist');

        if (x.className === 'navlist') {
            x.className += ' responsive';
            this.setState({ responsiveHeight: ' expanded' });

        } else {
            x.className = 'navlist';
            this.setState({ responsiveHeight: ' contract' });
        }
    }

    componentDidMount() {
        this.setState({ flag: true });
    }

    render() {
        let styles = {
            size: {
                fontSize: '20px',
            },
            topBar: {
                className: 'topBar' + this.state.responsiveHeight
            }
        };
        
        
        return (
            <div className={styles.topBar.className}>
                <div className='left'>
                    <div
                        className={this.props.navIcon}
                        onClick={this.props.toggle}
                    >
                        <div>
                            <span /><span /><span /><span />
                        </div>
                    </div>
                    <div><p className='brand-name'>Fingers Speedsters</p></div>
                </div>
                <div className='center'></div>
                <div className='right'>
                    <ul className='navlist' id="navlist" >
                        <li className="links">
                            <a href="/" className="active links" >Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="links">
                            <a href="/login">Login</a>
                        </li>
                        <li className="links">
                            <a href="/register">Register</a>
                        </li>
                        <li className="resicon">
                            <a href="javascript:void(0);" style={styles.size} className="icon" onClick={this.responsive.bind(this)}>&#9776;</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default (NavBar);