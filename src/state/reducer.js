import { combineReducers } from 'redux'

import { NAME as LOGIN_FORM_NAME } from './loginForm/actions'
import { reducer as loginFormReducer } from './loginForm/reducer'

export default combineReducers({
  [LOGIN_FORM_NAME]: loginFormReducer,
})
