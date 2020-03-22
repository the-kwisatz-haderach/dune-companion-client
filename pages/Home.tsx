import React, { ReactElement } from 'react'
import { View, ImageBackground } from 'react-native'
import { Link } from 'react-router-native'
import { Button, TextInput, Divider, Headline, Title } from 'react-native-paper'
import HeroBanner from '../components/HeroBanner'

export default function Home(): ReactElement {
  return (
    <View>
      <HeroBanner
        imgSrc="https://490z7i45htbb1f4tty9mdpi6-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/NewWorldsWeekly_Frank_Herbert_Dune_LEAD.jpg?resolution=1440,1"
        title="Dune companion"
      />
      <View
        style={{
          padding: 40,
        }}
      >
        <Title>Login</Title>
        <TextInput label="Username" />
        <TextInput label="Password" />
        <Divider />
        <Link to="/profile">
          <Button mode="contained">Create Profile</Button>
        </Link>
      </View>
    </View>
  )
}
