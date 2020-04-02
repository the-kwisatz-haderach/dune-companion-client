import { createStore } from 'redux'
import { IGame as GameState } from '../../server/engine/interfaces'
import initializeMiddleware from './middleware'
import rootReducer from './slices'
import rootEpic from './epics'

export interface ApplicationState {
  game: GameState
}

export default function configureStore() {
  const { middleware, initEpicmiddleware } = initializeMiddleware(rootEpic)
  const store = createStore(rootReducer, middleware)
  initEpicmiddleware()
  return store
}
