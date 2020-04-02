import { ofType, Epic } from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import { mergeMap, map, catchError } from 'rxjs/operators'
import { FETCH_CREATE_GAME, SET_GAME_CONDITIONS } from '../reducers/types'
import { of } from 'rxjs'

export const createGameEpic: Epic<any> = action$ =>
  action$.pipe(
    ofType(FETCH_CREATE_GAME),
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
    map(conditions => ({ type: SET_GAME_CONDITIONS, payload: conditions }))
  )
