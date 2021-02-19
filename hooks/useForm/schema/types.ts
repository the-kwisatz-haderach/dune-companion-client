export type FieldType = 'text' | 'number' | 'radio' | 'checkbox' | 'custom'

export interface FormFieldBase {
  type: FieldType
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

export type FormSchema<T extends FieldTypeSchema<any>> = {
  [P in keyof T]: FormField<T[P]>
}

export type BaseFieldCreator = (type: FieldType) => FormFieldBase

export type FieldCreatorFactory = <T extends FieldType>(
  type: T
) => (
  values?: Partial<Omit<FormField<T>, keyof FormFieldBase>>
) => FormFieldBase & Omit<FormField<T>, keyof FormFieldBase>
