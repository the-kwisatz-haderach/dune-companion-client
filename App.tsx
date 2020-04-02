import React, { useEffect, useState } from 'react'
import {
  Provider as PaperProvider,
  ActivityIndicator,
} from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import * as Font from 'expo-font'
import Router from './Router'
import configureStore from './store'
import { theme } from './theme'

const store = configureStore()

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    ;(async function() {
      try {
        const res = await fetch('http://192.168.0.27:8000/api/users')
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  useEffect(() => {
    let fontTimer
    if (!fontLoaded) {
      ;(async function loadFont() {
        await Font.loadAsync({
          'OrthodoxHerbertarian-Normal': require('./assets/fonts/OrthodoxHerbertarian-Normal.ttf'),
        })
        fontTimer = setTimeout(() => {
          setFontLoaded(true)
        }, 2500)
      })()
    }
    return () => {
      clearTimeout(fontTimer)
    }
  }, [])

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        {fontLoaded ? <Router /> : <ActivityIndicator />}
      </PaperProvider>
    </StoreProvider>
  )
}
