import React from 'react'
import { Link } from 'react-router'
import { Button, ButtonGroup, FormGroup } from 'react-bootstrap'

const SingleEvent = () => {
  return <div>
    <FormGroup>
      <h1>Event Title</h1>
      <p>Event Info</p>
      <ButtonGroup>
        <Button><Link Title='all-events'>All Events</Link></Button>
      </ButtonGroup>
    </FormGroup>
  </div>
}

export default SingleEvent
