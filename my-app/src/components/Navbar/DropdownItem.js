import React, { useState } from 'react';
import './DropdownItem.css';
import { NavDropdown } from "react-bootstrap";

function Dropdown(props) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <NavDropdown
      className={`${props.className} animated-dropdown ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title={props.title}
      >
      {props.children}
    </NavDropdown>
  )
}

function DropdownItem(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavDropdown.Item
      className={`animated-button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={props.href}
    >
      {props.text}
    </NavDropdown.Item>  
  );
}

export {Dropdown, DropdownItem};