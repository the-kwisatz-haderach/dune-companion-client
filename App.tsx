import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import Router from './Router'
import store from './store'
import { theme } from './theme'

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <Router />
      </PaperProvider>
    </StoreProvider>
  )
}
