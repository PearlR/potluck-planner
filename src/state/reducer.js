import { combineReducers } from 'redux'

import { NAME as EVENT_NAME } from './createEvent/actions'
import { reducer as createEventReducer } from './createEvent/reducer'
import { NAME as LOGIN_FORM_NAME } from './loginForm/actions'
import { reducer as loginFormReducer } from './loginForm/reducer'

export default combineReducers({
  [EVENT_NAME]: createEventReducer,
  [LOGIN_FORM_NAME]: loginFormReducer,
})
