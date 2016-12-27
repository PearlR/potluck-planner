import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import {
  Button,
  ButtonGroup,
  FormGroup,
  FormControl,
} from 'react-bootstrap'

import { updateField, NAME } from '../../state/detailsEvent/actions'

const DetailsEvent = props => {
  const { date, description, handleChange, loc, time } = props

  return <div>
    <FormGroup>
    <h1>Important Details</h1>
      <FormControl type='text' name='date' placeholder='date' value={date} onChange={handleChange} />
      <FormControl type='text' name='time' placeholder='time' value={time} onChange={handleChange} />
      <FormControl type='text' name='location' placeholder='location' value={loc} onChange={handleChange} />
      <FormControl componentClass='textarea' name='description' placeholder='description' value={description} onChange={handleChange} />
      <ButtonGroup>
        <Button><Link to='/invites'>Next</Link></Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailsEvent)
