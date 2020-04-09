import { ofType, Epic } from 'redux-observable'
import { mergeMap, map } from 'rxjs/operators'
import { serverCreateGame, setGameConditions } from '../game.actions'
import { gameSocket } from './helpers'

gameSocket.connect()

export const createGameEpic: Epic<any> = (action$) =>
  action$.pipe(
    ofType(serverCreateGame.type),
    mergeMap(({ payload }) => {
      return gameSocket.createGame(payload)
    }),
    map(({ payload }) => setGameConditions(payload))
  )
