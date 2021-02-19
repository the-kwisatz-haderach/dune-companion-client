import {
  FieldType,
  FieldTypeSchema,
  FormField,
  FormSchema
} from './schema/types'

export type ValidationFunction<
  P extends FieldType,
  T extends FieldTypeSchema<any>
> = (
  value: FormField<P>['value'],
  states: { initialState: FormSchema<T>; currentState: FormSchema<T> }
) => string

export type ValidationSchema<T extends FieldTypeSchema<T>> = {
  [P in keyof T]: ValidationFunction<T[P], T>
}

export type SubmitHandler<T extends FieldTypeSchema<T>> = (
  formValues: { [P in keyof T]: FormField<T[P]>['value'] }
) => void

export type UseFormOptions<T extends FieldTypeSchema<T>> = {
  validationSchema: ValidationSchema<T>
}

export type SubmitForm = () => void

export type UpdateField<T extends FieldTypeSchema<T>> = <P extends keyof T>(
  payload: T[P] extends 'checkbox'
    ? {
        key: P
        value?: FormField<T[P]>['value']
      }
    : {
        key: P
        value: FormField<T[P]>['value']
      }
) => void

export type UseFormHook<T extends FieldTypeSchema<T>> = {
  formState: FormSchema<T>
  submitForm: SubmitForm
  updateField: UpdateField<T>
}
