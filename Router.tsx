import React from 'react'
import { View } from 'react-native'
import { NativeRouter, Route, Switch } from 'react-router-native'
import Home from './pages/Home'
import Profile from './pages/Profile'

export default function Router() {
  return (
    <NativeRouter>
      <View>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </View>
    </NativeRouter>
  )
}
