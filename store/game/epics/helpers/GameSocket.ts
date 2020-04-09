import { webSocket } from 'rxjs/webSocket'
import { serverCreateGame, serverAddPlayer } from '../../game.actions'
import { InitialGameConditions, AddPlayerPayload } from '../../types'

interface GameMessage {
  type: string
  payload: any
}

class GameSocket {
  private subject = webSocket<GameMessage>(global.config.WEBSOCKETHOST)

  connect() {
    this.subject.subscribe(
      (msg: GameMessage) => ({ type: msg.type, payload: msg.payload }),
      err => console.error(err),
      () => console.log('Connection to socket closed')
    )
    console.log('Connection to socket opened')
  }

  disconnect() {
    if (this.subject.hasError) {
      this.subject.error('Connection closed due to client side error')
    } else {
      this.subject.complete()
    }
  }

  createGame(payload: InitialGameConditions) {
    this.subject.next(serverCreateGame(payload))
    return this.subject
  }

  addPlayer(payload: AddPlayerPayload) {
    this.subject.next(serverAddPlayer(payload))
    return this.subject
  }
}

export default new GameSocket()
