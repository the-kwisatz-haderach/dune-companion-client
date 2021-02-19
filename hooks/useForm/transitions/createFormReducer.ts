import { UPDATE_VALUE, CLEAR_FORM, RESET } from '.'
import { FormReducerFactory } from './types'

const formReducerFactory: FormReducerFactory = (initialState) => (
  state,
  action
) => {
  switch (action.type) {
    case UPDATE_VALUE: {
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          value: action.payload.value
        }
      }
    }
    case CLEAR_FORM: {
      return state
    }
    case RESET: {
      return initialState
    }
    default: {
      return state
    }
  }
}

export default formReducerFactory
