import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import MenuIcon from '@material-ui/icons/Menu'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'
import './CustomNavbar2.scss'

export default class CustomNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sideDrawerOpen: false,
            paddingTop: '10vh',
            height: '22vh',
            display: 'none'
        }
    }

    listenScrollEvent = e => {
        if (window.scrollY > 45) {
          this.setState({paddingTop: '1vh', height: '13vh', display: 'flex'})
        } else {
          this.setState({paddingTop: '10vh', height: '22vh', display: 'none'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div className="navbar-container" style={{ height: this.state.height}}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        zIndex: 'inherit'
                    }}
                >
                <div className="menu-icon"><MenuIcon onClick={this.drawerToggleClickHandler} style={{ fontSize: '36px' }} /></div>
                    <SideDrawer show={this.state.sideDrawerOpen} />
                    {backdrop}
                    <div className="navbar-link-container">
                    <div className="navbar-button">
                        <Link to="/" className="link"><h4>Home</h4></Link>
                    </div>
                    <div className="navbar-button">
                        <Link to="/Services" className="link"><h4>Services</h4></Link>
                    </div>
                    <div className="navbar-button">
                        <Link to="/About" className="link"><h4>About</h4></Link>
                    </div>
                    <div className="navbar-button">
                        <Link to="/Contact" className="link"><h4>Contact Us</h4></Link>
                    </div>
                    </div>
                    <img className="navbar-expanded-logo" style={{ paddingTop: this.state.paddingTop }} alt="logo" src="/assets/WebAmbrosia.png" />
                    <Button className="medium-size-button" style={{ display: this.state.display }}>Request Quote</Button>
                    <Button className="small-size-button">Quote</Button>
                </div>
                    <hr style={{ color: 'gray', height: '1px', width: '100vw', zIndex: 'inherit' }} />
            </div>
        )
    }
}
