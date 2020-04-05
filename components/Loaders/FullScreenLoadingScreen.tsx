import React, { useState, useEffect } from 'react'
import { ProgressBar, Text, ActivityIndicator } from 'react-native-paper'
import { StyleSheet, View, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

interface Props {
  quote?: string
  progress?: number
}

const src =
  'https://pro2-bar-s3-cdn-cf6.myportfolio.com/1106a126cb8c279c74f2a01a8c318f38/06480e1b798bc8cac4345f818f4d13573cf974faaa59f1bd15a3c672c451224167cdd3ad880ad290_rw_1920.jpg?h=68695a1f014c33e1c37b4fa4f6f4a89e'
const defaultQuote = `“I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.”`

const FullScreenLoadingScreen: React.FC<Props> = ({
  quote = defaultQuote,
  progress = 0,
}) => {
  const [loadingProgress, setLoadingProgress] = useState(progress)

  useEffect(() => {
    let load
    if (progress < 1) {
      load = setInterval(() => {
        setLoadingProgress(p => p + 0.1)
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
        source={{ uri: src }}
        style={styles.image}
        imageStyle={imageStyles.background}
      >
        <ActivityIndicator size="large" style={styles.spinner} />
        <LinearGradient
          colors={['transparent', '#3b5998', '#3b5998', '#192f6a']}
          style={styles.linearGradient}
        >
          <Text style={styles.text}>{quote}</Text>
        </LinearGradient>
      </ImageBackground>
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

const imageStyles = StyleSheet.create({ background: { resizeMode: 'cover' } })

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 16,
    padding: 40,
    lineHeight: 24,
    letterSpacing: 1.8,
    color: 'white',
  },
  spinner: {
    position: 'absolute',
    top: '40%',
  },
  progressBar: {
    width: '100%',
    height: 10,
  },
  linearGradient: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '50%',
  },
})
