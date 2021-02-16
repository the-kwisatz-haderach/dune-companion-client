import { createAction, createReducer } from '@reduxjs/toolkit'
import { FormSchema } from './types'

const UPDATE_VALUE = 'UPDATE_VALUE'

const formReducerFactory = <T extends {}>(initialState: FormSchema<T>) => {
  const updateValue = createAction<
    {
      key: keyof FormSchema<T>
      value: FormSchema<T>[keyof FormSchema<T>]['value']
    },
    typeof UPDATE_VALUE
  >(UPDATE_VALUE)

  const reducer = createReducer<FormSchema<T>>(initialState, {
    [updateValue.type]: (state, action) => {
      state[action.payload.key].value = action.payload.value
    }
  })

  return {
    reducer,
    actions: {
      updateValue
    }
  }
}

export default formReducerFactory
