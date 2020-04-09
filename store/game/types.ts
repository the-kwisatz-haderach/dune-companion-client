import { IGame } from '../../../server/engine/interfaces'

export interface GameState {
  id: string
  playerId: string
  currentTurn: number
  currentPhase: number
  players: Player[]
  advancedMode: boolean
  maxPlayers: number
  maxTurns: number
}

export interface Player {
  id: string
  name: string
  allies: Player[]
}

export type InitialGameConditions = Pick<
  IGame,
  'maxPlayers' | 'maxTurns' | 'advancedMode'
>

export interface GamePayload {
  gameId: string
}

export interface AddPlayerPayload extends GamePayload {
  playerName: string
}
