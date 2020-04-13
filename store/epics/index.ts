import {
  combineEpics,
  StateObservable,
  ActionsObservable
} from 'redux-observable'
import { catchError } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { RootAction, RootState } from '../domains'
import webSocketEpic from './webSocketEpic'

const epics = [webSocketEpic]

const rootEpic = (
  action$: ActionsObservable<RootAction>,
  store$: StateObservable<RootState>,
  dependencies: any
): Observable<any> =>
  combineEpics(...epics)(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.log(error)
      return source
    })
  )

export default rootEpic
