import { StyleSheet } from 'react-native'

export const imageStyles = StyleSheet.create({
  background: { resizeMode: 'cover' }
})

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%'
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    flex: 1
  },
  text: {
    fontSize: 16,
    padding: 40,
    lineHeight: 24,
    letterSpacing: 1.8,
    color: 'white'
  },
  spinner: {
    position: 'absolute',
    top: '40%'
  },
  progressBar: {
    width: '100%',
    height: 10
  },
  linearGradient: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  linearGradientImage: {
    height: '40%',
    width: '100%'
  }
})
