import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { Button, ButtonGroup, FormGroup, FormControl } from 'react-bootstrap'

import { updateField, NAME } from '../../state/createEvent/actions'

const CreateEvent = props => {
  const { eventTitle, handleChange } = props

  return <div>
    <FormGroup>
      <h1>Let's create a potluck!</h1>
      <FormControl type='text' name='eventTitle' placeholder='eventTitle' value={eventTitle} onChange={handleChange} />
      <ButtonGroup>
        <Button><Link to='/event-details'>Let's go!</Link></Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent)
