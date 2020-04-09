import { ofType, Epic } from 'redux-observable'
import { mergeMap, map } from 'rxjs/operators'
import { serverAddPlayer, addPlayer } from '../game.actions'
import { gameSocket } from './helpers'

export const addPlayerEpic: Epic<any> = (action$) =>
  action$.pipe(
    ofType(serverAddPlayer.type),
    mergeMap(({ payload }) => gameSocket.addPlayer(payload)),
    map(({ payload }) => {
      console.log('adding player')
      return addPlayer(payload)
    })
  )
