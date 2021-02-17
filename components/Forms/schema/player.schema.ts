import { FormSchema } from '../../../hooks/useForm/types'

export const playerSchema: FormSchema<{ name: 'text' }> = {
  name: {
    value: '',
    label: 'Player name',
    placeholder: '',
    error: '',
    disabled: false
  }
}
