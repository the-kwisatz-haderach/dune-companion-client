import { mapValues } from 'lodash'
import { useReducer, useCallback, Reducer } from 'react'
import { FieldTypeSchema, FormSchema } from './schema/types'
import { updateFieldValue, createFormReducer, FormActions } from './transitions'
import { SubmitHandler, UseFormProps, SubmitForm, UpdateField } from './types'
import { schemaCreator } from './schema/createFormFields'
import { isFieldTypeSchema } from './typeguards'

const init = <T extends FieldTypeSchema<any>>(
  initialState: FormSchema<T> | T
): FormSchema<T> =>
  isFieldTypeSchema(initialState) ? schemaCreator(initialState)() : initialState

const useForm = <T extends FieldTypeSchema<any>>(
  formSchema: FormSchema<T> | T,
  submitHandler: SubmitHandler<FormSchema<T>>
): UseFormProps<FormSchema<T>> => {
  const [formState, dispatch] = useReducer<
    Reducer<FormSchema<T>, FormActions>,
    T | FormSchema<T>
  >(createFormReducer, formSchema, init)

  const updateField: UpdateField<T> = useCallback(
    (payload) => {
      dispatch(
        updateFieldValue({
          ...payload,
          type: formState[payload.key].type
        })
      )
    },
    [formState]
  )

  const submitForm: SubmitForm = useCallback(() => {
    submitHandler(mapValues(formState, (field) => field.value))
  }, [submitHandler, formState])

  return { formState, submitForm, updateField }
}

export default useForm
