import { createAction } from '@reduxjs/toolkit'
import { GameState, Player } from './state'

export enum GameActions {
  CREATE_GAME = 'CREATE_GAME',
  CREATE_PLAYER = 'CREATE_PLAYER',
  LEAVE_GAME = 'LEAVE_GAME',
  ADVANCE_TURN = 'ADVANCE_TURN',
  ADVANCE_PHASE = 'ADVANCE_PHASE',
  SELECT_FACTION = 'SELECT_FACTION'
}

export const updateGame = createAction<GameState>('UPDATE_GAME')
export const createGame = createAction<GameSettings>(GameActions.CREATE_GAME)
export const createPlayer = createAction<{ playerName: Player['name'] }>(
  GameActions.CREATE_PLAYER
)
export const leaveGame = createAction<Player['id']>(GameActions.LEAVE_GAME)
export const advanceTurn = createAction(GameActions.ADVANCE_TURN)
export const advancePhase = createAction(GameActions.ADVANCE_PHASE)
export const selectFaction = createAction<{
  playerId: Player['id']
  factionId: string
}>(GameActions.SELECT_FACTION)

// Type definitions
export interface GameSettings {
  advancedMode: boolean
  maxPlayers: number
  maxTurns: number
}

export type SelectFactionAction = ReturnType<typeof selectFaction>
export type UpdateGameAction = ReturnType<typeof updateGame>
export type CreateGameAction = ReturnType<typeof createGame>
export type CreatePlayerAction = ReturnType<typeof createPlayer>
export type LeaveGameAction = ReturnType<typeof leaveGame>
export type AdvanceTurnAction = ReturnType<typeof advanceTurn>
export type AdvancePhaseAction = ReturnType<typeof advancePhase>

export type GameActionTypes =
  | SelectFactionAction
  | UpdateGameAction
  | CreateGameAction
  | CreatePlayerAction
  | LeaveGameAction
  | AdvanceTurnAction
  | AdvancePhaseAction

export default [
  createGame.type,
  createPlayer.type,
  leaveGame.type,
  advanceTurn.type,
  advancePhase.type,
  selectFaction.type
]
