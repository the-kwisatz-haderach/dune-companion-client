import React from 'react'
import { StyleSheet, ImageBackground } from 'react-native'
import { Headline } from 'react-native-paper'

interface Props {
  imgSrc: string
  title: string
  subtitle?: string
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
  },
})

const HeroBanner: React.FC<Props> = ({ imgSrc, title, subtitle }) => {
  return (
    <ImageBackground source={{ uri: imgSrc }} style={styles.image}>
      <Headline style={styles.title}>{title}</Headline>
    </ImageBackground>
  )
}

export default HeroBanner
