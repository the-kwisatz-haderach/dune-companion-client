export interface GameState {
  id: string
  currentTurn: number
  currentPhase: number
  players: Player[]
  advancedMode: boolean
  maxPlayers: number
  maxTurns: number
  factions: Faction[]
}

export interface Faction {
  name: string
  shorthand: string
  description: string
  itemsAllowed: number
  freeRevivals: number
  startingSpice: number
  startingItems: number
  startingCity: number
  strategy: string
}

export interface Player {
  id: string
  name: string
  allies: Player[]
}

const initialGameState: GameState = {
  id: '',
  currentTurn: 0,
  currentPhase: 0,
  players: [],
  advancedMode: false,
  maxPlayers: 6,
  maxTurns: 10,
  factions: []
}

export default initialGameState
