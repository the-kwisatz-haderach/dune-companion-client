import { createAction } from '@reduxjs/toolkit'
import { IGame, IPlayer } from '../../../server/engine/interfaces'
import { InitialGameConditions, AddPlayerPayload } from './types'

// Async actions via socket connection
export const serverCreateGame = createAction<InitialGameConditions>(
  'create_game'
)
export const serverAddPlayer = createAction<AddPlayerPayload>('add_player')

// Local actions after response from server
export const setGameConditions = createAction<IGame>('game/set_game_conditions')
export const advanceTurn = createAction('game/advance_turn')
export const advancePhase = createAction('game/advance_phase')
export const addPlayer = createAction<IPlayer>('game/add_player')
