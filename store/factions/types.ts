interface Faction {
  name: string
}

export interface FactionsState {
  [key: number]: Faction
}
