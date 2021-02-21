import { schemaCreator } from '../../../hooks/useForm'

export const gameSchema = schemaCreator({
  advancedMode: 'checkbox',
  maxPlayers: 'number',
  maxTurns: 'number'
})({ maxPlayers: 6, maxTurns: 10 })
