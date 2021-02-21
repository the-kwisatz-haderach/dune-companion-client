import { useReducer, useCallback } from 'react'
import { FieldTypeSchema, FormSchema } from './schema/types'
import { formReducer, initFormState } from './reducer'
import { createSubmitHandler, createValueUpdater } from './helpers'
import { SubmitHandler, UseFormProps } from './types'
import { FormReducer } from './reducer/types'

const useForm = <T extends FieldTypeSchema<any>>(
  formSchema: FormSchema<T> | T,
  submitHandler: SubmitHandler<FormSchema<T>>
): UseFormProps<FormSchema<T>> => {
  const [values, dispatch] = useReducer<FormReducer<T>, T | FormSchema<T>>(
    formReducer,
    formSchema,
    initFormState
  )

  const updateValue = useCallback(createValueUpdater(dispatch, values), [
    values
  ])

  const submitForm = useCallback(createSubmitHandler(submitHandler, values), [
    submitHandler,
    values
  ])

  return { values, submitForm, updateValue }
}

export default useForm
