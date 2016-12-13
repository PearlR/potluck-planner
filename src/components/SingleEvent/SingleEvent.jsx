import React from 'react'
import { Link } from 'react-router'

const SingleEvent = () => {
  return <div>
    <h1>Event Title</h1>
    <p>Event Info</p>
    <Link to='all-events'>All Events</Link>
  </div>
}

export default SingleEvent
