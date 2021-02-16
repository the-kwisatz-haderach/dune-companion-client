import { FormSchema } from '../../../hooks/useForm/types'

export const playerSchema: FormSchema<{ name: string }> = {
  name: {
    value: '',
    label: 'Player name'
  }
}
