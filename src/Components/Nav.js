import React from "react";
import logo from "../icons_assets/Logo.svg";
import {Link} from 'react-router-dom';
import { useState } from "react";

const Nav = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
      setShowMenu(!showMenu);
    };

    return (
    <nav className="navbar">
        <img src={logo} alt="Logo"/>
        <div className={`menu-toggle ${showMenu ? "active" : ""}`} onClick={handleMenuToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        </div>
        <ul className={`nav-menu ${showMenu ? "active" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="Menu">Menu</Link></li>
            <li><Link to="bookingpage">Reservations</Link></li>
            <li><Link to="Order">Order Online</Link></li>
            <li><Link to="Login">Login</Link></li>
    </ul>
</nav>
)
};


export default Nav;