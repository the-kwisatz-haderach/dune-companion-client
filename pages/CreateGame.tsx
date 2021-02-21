import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useLocation } from 'react-router-native'
import { View, StyleSheet } from 'react-native'
import { Headline, Paragraph } from 'react-native-paper'
import useForm from '../hooks/useForm/useForm'
import withAppbar from '../layouts/withAppBar'
import { gameSchema } from '../components/Forms/schema/game.schema'
import CreateGameForm from '../components/Forms/CreateGameForm'
import { connect } from '../store/domains/websocket/actions'
import { RootState } from '../store/domains'
import { playerActions } from 'dune'
import { Conditions } from 'dune/lib/models/game'
import { schemaCreator } from '../hooks/useForm/schema/createFormFields'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  }
})

const CreateGame = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { game, websocket } = useSelector(
    (state: RootState) => state
  ) as RootState

  useEffect(() => {
    if (!websocket.connected) {
      dispatch(connect())
    }
    // dispatch(playerActions.CREATE_GAME())
  }, [dispatch, websocket])

  const handleSubmit = (formValues: Conditions): void => {
    dispatch(
      playerActions.SET_CONDITIONS({
        gameId: game.id,
        maxPlayers: formValues.maxPlayers,
        advancedMode: formValues.advancedMode,
        maxTurns: formValues.maxTurns,
        playerId: ''
      })
    )
  }

  const { values, submitForm, updateValue } = useForm(
    { maxPlayers: 'number', advancedMode: 'checkbox', maxTurns: 'number' },
    handleSubmit
  )

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
      <Headline>Game settings</Headline>
      <Paragraph>Please enter the settings for game.</Paragraph>
      <CreateGameForm
        values={values}
        submitForm={submitForm}
        updateValue={updateValue}
      />
    </View>
  )
}

export default withAppbar(CreateGame, 'Create game')
