import React from 'react'
import { Link } from 'react-router'

const LoginSuccess = () => {
  return <div>
    <h1>Success</h1>
    <p>You have no new events. Create a new event?</p>
    <Link to="create-event">Create Event</Link>
  </div>
}

export default LoginSuccess
