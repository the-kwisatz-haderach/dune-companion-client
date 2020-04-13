import { createAction } from '@reduxjs/toolkit'
import { WebSocketActions } from './types'

export const connect = createAction(WebSocketActions.CONNECT)
export const connected = createAction(WebSocketActions.CONNECTED)
export const disconnect = createAction(WebSocketActions.DISCONNECT)
export const disconnected = createAction(WebSocketActions.DISCONNECTED)
export const receiveMessage = createAction<any>(
  WebSocketActions.RECEIVE_MESSAGE
)
export const messageSent = createAction(WebSocketActions.MESSAGE_SENT)
