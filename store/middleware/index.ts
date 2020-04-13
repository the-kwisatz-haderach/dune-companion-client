import { applyMiddleware, StoreEnhancer } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger'

interface InitializeMiddleware {
  (rootEpic: any): {
    middleware: StoreEnhancer
    initEpicMiddleware: () => void
  }
}

const initializeMiddleware: InitializeMiddleware = (rootEpic) => {
  const epicMiddleware = createEpicMiddleware()
  return {
    middleware: applyMiddleware(epicMiddleware),
    initEpicMiddleware: (): void => {
      epicMiddleware.run(rootEpic)
    }
  }
}

export default initializeMiddleware
