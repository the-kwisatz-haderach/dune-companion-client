import { createAction } from '@reduxjs/toolkit'
import { IGame } from '../../../server/engine/interfaces'
import { InitialGameConditions } from './types'

export const fetchCreateGame = createAction<InitialGameConditions>(
  'game/fetch_create_game'
)
export const setGameConditions = createAction<IGame>('game/set_game_conditions')
export const advanceTurn = createAction('game/advance_turn')
export const advancePhase = createAction('game/advance_phase')
