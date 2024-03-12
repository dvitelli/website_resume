import React from 'react'
import "./Footer.css"
import { Link, NavLink } from "react-router-dom"

function Footer() {
  return (
    <footer>
          <div id="footer" className='container'>
              <NavLink to="https://github.com/dvitelli"
                target='_new'
                className={({ isActive }) =>
                    '${isActive ? "text-orange-700" : "text-green"}'}>
                Github
              </NavLink>
              <NavLink to="https://www.linkedin.com/in/dominickvitelli/"
                target='_new'
                className={({ isActive }) =>
                      '${isActive ? "text-orange" : "text-green"}'}>
                LinkedIn
              </NavLink>
          </div>
    </footer>
  )
}

export default Footer