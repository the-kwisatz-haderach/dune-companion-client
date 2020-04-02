import { ofType, Epic } from 'redux-observable'
import { ajax } from 'rxjs/ajax'
import { mergeMap, map, catchError, switchMap } from 'rxjs/operators'
import { FETCH_CREATE_GAME, SET_GAME_CONDITIONS } from '../slices/game/types'
import { of } from 'rxjs'

// export const fetchCreateGame = () => {

// }

export const createGameEpic: Epic<any> = action$ =>
  action$.pipe(
    ofType(FETCH_CREATE_GAME),
    switchMap(action => {
      return fetch('http://localhost:8000/api/games', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
      })
        .then(res => {
          console.log('response ', res)
          return of(res)
        })
        .catch(err => {
          console.error(err)
        })
    })
    // map(conditions => ({ type: SET_GAME_CONDITIONS, payload: conditions }))
  )
