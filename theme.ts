import { DefaultTheme, configureFonts } from 'react-native-paper'

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal' as any,
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal' as any,
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal' as any,
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal' as any,
    },
  },
}

export const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
}
