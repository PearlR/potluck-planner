import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import App from './components/App'
import CreateEvent from './components/CreateEvent/CreateEvent'
import DetailsEvent from './components/DetailsEvent/DetailsEvent'
import Homepage from './components/Homepage/Homepage'
import InvitesEvent from './components/InvitesEvent/InvitesEvent'
import Login from './components/Login/Login'
import LoginSuccess from './components/LoginSuccess/LoginSuccess'
import { reducer } from './state/reducer'

import './index.css'

const store = createStore(
  reducer,
  window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/home" component={Homepage} />
      <Route path="/login" component={Login} />
      <Route path="/success" component={LoginSuccess} />
      <Route path="/create-event" component={CreateEvent} />
      <Route path="/event-details" component={DetailsEvent} />
      <Route path="/invites" component={InvitesEvent} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
