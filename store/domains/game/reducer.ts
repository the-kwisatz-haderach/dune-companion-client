import { createReducer } from '@reduxjs/toolkit'
import { updateGame } from './actions'
import { disconnect } from '../websocket/actions'
import initialGameState, { GameState } from './state'

const gameReducer = createReducer<GameState>(initialGameState, {
  [updateGame.type]: (state, action) => {
    state = action.payload
    return state
  },
  [disconnect.type]: (state) => {
    state = initialGameState
    return state
  }
})

export default gameReducer
