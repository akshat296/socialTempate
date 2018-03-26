import React from 'react';
import SideBar from './SidebarConfig/SideBar';
import './index.css';
import NavBar from '../NavBar';
import DashBoard from './Dashboard';
import ExampleKeyboard from '../Screen/';
class Bar extends React.Component {


    constructor(props) {
        super(props);
        this.displayName = 'My Sidebar';
        this.state = {
            barOpened: false,
            duration: 150,
            fx: 'cubic-bezier(0, 1, 0.85, 1)',
            mode: 'behind',
            side: 'left',
            size: 300,
            tolerance: 70,
            topBarIncluded: true,
            touch: true,
            touchSize: 80,

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
        const navIconClassName = ['nav-icon'];

        if (barOpened) {
            navIconClassName.push('open');


        }
        const bar = (<div className='side'><DashBoard/></div>);

        let topBar = (
            <NavBar toggle={this.toggleBar.bind(this)} navIcon={navIconClassName.join(' ')}
            />
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
                <div className='main'><ExampleKeyboard/></div>
            </SideBar>
        );
    }
}


export default Bar;