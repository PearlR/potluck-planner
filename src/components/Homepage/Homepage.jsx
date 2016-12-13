import React from 'react'
import { Link } from 'react-router'

const Homepage = () => {
  return <div>
    <h1>Potluck Planner</h1>
    <h1>homepage</h1>
    <Link to="login">Login</Link>
    <Link to="signin">Sign In</Link>
  </div>
}

export default Homepage
