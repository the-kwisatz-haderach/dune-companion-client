import { createStore } from 'redux'
import { IGame as GameState } from '../../server/engine/interfaces'
import initializeMiddleware from './middleware'
import rootReducer from './game'
import { combineEpics } from 'redux-observable'
import { catchError } from 'rxjs/operators'
import gameEpics from './game/epics'

const epics = [...gameEpics]

const rootEpic = (action$, store$, dependencies) =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error)
      return source
    })
  )

export interface ApplicationState {
  game: GameState
}

export default function configureStore() {
  const { middleware, initEpicmiddleware } = initializeMiddleware(rootEpic)
  const store = createStore(rootReducer, middleware)
  initEpicmiddleware()
  return store
}
