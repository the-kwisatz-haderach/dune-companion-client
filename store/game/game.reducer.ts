import { createReducer } from '@reduxjs/toolkit'
import { IGame as GameState } from '../../../server/engine/interfaces'
import { setGameConditions, advancePhase, advanceTurn } from './game.actions'

const initialGameState: GameState = {
  currentTurn: 0,
  currentPhase: 0,
  id: '',
  players: [],
  advancedMode: false,
  maxPlayers: 6,
  maxTurns: 10,
}

const gameReducer = createReducer<GameState>(initialGameState, {
  [setGameConditions.type]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [advancePhase.type]: state => ({
    ...state,
    currentPhase: state.currentPhase + 1,
  }),
  [advanceTurn.type]: state => ({
    ...state,
    currentTurn: state.currentTurn + 1,
  }),
})

export default gameReducer
