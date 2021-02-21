import { useReducer, useCallback, Reducer } from 'react'
import { FieldTypeSchema, FormSchema } from './schema/types'
import { createFormReducer, FormActions } from './transitions'
import initFormReducer from './transitions/initFormReducer'
import { createSubmitHandler, createValueUpdater } from './helpers'
import { SubmitHandler, UseFormProps } from './types'

const useForm = <T extends FieldTypeSchema<any>>(
  formSchema: FormSchema<T> | T,
  submitHandler: SubmitHandler<FormSchema<T>>
): UseFormProps<FormSchema<T>> => {
  const [values, dispatch] = useReducer<
    Reducer<FormSchema<T>, FormActions>,
    T | FormSchema<T>
  >(createFormReducer, formSchema, initFormReducer)

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
