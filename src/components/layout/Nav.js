import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignInLinks';
import SignOut from './SignOutLinks';

export default () => {
  return (
    <React.Fragment>

      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo">Social App</Link>
            <SignIn />
            <SignOut />
        </div>
      </nav>

      
    </React.Fragment>
  )
}