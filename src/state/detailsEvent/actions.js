export const NAME = 'detailsEvent'
export const UPDATE_FIELD = `${NAME}/UPDATE_FIELD`

export const updateField = (name, value) => ({
  type: UPDATE_FIELD,
  payload: {
    name,
    value,
  },
})
