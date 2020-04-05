import { ofType, Epic } from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { fetchCreateGame, setGameConditions } from '../game.actions'
import { of } from 'rxjs'

export const createGame: Epic<any> = action$ =>
  action$.pipe(
    ofType(fetchCreateGame.type),
    mergeMap(({ payload }) =>
      ajax({
        url: `${globalThis.config.HOST}/api/games`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }).pipe(
        map(({ response }) => ({ ...payload, id: response })),
        catchError(err => {
          console.log(err)
          return of(err)
        })
      )
    ),
    map(conditions => setGameConditions(conditions))
  )
