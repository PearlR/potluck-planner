import React from 'react'
import { Link } from 'react-router'
import { Button, ButtonGroup, FormGroup, FormControl } from 'react-bootstrap'

const MenuEvent = () => {
  return <div>
    <FormGroup>
      <h1>What is everyone eating?</h1>
        <FormControl type='text' name='category' placeholder='course' />
        <FormControl type='text' name='dishName' placeholder='dish name' />
        <FormControl type='text' name='userOfDish' placeholder='person assigned to dish' />
      <ButtonGroup>
        <Button><Link to="/single-event">Next</Link></Button>
      </ButtonGroup>
    </FormGroup>
  </div>
}

export default MenuEvent
