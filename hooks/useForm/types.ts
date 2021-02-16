export type ValidationFunction<T> = (value: T) => string

export type FormField<T> = {
  value: T
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
}

export type FormSchema<T extends {}> = { [P in keyof T]: FormField<T[P]> }

export type ValidationSchema<T extends {}> = {
  [P in keyof T]: ValidationFunction<T[P]>
}

export type SubmitHandler<T extends {}> = (
  formValues: { [P in keyof FormSchema<T>]: T[keyof T] }
) => void

export type UseFormOptions<T extends {}> = {
  validationSchema: ValidationSchema<T>
}

export type SubmitForm = () => void

export type UpdateField<T extends {}> = <P extends keyof T>(
  key: P,
  value: T[P]
) => void

export type UseFormHook<T extends {}> = {
  formState: FormSchema<T>
  submitForm: SubmitForm
  updateField: UpdateField<T>
}
