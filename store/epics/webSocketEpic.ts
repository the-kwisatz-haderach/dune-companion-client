import { webSocket } from 'rxjs/webSocket'
import { Subject } from 'rxjs'
import { combineEpics, ofType } from 'redux-observable'
import { switchMap, map, mapTo, mergeMap } from 'rxjs/operators'
import gameActions, { updateGame } from '../domains/game/actions'
import {
  connect,
  disconnect,
  disconnected,
  messageSent
} from '../domains/websocket/actions'
import { RootEpic } from './types'

const socket = {
  webSocketSubject$: webSocket<{ type: string; payload: any }>({
    url: global.config.WEBSOCKETHOST,
    openObserver: new Subject(),
    closeObserver: new Subject()
  })
}

const connectEpic: RootEpic = (action$) =>
  action$.pipe(
    ofType(connect.type),
    switchMap(() =>
      socket.webSocketSubject$.pipe(
        map((action) => {
          switch (action.type) {
            default:
              return updateGame(action.payload)
          }
        })
      )
    )
  )

const disconnectEpic: RootEpic = (action$) =>
  action$.pipe(
    ofType(disconnect.type),
    switchMap(() => {
      socket.webSocketSubject$.complete()
      return socket.webSocketSubject$
    }),
    mapTo(disconnected())
  )

const sendMessageEpic: RootEpic = (action$, state$) =>
  action$.pipe(
    ofType(...gameActions),
    mergeMap(({ type, payload }) => {
      const messagePayload = payload || {}
      socket.webSocketSubject$.next({
        type,
        payload: {
          ...messagePayload,
          id: state$.value.game.id
        }
      })
      return socket.webSocketSubject$
    }),
    mapTo(messageSent())
  )

export default combineEpics(connectEpic, disconnectEpic, sendMessageEpic)
