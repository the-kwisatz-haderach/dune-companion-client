import { combineReducers, Reducer } from 'redux'
import gameReducer, { GameState, GameActionTypes } from './game'
import websocketReducer, {
  WebSocketState,
  WebSocketActionTypes
} from './websocket'

export type RootAction = GameActionTypes | WebSocketActionTypes

export interface RootState {
  game: GameState
  websocket: WebSocketState
}

const rootReducer: Reducer<RootState, RootAction> = combineReducers({
  game: gameReducer,
  websocket: websocketReducer
})

export default rootReducer
