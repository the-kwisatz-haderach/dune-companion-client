import React, { useState, useEffect } from 'react'
import { ProgressBar, Text, ActivityIndicator } from 'react-native-paper'
import { View, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import styles, { imageStyles } from './styles'

interface Props {
  quote?: string
  progress?: number
}

const defaultQuote = `“I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.”`

const FullScreenLoadingScreen: React.FC<Props> = ({
  quote = defaultQuote,
  progress
}) => {
  const [loadingProgress, setLoadingProgress] = useState(progress)

  useEffect(() => {
    let load
    if (progress < 1) {
      load = setInterval(() => {
        setLoadingProgress((p) => p + 0.1)
      }, 250)
    }
    if (progress >= 1) {
      clearInterval(load)
      setLoadingProgress(progress)
    }
    return () => {
      clearInterval(load)
      setLoadingProgress(progress)
    }
  }, [])

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/sandworm.png')}
        style={styles.image}
        imageStyle={imageStyles.background}
      >
        <ActivityIndicator size="large" style={styles.spinner} />
        <LinearGradient
          colors={['transparent', 'transparent', 'transparent', '#0f4895']}
          style={styles.linearGradientImage}
        />
      </ImageBackground>
      <LinearGradient
        colors={['#0f4895', '#002961', '#002961', '#002961']}
        style={styles.linearGradient}
      >
        <Text style={styles.text}>{quote}</Text>
      </LinearGradient>
      {progress ? (
        <ProgressBar
          progress={loadingProgress}
          visible
          style={styles.progressBar}
        />
      ) : (
        <></>
      )}
    </View>
  )
}

export default FullScreenLoadingScreen
