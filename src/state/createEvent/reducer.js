import { UPDATE_FIELD } from './actions'

export const reducer = (state = {}, { type, payload: { name, value } = {} }) => {
  switch (type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [name]: value,
      }
    default:
      return state
  }
}
