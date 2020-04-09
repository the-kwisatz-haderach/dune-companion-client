import { createReducer } from '@reduxjs/toolkit'
import {
  setGameConditions,
  advancePhase,
  advanceTurn,
  addPlayer
} from './game.actions'
import { GameState } from './types'

const initialGameState: GameState = {
  id: '',
  playerId: '',
  currentTurn: 0,
  currentPhase: 0,
  players: [],
  advancedMode: false,
  maxPlayers: 6,
  maxTurns: 10
}

const gameReducer = createReducer<GameState>(initialGameState, {
  [setGameConditions.type]: (state, action) => ({
    ...state,
    ...action.payload
  }),
  [addPlayer.type]: (state, action) => {
    console.log(action)
    console.log(state.players)
    state.players.push(action.payload)
    state.playerId = action.payload.id
  },
  [advancePhase.type]: (state) => ({
    ...state,
    currentPhase: state.currentPhase + 1
  }),
  [advanceTurn.type]: (state) => ({
    ...state,
    currentTurn: state.currentTurn + 1
  })
})

export default gameReducer
