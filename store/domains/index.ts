import { combineReducers, Reducer } from 'redux'
import gameUpdater, { Game, playerActions } from 'dune'
import websocketReducer, {
  WebSocketState,
  WebSocketActionTypes
} from './websocket'

export type RootAction =
  | ReturnType<typeof playerActions[keyof typeof playerActions]>
  | WebSocketActionTypes

export interface RootState {
  game: Game
  websocket: WebSocketState
}

const rootReducer: Reducer<RootState, RootAction> = combineReducers({
  game: gameUpdater,
  websocket: websocketReducer
})

export default rootReducer
