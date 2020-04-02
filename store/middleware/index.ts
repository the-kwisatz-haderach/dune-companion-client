import { applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger'

const initializeMiddleware = rootEpic => {
  const epicMiddleware = createEpicMiddleware()
  return {
    middleware: applyMiddleware(epicMiddleware),
    initEpicmiddleware: () => {
      epicMiddleware.run(rootEpic)
    },
  }
}

export default initializeMiddleware
