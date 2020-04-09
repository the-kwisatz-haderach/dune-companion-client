import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useLocation } from 'react-router-native'
import { View, StyleSheet } from 'react-native'
import { Headline, HelperText, Text } from 'react-native-paper'
import useForm from '../hooks/useForm/useForm'
import withAppbar from '../layouts/withAppBar'
import { ApplicationState } from '../store/store'
import { gameSchema } from '../components/Forms/schema/game.schema'
import CreateGameForm from '../components/Forms/CreateGameForm'
import { serverCreateGame } from '../store/game/game.actions'

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})

const CreateGame = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const game = useSelector(({ game }: ApplicationState) => game)

  const handleSubmit = formValues => {
    dispatch(
      serverCreateGame({
        maxPlayers: formValues.maxPlayers,
        advancedMode: formValues.advancedMode,
        maxTurns: formValues.maxTurns,
      })
    )
  }

  const [formState, onSubmit, onChange] = useForm(gameSchema, handleSubmit)

  return (
    <View style={styles.container}>
      {game.id !== '' ? (
        <Redirect
          from={location.pathname}
          to={`${location.pathname}/${game.id}`}
          push
        />
      ) : (
        <></>
      )}
      <Headline>Create game</Headline>
      <HelperText>Maximum players</HelperText>
      {game &&
        Object.keys(game).map(key => (
          <Text key={key}>{game[key].toString()}</Text>
        ))}
      <CreateGameForm
        formState={formState}
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </View>
  )
}

export default withAppbar(CreateGame, 'Create game')
