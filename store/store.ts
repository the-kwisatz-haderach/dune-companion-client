import { createStore, Store } from 'redux'
import initializeMiddleware from './middleware'
import rootReducer, { RootState, RootAction } from './domains'
import rootEpic from './epics'

export default function configureStore(): Store<RootState, RootAction> {
  const { middleware, initEpicMiddleware } = initializeMiddleware(rootEpic)
  const store = createStore(rootReducer, middleware)
  initEpicMiddleware()
  return store
}
