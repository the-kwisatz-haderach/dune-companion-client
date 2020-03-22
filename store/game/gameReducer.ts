import { GameState, GameActionTypes, INCREASE_TURN } from './types'

export const initialGameState: GameState = {
  currentTurn: 0,
  maxTurns: 10,
  factions: [],
  currentPhase: 0,
}

export const gameReducer = (
  state = initialGameState,
  action: GameActionTypes
): GameState => {
  switch (action.type) {
    case INCREASE_TURN:
      return {
        ...state,
        currentTurn: state.currentTurn + 1,
      }
    default:
      return state
  }
}
