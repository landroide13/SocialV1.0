import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <React.Fragment>
      <ul className="right">
       <li><NavLink to='/signup' className="nav-link">Sign Up</NavLink></li> 
        <li><NavLink to='/signin' className="nav-link">Sign In</NavLink></li>
      </ul>
    </React.Fragment>
  )
}