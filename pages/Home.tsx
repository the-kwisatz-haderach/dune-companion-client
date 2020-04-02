import React, { ReactElement } from 'react'
import { View, Text } from 'react-native'
import { Link } from 'react-router-native'
import { Button, TextInput, Title } from 'react-native-paper'
import HeroBanner from '../components/HeroBanner'
import Divider from '../components/Divider'

export default function Home(): ReactElement {
  return (
    <View>
      <HeroBanner
        imgSrc="https://490z7i45htbb1f4tty9mdpi6-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/NewWorldsWeekly_Frank_Herbert_Dune_LEAD.jpg?resolution=1440,1"
        title="Welcome Kwisatz Haderach"
        subtitle="Dune Companion App"
        withOverlay
      />
      <View
        style={{
          padding: 40,
        }}
      >
        <View
          style={{
            marginBottom: 40,
          }}
        >
          <Title>Login</Title>
          <TextInput label="Username" />
          <TextInput label="Password" />
          <Link to="/profile/new">
            <Button>Create Profile</Button>
          </Link>
        </View>
        <Divider text="Or" />
        <View
          style={{
            marginTop: 40,
          }}
        >
          <Link to="/game/new">
            <Button mode="contained">Create game</Button>
          </Link>
        </View>
      </View>
    </View>
  )
}
