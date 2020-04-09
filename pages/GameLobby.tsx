import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import { ApplicationState } from '../store/store'
import useForm from '../hooks/useForm/useForm'
import CreatePlayerForm from '../components/Forms/CreatePlayerForm'
import { playerSchema } from '../components/Forms/schema/player.schema'
import withAppBar from '../layouts/withAppBar'
import { serverAddPlayer } from '../store/game/game.actions'

const GameLobby = () => {
  const dispatch = useDispatch()
  const game = useSelector(({ game }: ApplicationState) => game)
  const handleSubmit = formValues => {
    dispatch(serverAddPlayer({ gameId: game.id, playerName: formValues.name }))
  }

  const [formState, onSubmit, onChange] = useForm(playerSchema, handleSubmit)

  return (
    <View style={styles.container}>
      <Text>{game.id}</Text>
      {game.players.map(player => (
        <Text>{player.name}</Text>
      ))}
      <CreatePlayerForm
        formState={formState}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
})

export default withAppBar(GameLobby, 'Lobby')
