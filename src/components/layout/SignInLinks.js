import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions';

const SignInLinks = (props) => {
  return (
    <React.Fragment>

      <ul className="right">
        <li><NavLink to='/new' >New Article</NavLink></li>
        <li><a onClick={props.signOut} >Log Out</a></li>
        <li><NavLink to='/' className="btn btn-floating green lighten-1">{ props.profile.initials }</NavLink></li>
      </ul>
            

      
    </React.Fragment>
  )
}

const MapToDispatchToProps = (dispatch) =>{
  return {
    signOut: () => dispatch(signOut())
  }
}


export default connect(null, MapToDispatchToProps)(SignInLinks);