import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <Link to='/' className="header">
                <h1>Gasolyne</h1>
                <img src="https://www.freeiconspng.com/uploads/oil-and-gas-icon-oil--gas-32.png" alt="icon" className="iconPng" />
            </Link>
        );
    }
}

export default Navbar;