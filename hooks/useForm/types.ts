export type FieldType = 'text' | 'number' | 'radio' | 'checkbox'

interface FormFieldBase {
  label: string
  error: string
  disabled: boolean
}

export interface DefaultField extends FormFieldBase {
  value: string
}

export interface TextField extends FormFieldBase {
  value: string
  placeholder: string
}

export interface NumberField extends FormFieldBase {
  value: number
}

export interface CheckboxField extends FormFieldBase {
  value: boolean
}

export type FormField<T extends FieldType> = T extends 'text'
  ? TextField
  : T extends 'number'
  ? NumberField
  : T extends 'checkbox'
  ? CheckboxField
  : DefaultField

export type FieldTypeSchema<T> = { [P in keyof T]: FieldType }

export type FormSchema<T extends FieldTypeSchema<T>> = {
  [P in keyof T]: FormField<T[P]>
}

export type ValidationFunction<
  P extends FieldType,
  T extends FieldTypeSchema<T>
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

export type UpdateField<T extends FieldTypeSchema<T>> = <
  U extends FormSchema<T>,
  P extends keyof T
>(
  key: P,
  value: U[P]['value']
) => void

export type UseFormHook<T extends FieldTypeSchema<T>> = {
  formState: FormSchema<T>
  submitForm: SubmitForm
  updateField: UpdateField<T>
}
