import React, { useState } from 'react'
import "./nav.css"
import { Link } from 'react-router-dom'
function Nav() {


    const [list, setlist] = useState([
        {
            id: 1,
            to: '/',
            checked: true,
            txt: "Home"
        },
        {
            id: 2,
            to: '/about',
            checked: false,
            txt: "About"
        },
        {
            id: 3,
            to: '/services',
            checked: false,
            txt: "Services"
        },
        {
            id: 4,
            to: '/projects',
            checked: false,
            txt: "Projects"
        },
        {
            id: 5,
            to: '/contact',
            checked: false,
            txt: "Contact"
        },
    ])


    function handleClick(id) {
        const newList = list.map((item) =>
            item.id == id ? { ...item, checked: true } : { ...item, checked: false })
        setlist(newList)
    }


    return (
        <nav className="navbar">
            <h1 className="brand">Aravindh</h1>
            <ul className='nav-list'>

                {list.map((l) => (
                    <Link key={l.id} className={l.checked ? "nav-item active" : "nav-item"} to={l.to} onClick={() => handleClick(l.id)}>{l.txt}</Link>

                ))}


            </ul>
        </nav>
    )
}

export default Nav