import React from 'react'
import config from './config'
import {
  Provider as PaperProvider,
  ActivityIndicator,
} from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import Router from './Router'
import configureStore from './store'
import { theme } from './theme'
import useFont from './hooks/useFont'
import FullScreenLoadingScreen from './components/Loaders/FullScreenLoadingScreen'

const store = configureStore()
config()

export default function App() {
  const fontLoaded = useFont(
    'OrthodoxHerbertarian-Normal',
    require('./assets/fonts/OrthodoxHerbertarian-Normal.ttf')
  )
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        {fontLoaded ? <Router /> : <FullScreenLoadingScreen />}
      </PaperProvider>
    </StoreProvider>
  )
}
