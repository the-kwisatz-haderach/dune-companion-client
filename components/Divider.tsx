import React, { ReactElement } from 'react'
import { StyleSheet, View, Text } from 'react-native'

interface Props {
  text?: string
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    marginRight: 10,
  },
  dividers: {
    flex: 1,
    borderColor: '#e5e5e5',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
})

function Divider({ text = '' }: Props): ReactElement {
  return (
    <View style={styles.container}>
      <View style={styles.dividers} />
      <Text style={text && styles.text}>{text}</Text>
      <View style={styles.dividers} />
    </View>
  )
}

export default Divider
