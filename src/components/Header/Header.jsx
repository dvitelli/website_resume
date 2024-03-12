import React from 'react'
import "./Header.css"
import { Link, NavLink } from "react-router-dom"

function Header() {
  return (
    <header>
        <div id="header" className='container'>
            <NavLink to="/"
            className={({ isActive }) =>
            '${isActive ? "text-orange-700" : "text-green"}' }>
                Home
            </NavLink>
            <NavLink to="/resume"
            className={({ isActive }) =>
            '${isActive ? "text-orange" : "text-green"}'}>
                Resume
            </NavLink>
            <NavLink to="/projects"
            className={({ isActive }) =>
            '${isActive ? "text-orange" : "text-green"}'}>
                Projects
            </NavLink>
            
        </div>
    </header>
  )
}

export default Header