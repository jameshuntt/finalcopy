import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './SideDrawer.scss'

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer open'];
    }
    return(
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <Link to="/">
                        <Button type="primary">
                            Home
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/Services">
                    <Button type="primary">
                            Services
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/About">
                    <Button type="primary">
                            About
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/Contact">
                    <Button type="primary">
                            Contact
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default sideDrawer;