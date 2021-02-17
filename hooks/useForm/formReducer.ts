import { createAction, createReducer } from '@reduxjs/toolkit'
import { FormSchema, FormField } from './types'

const UPDATE_VALUE = 'UPDATE_VALUE'

export const updateValue = createAction<
  {
    key: any
    value: FormField<any>['value']
  },
  typeof UPDATE_VALUE
>(UPDATE_VALUE)

export type FormActions = ReturnType<typeof updateValue>

const reducer = createReducer({} as FormSchema<any>, (builder) =>
  builder.addCase(updateValue, (state, action) => {
    state[action.payload.key].value = action.payload.value
  })
)

export default reducer
