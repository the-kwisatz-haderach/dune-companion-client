interface ValidationFunction {
  (fieldKey: keyof FormSchema): string | void
}

interface Schema<T> {
  [fieldKey: string]: T
}

export interface FormField {
  value: any
  placeholder?: string
  label?: string
  error?: string
}

export type FormSchema = Schema<Omit<FormField, 'error'>>
type ValidationSchema = Schema<ValidationFunction>

interface SubmitHandler {
  (formValues: Schema<FormField['value']>): void
}

interface UseFormOptions {
  validationSchema: ValidationSchema
}

export interface OnSubmit {
  (): void
}

export interface OnChange {
  (fieldKey: keyof FormSchema, value): void
}

export interface UseFormHook {
  (
    formSchema: FormSchema,
    submitHandler: SubmitHandler,
    options?: UseFormOptions
  ): [FormSchema, OnSubmit, OnChange]
}
