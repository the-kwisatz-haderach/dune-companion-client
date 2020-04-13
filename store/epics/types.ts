import { Epic } from 'redux-observable'
import { RootAction, RootState } from '../domains'

export type RootEpic = Epic<RootAction, RootAction, RootState, any>
