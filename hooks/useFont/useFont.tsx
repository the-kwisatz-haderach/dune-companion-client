import { useState, useEffect } from 'react'
import * as Font from 'expo-font'

const useFont = (name: string, asset: Font.FontSource) => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    let fontTimer
    if (!fontLoaded) {
      ;(async function loadFont() {
        await Font.loadAsync({
          [name]: asset,
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

  return fontLoaded
}

export default useFont
