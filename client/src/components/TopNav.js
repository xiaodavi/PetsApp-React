import React from 'react';
import { Link } from 'react-router-dom'
import {logout} from '../services/auth'

const TopNav = (props) => {
  console.log(props.user);
  const handleLogout = props => {
    
    logout().then(() => {
      props.setUser(null)
    })
  }

  return (
    <div>
      {props.user ? (
        <>
        <Link to="/">Match Page</Link>
        <Link to="/" onClick={() => handleLogout(props)}>Logout</Link>
        <Link to="/register-pets">Register Pets</Link>
        <Link to="/my-pets">My Pets</Link>
        <Link to="/matching">Matching</Link>
        <Link to="/profile">Profile</Link>
        </>
      ) : (
        <>
        <Link to='/signup'>Signup</Link>
        <Link to="/login">Login</Link>
        </>
      )
      }
    </div>
  )
}

export default TopNav
