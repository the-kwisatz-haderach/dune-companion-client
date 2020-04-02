import { IGame } from '../../../server/engine/interfaces'

export const FETCH_CREATE_GAME = 'FETCH_CREATE_GAME'
export const SET_GAME_CONDITIONS = 'SET_GAME_CONDITIONS'
export const ADVANCE_TURN = 'ADVANCE_TURN'
export const ADVANCE_PHASE = 'ADVANCE_PHASE'

export interface SetGameConditionsAction {
  type: typeof SET_GAME_CONDITIONS
  payload: IGame
}

export interface AdvanceTurnAction {
  type: typeof ADVANCE_TURN
}

export interface AdvancePhaseAction {
  type: typeof ADVANCE_PHASE
}

export type GameActionTypes =
  | SetGameConditionsAction
  | AdvanceTurnAction
  | AdvancePhaseAction
