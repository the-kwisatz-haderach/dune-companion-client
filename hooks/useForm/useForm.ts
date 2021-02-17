import { mapValues } from 'lodash'
import { useReducer, useCallback, Reducer } from 'react'
import formReducer, { FormActions, updateValue } from './formReducer'
import {
  FormSchema,
  SubmitHandler,
  UseFormHook,
  FieldTypeSchema,
  SubmitForm,
  UpdateField
} from './types'

const useForm = <T extends FieldTypeSchema<T>>(
  formSchema: FormSchema<T>,
  submitHandler: SubmitHandler<T>
): UseFormHook<T> => {
  const [formState, dispatch] = useReducer<Reducer<FormSchema<T>, FormActions>>(
    formReducer,
    formSchema
  )

  const updateField: UpdateField<T> = useCallback(
    (key, value) => {
      dispatch(updateValue({ key, value }))
    },
    [dispatch]
  )

  const submitForm: SubmitForm = useCallback(() => {
    submitHandler(mapValues(formState, (field) => field.value))
  }, [submitHandler, formState])

  return { formState, submitForm, updateField }
}

export default useForm
