import { mapValues } from 'lodash'
import { useReducer, useCallback, useRef } from 'react'
import { FieldTypeSchema, FormSchema } from './schema/types'
import { updateFieldValue, createFormReducer } from './transitions'
import { SubmitHandler, UseFormHook, SubmitForm, UpdateField } from './types'

const useForm = <T extends FieldTypeSchema<T>>(
  formSchema: FormSchema<T>,
  submitHandler: SubmitHandler<T>
): UseFormHook<T> => {
  const [formState, dispatch] = useReducer(
    createFormReducer(formSchema),
    formSchema
  )
  const initialFormState = useRef(formSchema)

  const updateField: UpdateField<T> = useCallback(
    (payload) => {
      dispatch(
        updateFieldValue({
          ...payload,
          type: formSchema[payload.key].type
        })
      )
    },
    [formSchema]
  )

  const submitForm: SubmitForm = useCallback(() => {
    submitHandler(mapValues(formState, (field) => field.value))
  }, [submitHandler, formState])

  return { formState, submitForm, updateField }
}

export default useForm
