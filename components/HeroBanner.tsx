import React from 'react'
import { StyleSheet, ImageBackground, View } from 'react-native'
import { Headline, Subheading, Avatar } from 'react-native-paper'

interface Props {
  imgSrc: string
  title: string
  subtitle?: string
  blurred?: boolean
  withOverlay?: boolean
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  withDarkOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  textContainer: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontFamily: 'OrthodoxHerbertarian-Normal',
    fontSize: 32,
    textAlign: 'center',
  },
  icon: {
    marginBottom: 16,
  },
})

const HeroBanner: React.FC<Props> = ({
  imgSrc,
  title,
  subtitle,
  blurred,
  withOverlay,
}) => {
  return (
    <ImageBackground
      source={{ uri: imgSrc }}
      style={styles.image}
      blurRadius={blurred && 4}
    >
      <View style={[styles.image, withOverlay && styles.withDarkOverlay]}>
        <View style={styles.textContainer}>
          <Avatar.Icon size={72} icon="account" style={styles.icon} color="" />
          <Headline style={styles.title}>{title}</Headline>
          {subtitle && (
            <Subheading style={styles.subtitle}>{subtitle}</Subheading>
          )}
        </View>
      </View>
    </ImageBackground>
  )
}

export default HeroBanner
