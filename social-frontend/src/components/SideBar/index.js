import React, { Component } from 'react';
import SideBar from 'react-side-bar';
import './index.css';
import NavBar from '../NavBar';
class Bar extends Component {


    constructor(props) {
        super(props);
        this.displayName = 'SideBarExample';
        this.state = {
            barOpened: false,
            duration: 150,
            fx: 'cubic-bezier(0, 1, 0.85, 1)',
            mode: 'over',
            side: 'left',
            size: 500,
            tolerance: 70,
            topBarIncluded: true,
            touch: true,
            touchSize: 80
        };
    }
    toggleBar() {
        this.setState({ barOpened: !this.state.barOpened });
    }

    onOpen() {
        this.setState({ barOpened: true });
    }

    onClose() {
        this.setState({ barOpened: false });
    }
    render() {
        const { barOpened, duration, fx, mode, side, size, tolerance,
            topBarIncluded, touch, touchSize } = this.state;
        const { BEHIND, OVER, PUSH } = SideBar.MODES;
        const { LEFT, RIGHT } = SideBar.SIDES;
        const navIconClassName = ['nav-icon'];
        if (barOpened) {
            navIconClassName.push('open');
        }
        const bar = (<div className='side'>Amazing SideBar</div>);

        const topBar = (

            <div className='topBar'>

                <div className='left'>
                    <div
                        className={navIconClassName.join(' ')}
                        onClick={this.toggleBar.bind(this)}
                    >
                        <div>
                            <span /><span /><span /><span />
                        </div>
                    </div>
                    <div><p className='brand-name'>Fingers Speedsters</p></div>
                </div>
                <div className='center'><input type="text" size="40" placeholder="Search Website" value=""/></div>
                <div className='right'>
                    <ul id='navlist' >
                        <li>
                            <a href="/">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li>
                            <a  href="/login">Login</a>
                        </li>
                        <li>
                            <a href="/register">Register</a>
                        </li>
                    </ul>


                    <button className="navbar-toggler red" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse red" id="navbarText">
                        {/* moving to right side using ml-auto */}

                    </div>


                </div>
            </div>
        );
        const sideBarProps = {
            bar: bar,
            duration: duration,
            fx: fx,
            mode: mode,
            opened: barOpened,
            onOpen: this.onOpen.bind(this),
            onClose: this.onClose.bind(this),
            side: side,
            size: size,
            tolerance: tolerance,
            touch: touch,
            touchSize: touchSize,
            veilStyle: {
                opacity: 0.4
            }
        };
        if (topBarIncluded) {
            sideBarProps.topBar = topBar;
        }
        return (
            <SideBar {...sideBarProps}>
                {!topBarIncluded && topBar}
                <div className='main'>Test</div>
            </SideBar>
        );
    }
}


export default Bar;