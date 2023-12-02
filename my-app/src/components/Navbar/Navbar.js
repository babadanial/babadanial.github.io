import React from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap";
import './Navbar.css'
import { Dropdown, DropdownItem } from './DropdownItem'

var MyNavbar = () => {
    // const [toggle, setToggle] = useState(false)
    return  <Navbar data-bs-theme="dark" className="nav"> 
                <Container fluid>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="nav-item" href="/">Home</Nav.Link>
                            <Dropdown className="nav-item" title="CS" id="basic-nav-dropdown">
                                <DropdownItem href="#action/3.1" text="CS 135"/>
                                <DropdownItem href="#action/3.1" text="CS 136"/>
                                <DropdownItem href="#action/3.1" text="CS 241"/>
                                <DropdownItem href="#action/3.1" text="CS 245"/>
                                <DropdownItem href="#action/3.1" text="CS 246"/>
                                <DropdownItem href="#action/3.1" text="CS 251"/>
                                <DropdownItem href="#action/3.1" text="CS 341"/>
                                <DropdownItem href="#/CS348" text="CS 348"/>
                                <DropdownItem href="#action/3.1" text="CS 350"/>
                            </Dropdown>
                            <Dropdown className="nav-item" title="STAT" id="basic-nav-dropdown">
                                <DropdownItem href="#action/3.1" text="STAT 230"/>
                                <DropdownItem href="#action/3.1" text="STAT 231"/>
                            </Dropdown>
                            <Dropdown className="nav-item" title="CO" id="basic-nav-dropdown">
                                <DropdownItem href="#/CO250" text="CO 250"/>
                                <DropdownItem href="#action/3.1" text="CO 351"/>
                            </Dropdown>
                            <Dropdown className="nav-item" title="MATH" id="basic-nav-dropdown">
                                <DropdownItem href="#action/3.1" text="MATH 135" />
                                <DropdownItem href="#action/3.1" text="MATH 136" />
                                <DropdownItem href="#action/3.1" text="MATH 137" />
                                <DropdownItem href="#action/3.1" text="MATH 138" />
                                <DropdownItem href="#action/3.1" text="MATH 235" />
                                <DropdownItem href="#/MATH239" text="MATH 239"/>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
}

export default MyNavbar;