import { FormSchema, OnChange, OnSubmit } from '../../hooks/useForm/types'

export interface FormComponentProps {
  formState: FormSchema
  onSubmit: OnSubmit
  onChange: OnChange
}
