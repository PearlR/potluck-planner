import React from 'react'
import { Link } from 'react-router'
import { Button, ButtonGroup, FormGroup, FormControl } from 'react-bootstrap'

const InvitesEvent = () => {
  return <div>
    <FormGroup>
      <h1>Who's Invited?</h1>
      <FormControl id='formControlsText' type='text' name='inviteeName' placeholder='name' />
      <FormControl id='formControlsText' type='text' name='inviteeEmail' placeholder='Email' />
      <ButtonGroup>
        <Button><Link to='/menu'>Next</Link></Button>
      </ButtonGroup>
    </FormGroup>
  </div>
}

export default InvitesEvent
