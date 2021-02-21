import { schemaCreator } from '../../../hooks/useForm/schema/createFormFields'

export const gameSchema = schemaCreator({
  advancedMode: 'checkbox',
  maxPlayers: 'number',
  maxTurns: 'number'
})()

// export const gameSchema = {
//   advancedMode: {
//     value: false,
//     label: 'Advanced mode',
//     error: '',
//     disabled: false
//   },
//   maxPlayers: {
//     value: 6,
//     label: 'Max players',
//     error: '',
//     disabled: false
//   },
//   maxTurns: {
//     value: 10,
//     label: 'Max turns',
//     error: '',
//     disabled: false
//   }
// }
