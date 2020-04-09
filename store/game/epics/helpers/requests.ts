import { of } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map, catchError } from 'rxjs/operators'

export const postGameById = (
  id: string,
  payload: Record<string, any>,
  resource?: string
) =>
  ajax({
    url: `${global.config.HTTPHOST}/api/games/${id}/${resource}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).pipe(
    map(({ response }) => response),
    catchError(err => {
      console.error(err)
      return of(err)
    })
  )
