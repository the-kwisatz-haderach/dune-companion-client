import { IGame as GameState } from '../../../server/engine/interfaces'
import {
  SET_GAME_CONDITIONS,
  ADVANCE_PHASE,
  ADVANCE_TURN,
  GameActionTypes,
} from './types'

const initialGameState: GameState = {
  currentTurn: 0,
  currentPhase: 0,
  id: '',
  players: [],
  advancedMode: false,
  maxPlayers: 6,
  maxTurns: 10,
}

export default function gameReducer(
  state = initialGameState,
  action: GameActionTypes
) {
  switch (action.type) {
    case SET_GAME_CONDITIONS:
      return {
        ...state,
        ...action.payload,
      }
    case ADVANCE_PHASE:
      return {
        ...state,
        currentPhase: state.currentPhase + 1,
      }
    case ADVANCE_TURN:
      return {
        ...state,
        currentTurn: state.currentTurn + 1,
      }
    default:
      return state
  }
}
