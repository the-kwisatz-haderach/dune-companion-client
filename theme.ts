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
  colors: {
    primary: '#1976d2',
    primaryLight: '#6f74dd',
    primaryDark: '#00227b',
    accent: '#fbc02d',
    background: '#ffffff',
    surface: '#ffffff',
    disabled: '#F9C032',
    text: '#000000',
    backdrop: '',
  },
}
