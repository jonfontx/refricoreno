import React from "react";
import logo from "../icons_assets/Logo.svg";
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
    <nav>
        <img src={logo} alt="Logo"/>
        <ul>
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