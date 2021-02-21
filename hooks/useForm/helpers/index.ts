import { mapValues } from 'lodash'
import {
  FieldTypeSchema,
  FormActionDispatcher,
  FormSchema
} from '../schema/types'
import { updateFieldValue } from '../transitions'
import { FormSubmitHandler, SubmitHandler, ValueUpdater } from '../types'

export const createSubmitHandler = <T extends FieldTypeSchema<any>>(
  submitHandler: SubmitHandler<FormSchema<T>>,
  values: FormSchema<T>
): FormSubmitHandler => (): void =>
  submitHandler(mapValues(values, (field) => field.value))

export const createValueUpdater = <T extends FieldTypeSchema<any>>(
  dispatch: FormActionDispatcher,
  values: FormSchema<T>
): ValueUpdater<T> => (payload): void => {
  dispatch(
    updateFieldValue({
      ...payload,
      type: values[payload.key].type
    })
  )
}
