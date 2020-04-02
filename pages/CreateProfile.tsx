import React, { ReactElement } from 'react'
import { Link } from 'react-router-native'
import { View, Text } from 'react-native'
import withAppbar from '../layouts/withAppBar'

function CreateProfile(): ReactElement {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 40,
      }}
    >
      <Text>Create Profile</Text>
      <Link to="/">
        <Text>Go Home</Text>
      </Link>
    </View>
  )
}

export default withAppbar(CreateProfile, 'Create profile')
