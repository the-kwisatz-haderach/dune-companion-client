import React from 'react'
import { View } from 'react-native'
import { NativeRouter, Route, Switch, BackButton } from 'react-router-native'
import Home from './pages/Home'
import Profile from './pages/Profile'
import CreateProfile from './pages/CreateProfile'
import CreateGame from './pages/CreateGame'
import GameLobby from './pages/GameLobby'

export default function Router() {
  return (
    <NativeRouter>
      <BackButton>
        <View>
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route path="/profile/new" component={CreateProfile} />
          </Switch>
          <Switch>
            <Route exact path="/game" component={Profile} />
            <Route exact path="/game/create" component={CreateGame} />
            <Route path="/game/:id" component={GameLobby} />
          </Switch>
        </View>
      </BackButton>
    </NativeRouter>
  )
}
