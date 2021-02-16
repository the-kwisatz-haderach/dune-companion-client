import { Conditions } from 'dune/lib/models/game'
import { FormSchema } from '../../../hooks/useForm/types'

export const gameSchema: FormSchema<Conditions> = {
  advancedMode: {
    value: false,
    label: 'Advanced mode'
  },
  maxPlayers: {
    value: 6,
    label: 'Max players'
  },
  maxTurns: {
    value: 10,
    label: 'Max turns'
  }
}
