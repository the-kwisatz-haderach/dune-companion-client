import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { GameActionTypes } from './types'
import { IGame as GameState } from '../../../../server/engine/interfaces'

const gameSlice: Slice<GameState> = createSlice({
  name: 'game',
  initialState: {} as GameState,
  reducers: {
    setGameConditions(state, action: PayloadAction<GameActionTypes>) {
      return {
        ...state,
        ...action.payload,
      }
    },
    advanceTurn(state, action: PayloadAction<GameActionTypes>) {
      return {
        ...state,
        currentTurn: state.currentTurn + 1,
      }
    },
    advancePhase(state, action: PayloadAction<GameActionTypes>) {
      return {
        ...state,
        currentPhase: state.currentPhase + 1,
      }
    },
  },
})

export const {
  advanceTurn,
  advancePhase,
  setGameConditions,
} = gameSlice.actions

export default gameSlice.reducer
