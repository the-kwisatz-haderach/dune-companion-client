import { createStore, Store } from 'redux'
import initializeMiddleware from './middleware'
import rootReducer, { RootState } from './domains'
import rootEpic from './epics'

export default function configureStore(): Store<RootState> {
  const { middleware, initEpicMiddleware } = initializeMiddleware(rootEpic)
  const store = createStore(rootReducer, middleware)
  initEpicMiddleware()
  return store
}
