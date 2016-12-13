import React from 'react'
import { Link } from 'react-router'
import { Button, ButtonGroup, FormGroup } from 'react-bootstrap'

const LoginSuccess = () => {
  return <div>
    <p>loggin in as default-user</p>
    <FormGroup>
      <h1>You have no current potluck events</h1>
      <ButtonGroup>
        <Button><Link to="create-event">Create Event</Link></Button>
      </ButtonGroup>
    </FormGroup>
  </div>
}

export default LoginSuccess
