import { combineReducers } from 'redux'

import { NAME as EVENT_NAME } from './createEvent/actions'
import { reducer as createEventReducer } from './createEvent/reducer'
import { NAME as EVENT_DETAILS } from './detailsEvent/actions'
import { reducer as detailsEventReducer } from './detailsEvent/reducer'
import { NAME as INVITES_EVENT } from './invitesEvent/actions'
import { reducer as invitesEventReducer } from './invitesEvent/reducer'
import { NAME as LOGIN_FORM_NAME } from './loginForm/actions'
import { reducer as loginFormReducer } from './loginForm/reducer'

export default combineReducers({
  [EVENT_DETAILS]: detailsEventReducer,
  [INVITES_EVENT]: invitesEventReducer,
  [EVENT_NAME]: createEventReducer,
  [LOGIN_FORM_NAME]: loginFormReducer,
})
