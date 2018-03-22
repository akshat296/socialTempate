import React, { Component } from 'react';
import Sidebar from 'react-side-bar';

class Bar extends Component {


    constructor(props) {
        super();
        this.state = {
            opened: true
        };
    }

    render() {
        const sidebarProps = {
            bar: (<div>Amazing Sidebar</div>),
            opened: this.state.opened,
            onClose: () => {
                this.setState({ opened: false })
            },
            onOpen: () => {
                this.setState({ opened: true })
            },
            size: 200
        };
       
        return (
            <div style={{ marginTop: '100px', paddingTop: '100px' }}>
                <Sidebar
                    bar={(<div>Amazing Sidebar</div>)} opened= {this.state.opened}
                    size={300} ><div className='topBar'>SIDEBAR</div>
                    <div className='main'>Main</div>
                </Sidebar>
            </div>
        );
    }
}


export default Bar;