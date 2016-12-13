import React from 'react'
import { Link } from 'react-router'
import { Button, ButtonGroup, FormGroup, FormControl } from 'react-bootstrap'

const CreateEvent = () => {
  return <div>
    <FormGroup>
      <h1>Let's create a potluck!</h1>
      <FormControl type='text' name='eventTitle' placeholder='eventTitle' />
      <ButtonGroup>
        <Button><Link to='/event-details'>Let's go!</Link></Button>
      </ButtonGroup>
    </FormGroup>
  </div>
}

export default CreateEvent
