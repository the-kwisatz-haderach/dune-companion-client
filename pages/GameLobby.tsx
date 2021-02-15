import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, ScrollView, Text } from 'react-native'
import { Button, Card, Paragraph } from 'react-native-paper'
import useForm from '../hooks/useForm/useForm'
import CreatePlayerForm from '../components/Forms/CreatePlayerForm'
import { playerSchema } from '../components/Forms/schema/player.schema'
import withAppBar from '../layouts/withAppBar'
import { RootState } from '../store/domains'
import { disconnect } from '../store/domains/websocket/actions'
import factions from 'dune/lib/library/factions'

const styles = StyleSheet.create({
  container: {
    padding: 40
  }
})

const GameLobby = () => {
  const dispatch = useDispatch()
  const gameState = useSelector(
    ({ game }: RootState) => game
  ) as RootState['game']

  const handleSubmit = (formValues): void => {
    // dispatch(
    //   gameUpdater.actions.joinGame({ gameId: game.id, name: formValues.name })
    // )
  }

  const [formState, onSubmit, onChange] = useForm(playerSchema, handleSubmit)

  return (
    <ScrollView style={styles.container}>
      <Button onPress={() => dispatch(disconnect())}>Disconnect</Button>
      <Text>{gameState.id}</Text>
      {gameState.players.map((player, index) => (
        <Text key={index}>{player.name}</Text>
      ))}
      <CreatePlayerForm
        formState={formState}
        onSubmit={onSubmit}
        onChange={onChange}
      />
      {Object.values(factions).map((faction, index) => (
        <Card key={index}>
          <Card.Cover
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Mohiam%2BBeneGesserit-1984.jpg/250px-Mohiam%2BBeneGesserit-1984.jpg'
            }}
          />
          <Card.Title title={faction.name} />
          <Card.Content>
            <Paragraph>{faction.description}</Paragraph>
          </Card.Content>
          <Card.Actions>
            <Button>Select</Button>
          </Card.Actions>
        </Card>
      ))}
    </ScrollView>
  )
}

export default withAppBar(GameLobby, 'Lobby')
