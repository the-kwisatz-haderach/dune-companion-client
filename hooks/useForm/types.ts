import {
  FieldType,
  FieldTypeSchema,
  FormField,
  FormSchema
} from './schema/types'

export type DeepPartial<T extends {}> = {
  [K in keyof T]?: T[K] extends {} ? DeepPartial<T[K]> : T[K]
}

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

export type SubmitHandler<T extends FormSchema<any>> = (
  formValues: { [P in keyof T]: T[P]['value'] }
) => void

export type UseFormOptions<T extends FieldTypeSchema<T>> = {
  validationSchema: ValidationSchema<T>
}

export type SubmitForm = () => void

export type UpdateField<T extends FieldTypeSchema<any>> = <P extends keyof T>(
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

export type UseFormProps<T extends FormSchema<any>> = {
  formState: T
  submitForm: SubmitForm
  updateField: UpdateField<{ [K in keyof T]: T[K]['type'] }>
}
