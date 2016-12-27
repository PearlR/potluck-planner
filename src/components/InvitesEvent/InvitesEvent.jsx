import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import {
  Button,
  ButtonGroup,
  FormGroup,
  FormControl,
} from 'react-bootstrap'

import {
  updateField,
  NAME,
} from '../../state/InvitesEvent/actions'

const InvitesEvent = props => {
  const {
    name,
    email,
    handleChange,
  } = props

  return <div>
    <FormGroup>
      <h1>Who's Invited?</h1>
      <FormControl id='formControlsText' type='text' name='inviteeName' placeholder='name' value={name} onChange={handleChange}/>
      <FormControl id='formControlsText' type='text' name='inviteeEmail' placeholder='Email' value={email} onChange={handleChange}/>
      <ButtonGroup>
        <Button><Link to='/menu'>Next</Link></Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(InvitesEvent)

