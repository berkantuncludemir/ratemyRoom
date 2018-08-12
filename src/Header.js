import React, { Component } from 'react';
import {Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap'
import './navbar.css';

class Header extends React.Component {
    render() {
        return (
            //fixed-top navbar-expand-lg navbar-light
            <Navbar fixedTop>
                <Navbar.Brand>
                    <a href="#home">|RooM|</a>
                </Navbar.Brand>
                <Navbar.Collapse>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;
