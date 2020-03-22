import React, { ReactElement } from 'react'
import { Link } from 'react-router-native'
import { View, Text } from 'react-native'

export default function Profile(): ReactElement {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 40,
      }}
    >
      <Text>Profile</Text>
      <Link to="/">
        <Text>Go Home</Text>
      </Link>
    </View>
  )
}
