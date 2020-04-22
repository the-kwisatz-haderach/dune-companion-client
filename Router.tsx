import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { NativeRouter, Route, Switch, BackButton } from 'react-router-native'
import Home from './pages/Home'
import Profile from './pages/Profile'
import CreateProfile from './pages/CreateProfile'
import CreateGame from './pages/CreateGame'
import GameLobby from './pages/GameLobby'
import { RootState } from './store/domains'

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
})

export default function Router(): React.ReactElement {
  const { connected } = useSelector(({ websocket }: RootState) => websocket)
  return (
    <NativeRouter>
      <BackButton>
        <View style={styles.container}>
          <Route exact path="/" component={Home} />
          <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route path="/profile/new" component={CreateProfile} />
          </Switch>
          <Switch>
            <Route exact path="/game/create" component={CreateGame} />
            {connected && <Route path="/game/:id" component={GameLobby} />}
            <Route path="/game" component={Profile} />
          </Switch>
        </View>
      </BackButton>
    </NativeRouter>
  )
}
