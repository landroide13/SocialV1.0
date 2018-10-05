import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <React.Fragment>

      <ul className="right">
        <li><NavLink to='/new' >New Article</NavLink></li>
        <li><NavLink to='/' >Log Out</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating green lighten-1">NN</NavLink></li>
      </ul>
            

      
    </React.Fragment>
  )
}