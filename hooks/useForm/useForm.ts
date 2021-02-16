import { mapValues } from 'lodash'
import { useReducer, useEffect, useCallback } from 'react'
import formReducerFactory from './formReducer'
import { FormSchema, SubmitHandler, UseFormHook } from './types'

const useForm = <T extends {}>(
  formSchema: FormSchema<T>,
  submitHandler: SubmitHandler<T>
): UseFormHook<T> => {
  const { reducer, actions } = formReducerFactory(formSchema)
  const [formState, dispatch] = useReducer(reducer, formSchema)

  const updateField = useCallback(
    (key: keyof T, value: T[keyof T]): void => {
      dispatch(actions.updateValue({ key, value }))
    },
    [dispatch, actions]
  )

  const submitForm = useCallback((): void => {
    submitHandler(mapValues(formState, (field) => field.value))
  }, [submitHandler, formState])

  // useEffect(() => {
  //   console.log('new schema rerender!')
  // }, [formSchema])

  return { formState, submitForm, updateField }
}

export default useForm
