import React from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'
function Nav() {
    return (
        <nav className="navbar">
            <h1 className="brand">Aravindh</h1>
            <ul className='nav-list'>
                <li className="nav-item active">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact">Contact</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Nav