import { configureStore } from '@reduxjs/toolkit'
import { gameReducer } from './game/gameReducer'
import { GameState } from './game/types'
import { FactionsState } from './factions/types'

export interface ApplicationState {
  game: GameState
  factions: FactionsState
}

const rootReducer = {
  game: gameReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})
