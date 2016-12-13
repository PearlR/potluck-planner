import React from 'react'
import { Link } from 'react-router'
import {
  Button,
  ButtonGroup,
  FormGroup,
  FormControl,
} from 'react-bootstrap'

const DetailsEvent = () => {
  return <div>
    <FormGroup>
    <h1>Important Details</h1>
      <FormControl type='text' name='date' placeholder='date' />
      <FormControl type='text' name='time' placeholder='time' />
      <FormControl type='text' name='location' placeholder='location' />
      <FormControl componentClass='textarea' name='description' placeholder='description' />
      <ButtonGroup>
        <Button><Link to='/invites'>Next</Link></Button>
      </ButtonGroup>
    </FormGroup>
  </div>
}

export default DetailsEvent
