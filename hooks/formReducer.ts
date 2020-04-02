import { createAction, createReducer } from '@reduxjs/toolkit'
import { FormSchema, FormField } from './types'

export const updateValue = createAction<Pick<FormField, 'value'>>(
  'form/createValue'
)

const formReducer = (initialState: FormSchema) =>
  createReducer(initialState, {
    [updateValue.type]: (state, action) => ({
      ...state,
      [action.payload.fieldKey]: {
        ...state[action.payload.fieldKey],
        value: action.payload.value,
      },
    }),
  })

export default formReducer
