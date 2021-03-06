import { webSocket } from 'rxjs/webSocket'
import { Subject } from 'rxjs'
import { combineEpics, ofType } from 'redux-observable'
import { switchMap, mapTo, mergeMap, tap } from 'rxjs/operators'
import { engineActions, playerActions } from 'dune'
import {
  connect,
  connected,
  disconnect,
  disconnected,
  messageSent
} from '../domains/websocket/actions'
import { RootEpic } from './types'

const webSocketSubject$ = webSocket<{ type: string; payload: any }>({
  url: global.config.WEBSOCKETHOST,
  openObserver: new Subject(),
  closeObserver: new Subject()
})

const connectEpic: RootEpic = (action$) =>
  action$.pipe(ofType(connect.type), mapTo(connected()))

const disconnectEpic: RootEpic = (action$) =>
  action$.pipe(
    ofType(disconnect.type),
    tap(() => {
      webSocketSubject$.complete()
    }),
    mapTo(disconnected())
  )

const sendMessageEpic: RootEpic = (action$, state$) =>
  action$.pipe(
    ofType(...Object.keys(playerActions)),
    mergeMap(({ type, payload }) => {
      const messagePayload = payload || {}
      webSocketSubject$.next({
        type,
        payload: {
          ...messagePayload,
          gameId: state$.value.game.id
        }
      })
      return webSocketSubject$
    }),
    mapTo(messageSent())
  )

export default combineEpics(connectEpic, disconnectEpic, sendMessageEpic)
