import React from 'react'
import { Link } from 'react-router'

const DetailsEvent = () => {
  return <div>
    <h1>Event Details</h1>
    <p>Event Name</p>
    <Link to='/invites'>Next</Link>
  </div>
}

export default DetailsEvent
