import React from 'react'
import { Link } from 'react-router'
import { Button, ButtonGroup, FormControl, FormGroup } from 'react-bootstrap'

const Login = () => {
  return <div>
  <FormGroup>
      <h1>Login</h1>
      <FormControl type='text' name='username' placeholder='username'></FormControl>
      <FormControl type='text' name='password' placeholder='username'></FormControl>
      <ButtonGroup>
        <Button><Link to="success">Login</Link></Button>
      </ButtonGroup>
  </FormGroup>
  </div>
}

export default Login
