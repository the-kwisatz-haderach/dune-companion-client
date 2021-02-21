export type FieldType = 'text' | 'number' | 'checkbox' | 'custom'

export interface FormFieldBase<T extends FieldType> {
  type: T
  label: string
  error: string
  disabled: boolean
}

export interface CustomField extends FormFieldBase<'custom'> {
  value: string
}

export interface TextField extends FormFieldBase<'text'> {
  value: string
  placeholder: string
}

export interface NumberField extends FormFieldBase<'number'> {
  value: number
}

export interface CheckboxField extends FormFieldBase<'checkbox'> {
  value: boolean
}

export type FormField<T extends FieldType> = T extends 'text'
  ? TextField
  : T extends 'number'
  ? NumberField
  : T extends 'checkbox'
  ? CheckboxField
  : CustomField

export type FieldTypeSchema<T> = {
  [K in keyof T]: FieldType
}

export type FormSchema<T extends FieldTypeSchema<T>> = {
  [P in keyof T]: FormFieldBase<T[P]> & DefaultFormFields<T[P]>[T[P]]
}

export type BaseFieldCreator = <T extends FieldType>(
  type: T
) => FormFieldBase<T>

export type FieldCreator = <T extends FieldType>(
  type: T
) => DefaultFormFields<FieldType>[T] & FormFieldBase<T>

export type DefaultFormFields<T extends FieldType = FieldType> = {
  [K in T]: Omit<FormField<K>, keyof FormFieldBase<K>>
}

export type Defaults<T extends string, U, V> = {
  [K in T]: Omit<U, keyof V>
}
