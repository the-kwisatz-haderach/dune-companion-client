import { createReducer } from '@reduxjs/toolkit'
import {
  connect,
  disconnect,
  disconnected,
  messageSent,
  receiveMessage
} from './actions'
import { WebSocketState } from './types'

const initialWebSocketState: WebSocketState = {
  connected: false
}

const webSocketReducer = createReducer<WebSocketState>(initialWebSocketState, {
  [connect.type]: (state) => {
    state.connected = true
  },
  [disconnect.type]: (state) => {
    state.connected = false
  },
  [disconnected.type]: (state) => {
    return state
  },
  [messageSent.type]: (state) => {
    return state
  },
  [receiveMessage.type]: (state, action) => {
    return state
  }
})

export default webSocketReducer
