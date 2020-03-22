export interface GameState {
  currentTurn: number
  maxTurns: number
  factions: number[]
  currentPhase: number
}

export const INCREASE_TURN = 'INCREASE_TURN'

interface IncreaseTurnAction {
  type: typeof INCREASE_TURN
}

export type GameActionTypes = IncreaseTurnAction
