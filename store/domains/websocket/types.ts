import { PayloadAction } from '@reduxjs/toolkit'

export interface WebSocketState {
  connected: boolean
}

export enum WebSocketActions {
  CONNECT = 'CONNECT',
  CONNECTED = 'CONNECTED',
  DISCONNECT = 'DISCONNECT',
  DISCONNECTED = 'DISCONNECTED',
  RETRY_CONNECT = 'RETRY_CONNECT',
  SEND_MESSAGE = 'SEND_MESSAGE',
  MESSAGE_SENT = 'MESSAGE_SENT',
  RECEIVE_MESSAGE = 'RECEIVE_MESSAGE',
  MESSAGE_RECEIVED = 'MESSAGE_RECEIVED'
}

export type MessageSentAction = PayloadAction<WebSocketActions>

export type WebSocketActionTypes = MessageSentAction
