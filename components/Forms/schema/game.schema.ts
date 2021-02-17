import { FormSchema } from '../../../hooks/useForm/types'

export type SetConditionsSchema = {
  advancedMode: 'checkbox'
  maxPlayers: 'number'
  maxTurns: 'number'
}

export const gameSchema: FormSchema<SetConditionsSchema> = {
  advancedMode: {
    value: false,
    label: 'Advanced mode',
    error: '',
    disabled: false
  },
  maxPlayers: {
    value: 6,
    label: 'Max players',
    error: '',
    disabled: false
  },
  maxTurns: {
    value: 10,
    label: 'Max turns',
    error: '',
    disabled: false
  }
}
