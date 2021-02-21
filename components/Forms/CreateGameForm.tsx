import React from 'react'
import { View } from 'react-native'
import { Switch, HelperText, Button, ToggleButton } from 'react-native-paper'
import { UseFormProps } from '../../hooks/useForm/types'
import { gameSchema } from './schema/game.schema'

type Props = UseFormProps<typeof gameSchema>

const CreateGameForm: React.FC<Props> = ({
  values,
  submitForm,
  updateValue
}) => {
  return (
    <View>
      <HelperText>Maximum players</HelperText>
      <ToggleButton.Row
        value={values.maxPlayers.value.toString()}
        onValueChange={(value) => {
          updateValue({ key: 'maxPlayers', value: +value })
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
        value={values.maxTurns.value.toString()}
        onValueChange={(value) => {
          updateValue({ key: 'maxTurns', value: +value })
        }}
      >
        <ToggleButton icon="numeric-5" value="5" />
        <ToggleButton icon="numeric-6" value="6" />
        <ToggleButton icon="numeric-7" value="7" />
        <ToggleButton icon="numeric-8" value="8" />
        <ToggleButton icon="numeric-9" value="9" />
        <ToggleButton icon="numeric-10" value="10" />
      </ToggleButton.Row>
      <HelperText>Advanced mode</HelperText>
      <Switch
        value={values.advancedMode.value}
        onValueChange={() => {
          updateValue({
            key: 'advancedMode',
            value: !values.advancedMode.value
          })
        }}
      />
      <Button mode="contained" onPress={submitForm}>
        Create lobby
      </Button>
    </View>
  )
}

export default CreateGameForm
