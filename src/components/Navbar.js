import React from 'react'
import { NavLink, Route } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className='navbar'>
            <ul>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/services'>Services</NavLink>
                <NavLink to='/about'>About</NavLink>
            </ul>
            </div>
        </div>
    )
}

export default Navbar
