import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import {
  Headline,
  Switch,
  HelperText,
  Button,
  ToggleButton,
  Text,
} from 'react-native-paper'
import useForm from '../hooks/useForm'
import withAppbar from '../layouts/withAppBar'
import { ApplicationState } from '../store/store'

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})

const createGameSchema = {
  advancedMode: {
    value: false,
    label: 'Advanced mode',
  },
  maxPlayers: {
    value: 6,
    label: 'Max players',
  },
  maxTurns: {
    value: 10,
    label: 'Max turns',
  },
}

const CreateGame = () => {
  const dispatch = useDispatch()
  const game = useSelector(({ game }: ApplicationState) => game)

  const handleSubmit = formValues => {
    dispatch({
      type: 'FETCH_CREATE_GAME',
      payload: {
        advancedMode: formValues.advancedMode,
        maxPlayers: formValues.maxPlayers,
        maxTurns: formValues.maxTurns,
      },
    })
  }

  const [formState, onSubmit, onChange] = useForm(
    createGameSchema,
    handleSubmit
  )

  return (
    <View style={styles.container}>
      <Headline>Create game</Headline>
      <HelperText>Maximum players</HelperText>
      {game &&
        Object.keys(game).map(key => (
          <Text key={key}>{game[key].toString()}</Text>
        ))}
      <ToggleButton.Row
        value={formState.maxPlayers.value.toString()}
        onValueChange={value => {
          onChange('maxPlayers', +value)
        }}
      >
        <ToggleButton icon="numeric-2" value="2" />
        <ToggleButton icon="numeric-3" value="3" />
        <ToggleButton icon="numeric-4" value="4" />
        <ToggleButton icon="numeric-5" value="5" />
        <ToggleButton icon="numeric-6" value="6" />
      </ToggleButton.Row>
      <HelperText>Turns duration</HelperText>
      <ToggleButton.Row
        value={formState.maxTurns.value.toString()}
        onValueChange={value => {
          onChange('maxTurns', +value)
        }}
      >
        <ToggleButton icon="numeric-5" value="5" />
        <ToggleButton icon="numeric-6" value="6" />
        <ToggleButton icon="numeric-7" value="7" />
        <ToggleButton icon="numeric-8" value="8" />
        <ToggleButton icon="numeric-9" value="9" />
        <ToggleButton icon="numeric-9" value="10" />
      </ToggleButton.Row>
      <HelperText>Advanced mode</HelperText>
      <Switch
        value={formState.advancedMode.value}
        onValueChange={() => {
          onChange('advancedMode', !formState.advancedMode.value)
        }}
      />
      <Button mode="contained" onPress={onSubmit}>
        Create lobby
      </Button>
    </View>
  )
}

export default withAppbar(CreateGame, 'Create game')
