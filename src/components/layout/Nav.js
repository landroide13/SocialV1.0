import React from 'react'
import { Link } from 'react-router-dom'
import SignIn from './SignInLinks';
import SignOut from './SignOutLinks';
import { connect } from 'react-redux';

const Nav =  () => {
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

const MapStateToProps = (state) =>{
  console.log(state)
  return{

  }
}


export default connect(MapStateToProps)(Nav);