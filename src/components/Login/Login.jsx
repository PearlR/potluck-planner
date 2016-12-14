import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button, ButtonGroup, FormControl, FormGroup } from 'react-bootstrap'

import { updateField, NAME } from '../../state/loginForm/actions'

const Login = props => {
  const { handleChange, password, username } = props

  return <div>
  <FormGroup>
      <h1>Login</h1>
      <FormControl type='text' name='username' placeholder='username' value={username} onChange={handleChange}></FormControl>
      <FormControl type='text' name='password' placeholder='password' value={password} onChange={handleChange}></FormControl>
      <ButtonGroup>
        <Button><Link to="success">Login</Link></Button>
      </ButtonGroup>
  </FormGroup>
  </div>
}

const mapStateToProps = state => {
  return state[NAME] || {}
}

const mapDispatchToProps = dispatch => {
  return {
    handleChange: event => dispatch(updateField(event.target.name, event.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
